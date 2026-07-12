"use client";
import { useLang } from "@/components/LangContext";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formEl = e.currentTarget; // capture reference now, while it's valid
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      body: form.get("body"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Contact form failed:", res.status, data);
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("sent");
      formEl.reset(); // use the captured reference
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="contact-wrapper">
      <h1>{c.title}</h1>
      <p className="subtitle">{c.subtitle}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">{c.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Anna Mägi"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">{c.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="anna@example.com"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="subject">{c.subject}</label>
          <select id="subject" name="subject">
            <option value="">{c.subjectDefault}</option>
            {c.topics.map((topic, i) => (
              <option key={i} value={topic.toLowerCase().replace(/\s+/g, "-")}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="message">{c.message}</label>
          <textarea id="message" name="body" placeholder="..." required />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={status === "sending"}
        >
          {status === "sending" ? "..." : c.send}
        </button>

        {status === "sent" && <p>Thanks — message sent!</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}
