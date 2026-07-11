"use client";
import { useLang } from "@/components/LangContext";

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <div className="contact-wrapper">
      <h1>{c.title}</h1>
      <p className="subtitle">{c.subtitle}</p>

      <form
        className="contact-form"
        action="mailto:contact@dobdog.com"
        method="get"
      >
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

        <button type="submit" className="submit-btn">
          {c.send}
        </button>
      </form>
    </div>
  );
}
