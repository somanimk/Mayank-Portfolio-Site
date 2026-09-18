import { NextResponse } from "next/server";
import { profile } from "@/lib/portfolio";

export async function GET(request, { params }) {
  const { provider } = await params;
  if (provider !== "github" && provider !== "linkedin") {
    return NextResponse.json({ error: "Unknown provider" }, { status: 404 });
  }
  const token = process.env.LINKEDIN_ACCESS_TOKEN?.trim();
  const headers = { "Cache-Control": provider === "linkedin" ? "no-store" : "public, max-age=300" };
  if (provider === "linkedin" && !token) {
    console.error("[social/linkedin] LINKEDIN_ACCESS_TOKEN missing");
    return NextResponse.json({ configured: false, error: "LINKEDIN_ACCESS_TOKEN missing" }, { headers });
  }
  try {
    const username = new URL(profile.github).pathname.split("/").filter(Boolean)[0];
    const response = await fetch(
      provider === "github" ? `https://api.github.com/users/${encodeURIComponent(username)}` : "https://api.linkedin.com/v2/userinfo",
      {
        headers: provider === "github"
          ? { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" }
          : { Authorization: `Bearer ${token}` },
        ...(provider === "linkedin" ? { cache: "no-store" } : { next: { revalidate: 3600 } }),
        signal: AbortSignal.timeout(8000),
      }
    );
    if (!response.ok) {
      const reason = response.status === 401 ? "Access token invalid or expired"
        : response.status === 403 ? "Profile permission denied; check authorized scopes"
        : response.status === 429 ? "Profile API rate limit reached"
        : "Profile API request failed";
      console.error(`[social/${provider}] Upstream HTTP ${response.status}: ${reason}`);
      return NextResponse.json({ error: reason, upstreamStatus: response.status }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const data = await response.json();
    const details = provider === "github" ? {
      name: data.name || data.login,
      username: data.login,
      avatar: data.avatar_url,
      bio: data.bio,
      location: data.location,
      repos: data.public_repos,
      followers: data.followers,
    } : {
      name: data.name || [data.given_name, data.family_name].filter(Boolean).join(" "),
      avatar: data.picture,
    };
    return NextResponse.json({ configured: true, ...details }, { headers });
  } catch (error) {
    const timedOut = error?.name === "TimeoutError" || error?.name === "AbortError";
    const reason = timedOut ? "Profile API request timed out" : "Profile request or response processing failed";
    console.error(`[social/${provider}] ${reason}`);
    return NextResponse.json({ error: reason }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
