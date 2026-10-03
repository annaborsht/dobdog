import type { ReactElement } from "react";
import type { Locale } from "@/lib/i18n";

function English() {
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

function Estonian() {
  return (
    <div className="legal-page">
      <h1>Privaatsuspoliitika</h1>
      <p className="legal-updated">Viimati uuendatud: 3. oktoober 2026</p>

      <p>
        DobDog Elegance (&bdquo;meie&ldquo;), mida peab Heidi Ader ja mis asub
        Tallinnas, Eestis, on väike dobermanni ja taani dogi kasvandus. See
        leht selgitab, milliseid isikuandmeid see veebileht kogub, kui seda
        külastate või meiega ühendust võtate, miks me neid kogume ja millised
        õigused teil nende üle on.
      </p>

      <h2>Mida me kogume</h2>
      <p>
        <strong>Kui kasutate kontaktivormi:</strong> teie nimi, e-posti
        aadress, valitud teema ja kirjutatud sõnum. Kogume ainult seda, mille
        te ise vormi sisestate.
      </p>
      <p>
        <strong>Automaatselt, koondatuna:</strong> see veebileht kasutab Vercel
        Analyticsit ja Vercel Speed Insightsi, et mõista, kui palju inimesi
        lehte külastab ja kuidas lehed laadivad. Mõlemad on Verceli poolt
        loodud töötama ilma küpsisteta ja ilma teid saitide vahel individuaalselt
        jälgimata – me näeme ainult koondnumbreid (nt lehevaatamised,
        laadimisajad), mitte teiega seotud profiili.
      </p>
      <p>
        <strong>Keele eelistuse küpsis:</strong> kui vahetate lehe keelt,
        salvestame teie brauserisse ühe väikese küpsise nimega{" "}
        <code>dobdog-lang</code>, mis sisaldab teie valikut (<code>en</code>,{" "}
        <code>et</code> või <code>ru</code>). Seda kasutatakse ainult selleks,
        et näidata lehte järgmisel külastusel teie valitud keeles. Küpsis
        aegub ühe aasta pärast ega sisalda isikuandmeid. Seda ei kasutata
        jälgimiseks ega reklaamiks. Kuna see on vajalik üksnes teie küsitud
        seade pakkumiseks, ei vaja see nõusolekubännerit; saate selle
        brauseri seadetes igal ajal kustutada ja leht näitab siis lihtsalt
        vaikekeelt.
      </p>

      <h2>Kuidas me andmeid kasutame</h2>
      <p>
        Kasutame kontaktivormi sõnumeid ainult teie päringule vastamiseks –
        näiteks kutsikate saadavuse või meie koerte kohta. Me ei kasuta neid
        turunduseks, ei koosta nende põhjal postiloendeid ning ei müü ega jaga
        neid reklaamijatega.
      </p>

      <h2>Kuidas andmeid töödeldakse ja säilitatakse</h2>
      <p>
        Kontaktivormi kaudu saadetud sõnumid toimetatakse otse meie
        postkasti e-kirjana, kasutades e-kirjade saatmise teenusena Resendi –
        me ei salvesta vormide sisu sellel lehel andmebaasis. Teie e-posti
        aadress määratakse ka vastusaadressiks, nii et meie vastus jõuab otse
        teieni.
      </p>
      <p>
        Rämpsu vältimiseks märgib server lühiajaliselt üles IP-aadressi, kust
        sõnum saadeti, et piirata lühikese aja jooksul saadetavate sõnumite
        arvu. Seda hoitakse ainult mälus, seda ei kirjutata kettale ja see
        kustutatakse automaatselt – see ei ole seotud teie sõnumi sisuga ega
        seda ei säilitata pikaajaliselt.
      </p>
      <p>
        Säilitame teie saadetud e-kirju niikaua, kuni on mõistlikult vaja teile
        vastamiseks ja vajaduse korral käimasoleva kutsikapäringu
        dokumenteerimiseks – pärast seda need kustutatakse.
      </p>

      <h2>Kellega me andmeid jagame</h2>
      <p>
        Kasutame selle lehe käitamiseks väikest hulka teenusepakkujaid
        (&bdquo;volitatud töötlejaid&ldquo;), kes töötlevad andmeid ainult
        meie nimel:
      </p>
      <ul>
        <li>
          <strong>Resend</strong> – toimetab kontaktivormi e-kirjad meieni.
        </li>
        <li>
          <strong>Vercel</strong> – majutab seda lehte ja pakub eespool
          kirjeldatud küpsisteta analüütika- ja jõudlusvahendeid.
        </li>
      </ul>
      <p>Me ei müü teie andmeid ega jaga neid reklaamieesmärkidel.</p>

      <h2>Teie õigused</h2>
      <p>
        Isikuandmete kaitse üldmääruse (GDPR) alusel on teil õigus küsida,
        milliseid isikuandmeid me teie kohta hoiame, neid parandada, lasta
        need kustutada, piirata nende kasutamist või sellele vastu vaielda
        ning saada neist koopia. Nende õiguste kasutamiseks kirjutage meile
        aadressil <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
      <p>
        Kui leiate, et me ei ole teie andmeid nõuetekohaselt käsitlenud, võite
        esitada kaebuse ka Eesti Andmekaitse Inspektsioonile aadressil{" "}
        <a
          href="https://www.aki.ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aki.ee
        </a>
        .
      </p>

      <h2>Lapsed</h2>
      <p>
        See leht ei ole suunatud lastele ning me ei kogu teadlikult lastelt
        isikuandmeid.
      </p>

      <h2>Muudatused selles poliitikas</h2>
      <p>
        Kui see poliitika muutub, uuendame seda lehte ja ülaltoodud
        &bdquo;viimati uuendatud&ldquo; kuupäeva.
      </p>

      <h2>Võtke meiega ühendust</h2>
      <p>
        Küsimusi selle poliitika või oma andmete kohta? Kirjutage{" "}
        <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
    </div>
  );
}

function Russian() {
  return (
    <div className="legal-page">
      <h1>Политика конфиденциальности</h1>
      <p className="legal-updated">Последнее обновление: 3 октября 2026 г.</p>

      <p>
        DobDog Elegance (&laquo;мы&raquo;), которым управляет Хейди Адер и
        который находится в Таллине (Эстония), — небольшой питомник
        доберманов и немецких догов. На этой странице объясняется, какие
        персональные данные собирает этот сайт, когда вы посещаете его или
        связываетесь с нами, зачем мы их собираем и какие права вы имеете в
        отношении этих данных.
      </p>

      <h2>Что мы собираем</h2>
      <p>
        <strong>Когда вы пользуетесь формой обратной связи:</strong> ваше имя,
        адрес электронной почты, выбранную тему и написанное вами сообщение.
        Мы собираем только то, что вы сами вводите в форму.
      </p>
      <p>
        <strong>Автоматически, в обобщённом виде:</strong> этот сайт
        использует Vercel Analytics и Vercel Speed Insights, чтобы понимать,
        сколько людей посещает сайт и как загружаются страницы. Оба
        инструмента разработаны Vercel так, чтобы работать без файлов cookie
        и без индивидуального отслеживания вас на разных сайтах — мы видим
        только сводные цифры (например, просмотры страниц, время загрузки), но
        не профиль, связанный с вами.
      </p>
      <p>
        <strong>Cookie языковых предпочтений:</strong> если вы переключаете
        язык сайта, мы сохраняем в вашем браузере один небольшой файл cookie
        с именем <code>dobdog-lang</code>, содержащий ваш выбор (
        <code>en</code>, <code>et</code> или <code>ru</code>). Он
        используется только для того, чтобы при следующем посещении показать
        сайт на выбранном вами языке, действует один год и не содержит
        персональных данных. Он не используется для отслеживания или
        рекламы. Поскольку он нужен только для работы настройки, которую вы
        запросили, для него не требуется баннер согласия; вы можете удалить
        его в любое время в настройках браузера, и сайт просто будет
        показываться на языке по умолчанию.
      </p>

      <h2>Как мы используем данные</h2>
      <p>
        Мы используем сообщения из формы обратной связи только для того, чтобы
        ответить на ваш запрос — например, о наличии щенков или о наших
        собаках. Мы не используем их в маркетинговых целях, не составляем на их
        основе списки рассылки и не продаём и не передаём их рекламодателям.
      </p>

      <h2>Как данные обрабатываются и хранятся</h2>
      <p>
        Сообщения, отправленные через форму обратной связи, доставляются
        напрямую в наш почтовый ящик по электронной почте с помощью сервиса
        отправки писем Resend — мы не храним содержимое форм в базе данных на
        этом сайте. Ваш адрес электронной почты также указывается как адрес
        для ответа, поэтому наш ответ придёт непосредственно вам.
      </p>
      <p>
        Чтобы предотвратить спам, сервер кратковременно запоминает IP-адрес, с
        которого было отправлено сообщение, чтобы ограничить число сообщений,
        которые можно отправить за короткий промежуток времени. Эти данные
        хранятся только в памяти, не записываются на диск и автоматически
        удаляются — они не связаны с содержанием вашего сообщения и не
        хранятся длительно.
      </p>
      <p>
        Мы храним отправленные вами письма столько, сколько разумно необходимо,
        чтобы ответить вам и, при необходимости, вести учёт текущего запроса о
        щенке, — после чего они удаляются.
      </p>

      <h2>С кем мы делимся данными</h2>
      <p>
        Для работы этого сайта мы пользуемся небольшим числом поставщиков услуг
        (&laquo;обработчиков&raquo;), которые обрабатывают данные только от
        нашего имени:
      </p>
      <ul>
        <li>
          <strong>Resend</strong> — доставляет нам письма из формы обратной
          связи.
        </li>
        <li>
          <strong>Vercel</strong> — размещает этот сайт и предоставляет
          описанные выше инструменты аналитики и измерения производительности
          без использования cookie.
        </li>
      </ul>
      <p>
        Мы не продаём ваши данные и не передаём их в рекламных целях.
      </p>

      <h2>Ваши права</h2>
      <p>
        В соответствии с GDPR вы имеете право запросить, какие персональные
        данные о вас мы храним, исправить их, потребовать их удаления,
        ограничить их использование или возразить против него, а также
        получить их копию. Чтобы воспользоваться любым из этих прав, напишите
        нам на <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
      <p>
        Если вы считаете, что мы неправильно обращаемся с вашими данными, вы
        также можете подать жалобу в Инспекцию по защите данных Эстонии
        (Andmekaitse Inspektsioon) на сайте{" "}
        <a
          href="https://www.aki.ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aki.ee
        </a>
        .
      </p>

      <h2>Дети</h2>
      <p>
        Этот сайт не предназначен для детей, и мы сознательно не собираем
        персональные данные детей.
      </p>

      <h2>Изменения в этой политике</h2>
      <p>
        Если эта политика изменится, мы обновим эту страницу и указанную выше
        дату &laquo;последнего обновления&raquo;.
      </p>

      <h2>Свяжитесь с нами</h2>
      <p>
        Есть вопросы об этой политике или о ваших данных? Напишите на{" "}
        <a href="mailto:contact@dobdog.com">contact@dobdog.com</a>.
      </p>
    </div>
  );
}

const CONTENT: Record<Locale, () => ReactElement> = {
  en: English,
  et: Estonian,
  ru: Russian,
};

export default function PrivacyContent({ lang }: { lang: Locale }) {
  const Content = CONTENT[lang];
  return <Content />;
}
