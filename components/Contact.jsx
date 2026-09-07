import ActionIcon from "./ActionIcon";
import { useRef, useState } from "react";
import { profile } from "@/lib/portfolio";
import Section from "./Section";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const submitting = useRef(false);

  const onSubmit = async event => {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    setStatus("sending");
    setMessage("Sending your message…");
    try {
      const formData = new FormData(form);
      formData.append("access_key", "5e0f85c0-7d9d-4cab-9bfa-890ea6e9147b");
      formData.append("subject", "Portfolio inquiry for Mayank Somani");
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData, signal: controller.signal });
      if (!response.ok) throw new Error("Submission failed");
      const data = await response.json();
      if (!data.success) throw new Error("Submission failed");
      setStatus("success");
      setMessage("Thanks for reaching out. Your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Your message could not be sent. Please try again or email me directly.");
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  };

  return <div className="bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-center bg-no-repeat dark:bg-none">
    <Section id="contact" eyebrow="Let’s connect" title="Building a product that needs engineering depth?" description="Let’s connect to build scalable web products that turn complex engineering challenges into simple, reliable user experiences.">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a className="text-link break-all" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <form onSubmit={onSubmit} aria-busy={status === "sending"}>
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <div><label className="form-label" htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} className="form-input" placeholder="Your name" /></div>
            <div><label className="form-label" htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="form-input" placeholder="you@company.com" /></div>
          </div>
          <label className="form-label" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required maxLength={5000} rows={5} className="form-input" placeholder="Tell me about the role, team, or product." />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
          <button type="submit" disabled={status === "sending"} className="button-primary mx-auto mt-6 disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending…" : "Send message"}<ActionIcon name="mail" /></button>
          <p role="status" aria-live="polite" aria-atomic="true" className={`mt-4 min-h-7 text-center text-sm ${status === "error" ? "text-red-700 dark:text-red-300" : "text-gray-600 dark:text-white/75"}`}>{message}</p>
        </form>
      </div>
    </Section>
  </div>;
}
