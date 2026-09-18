import { NextResponse } from "next/server";
import { profile } from "@/lib/portfolio";

export async function GET(request, { params }) {
  const { provider } = await params;
  if (provider !== "github" && provider !== "linkedin") {
    return NextResponse.json({ error: "Unknown provider" }, { status: 404 });
  }
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  if (provider === "linkedin" && !token) {
    return NextResponse.json({ configured: false });
  }
  try {
    const username = new URL(profile.github).pathname.split("/").filter(Boolean)[0];
    const response = await fetch(
      provider === "github" ? `https://api.github.com/users/${encodeURIComponent(username)}` : "https://api.linkedin.com/v2/userinfo",
      {
        headers: provider === "github"
          ? { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" }
          : { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      }
    );
    if (!response.ok) throw new Error("Profile unavailable");
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
    return NextResponse.json({ configured: true, ...details }, { headers: { "Cache-Control": "public, max-age=300" } });
  } catch {
    return NextResponse.json({ error: "Profile temporarily unavailable" }, { status: 502 });
  }
}
