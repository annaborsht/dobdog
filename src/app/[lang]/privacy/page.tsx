export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: 3 October 2026</p>

      <p>
        DobDog Elegance (&ldquo;we&rdquo;, &ldquo;us&rdquo;), run by Heidi
        Ader and based in Tallinn, Estonia, is a small Dobermann and Great
        Dane kennel. This page explains what personal data this website
        collects when you visit or contact us, why, and what rights you have
        over it.
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>When you use the contact form:</strong> your name, email
        address, the topic you select, and the message you write. We only
        collect what you choose to type into the form.
      </p>
      <p>
        <strong>Automatically, in aggregate:</strong> this site uses Vercel
        Analytics and Vercel Speed Insights to understand how many people
        visit and how pages perform. Both are designed by Vercel to work
        without cookies and without tracking you individually across sites —
        we only see aggregated numbers (e.g. page views, load times), never
        a profile tied to you.
      </p>
      <p>
        <strong>Language preference cookie:</strong> if you switch the site
        language, we store one small cookie named <code>dobdog-lang</code>{" "}
        in your browser containing your choice (<code>en</code>,{" "}
        <code>et</code> or <code>ru</code>). It is used only to show the
        site in your chosen language on your next visit, expires after one
        year, and contains no personal data. It is not used for tracking or
        advertising. As it is needed only to provide the setting you asked
        for, it does not require a consent banner; you can delete it at any
        time in your browser settings, and the site will then simply show
        the default language.
      </p>

      <h2>How we use it</h2>
      <p>
        We use contact form submissions only to reply to your enquiry —
        for example, about puppy availability or our dogs. We do not use
        it for marketing, we do not build mailing lists from it, and we
        do not sell or share it with advertisers.
      </p>

      <h2>How it&rsquo;s processed and stored</h2>
      <p>
        Messages you send through the contact form are delivered straight
        to our inbox by email, using Resend as our email-sending service —
        we don&rsquo;t store form submissions in a database on this site.
        Your email address is also set as the reply-to address, so our
        reply goes directly to you.
      </p>
      <p>
        To prevent spam, the server briefly notes the IP address a
        submission came from to limit how many messages can be sent in a
        short window. This is kept in memory only, is never written to
        disk, and is cleared automatically — it is not linked to your
        message content or retained long-term.
      </p>
      <p>
        We keep the emails you send us for as long as reasonably needed to
        respond to you and, if relevant, to keep a record of an ongoing
        puppy enquiry — after which they are deleted.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use a small number of service providers (&ldquo;processors&rdquo;)
        to run this site, who only process data on our behalf:
      </p>
      <ul>
        <li>
          <strong>Resend</strong> — delivers contact form emails to us.
        </li>
        <li>
          <strong>Vercel</strong> — hosts this site and provides the
          cookieless analytics and performance tools described above.
        </li>
      </ul>
      <p>We do not sell your data or share it for advertising purposes.</p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR, you have the right to ask us what personal data we
        hold about you, to correct it, to have it deleted, to restrict or
        object to how we use it, and to receive a copy of it. To exercise
        any of these, just email us at{" "}
        <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
      <p>
        If you believe we haven&rsquo;t handled your data properly, you can
        also lodge a complaint with Estonia&rsquo;s Data Protection
        Inspectorate (Andmekaitse Inspektsioon) at{" "}
        <a
          href="https://www.aki.ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aki.ee
        </a>
        .
      </p>

      <h2>Children</h2>
      <p>
        This site is not directed at children, and we do not knowingly
        collect personal data from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we&rsquo;ll update this page and the
        &ldquo;last updated&rdquo; date above.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy or your data? Email{" "}
        <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
    </div>
  );
}
