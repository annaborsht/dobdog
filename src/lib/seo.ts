import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  LOCALES,
  OG_LOCALE,
  SITE_URL,
  localizePath,
  type Locale,
} from "./i18n";

const BLOB = "https://mmwjaafneskfdl7c.public.blob.vercel-storage.com";

export const SITE_NAME = "DobDog Elegance";

export type PageKey =
  | "home"
  | "dobermann"
  | "greatDane"
  | "ourDogs"
  | "freya"
  | "sirius"
  | "mia"
  | "sahara"
  | "armageddonsHope"
  | "puppies"
  | "contact"
  | "privacy";

export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  dobermann: "/dobermann",
  greatDane: "/great-dane",
  ourDogs: "/our-dogs",
  freya: "/our-dogs/freya",
  sirius: "/our-dogs/sirius",
  mia: "/our-dogs/mia",
  sahara: "/our-dogs/sahara",
  armageddonsHope: "/our-dogs/armageddons_hope",
  puppies: "/puppies",
  contact: "/contact",
  privacy: "/privacy",
};

type PageCopy = { title: string; description: string };

const COPY: Record<PageKey, Record<Locale, PageCopy>> = {
  home: {
    en: {
      title: "DobDog Elegance – Dobermann & Great Dane Breeders in Estonia",
      description:
        "Small home kennel in Estonia breeding Dobermanns and Great Danes with passion. Meet our dogs and our new Dobermann puppies.",
    },
    et: {
      title: "DobDog Elegance – dobermanni ja taani doki kasvandus Eestis",
      description:
        "Väike kodukasvandus Eestis, kus kasvatame kirega dobermanne ja taani dogisid. Tutvu meie koerte ja uute dobermanni kutsikatega.",
    },
    ru: {
      title: "DobDog Elegance – питомник догов и доберманов в Эстонии",
      description:
        "Небольшой домашний питомник в Эстонии: мы с любовью выращиваем доберманов и немецких догов. Познакомьтесь с нашими собаками и щенками добермана.",
    },
  },
  dobermann: {
    en: {
      title: "Dobermann breed – temperament, health & care | DobDog Elegance",
      description:
        "Everything about the Dobermann: history, temperament, health and what life with this loyal, athletic breed is really like.",
    },
    et: {
      title: "Dobermanni tõug – iseloom, tervis ja hooldus | DobDog Elegance",
      description:
        "Kõik dobermannist: ajalugu, iseloom, tervis ja see, milline on elu selle lojaalse ja sportliku tõuga.",
    },
    ru: {
      title: "Доберман – характер, здоровье и уход | DobDog Elegance",
      description:
        "Всё о породе доберман: история, характер, здоровье и то, каково жить с этой преданной и спортивной собакой.",
    },
  },
  greatDane: {
    en: {
      title: "Great Dane breed – the gentle giant | DobDog Elegance",
      description:
        "Learn about the Great Dane: its history, calm temperament, health and care needs, from a Great Dane breeder in Estonia.",
    },
    et: {
      title: "Taani dogi tõug – leebe hiiglane | DobDog Elegance",
      description:
        "Tutvu taani dogiga: ajalugu, rahulik iseloom, tervis ja hooldus – Eesti taani dogi kasvatajalt.",
    },
    ru: {
      title: "Немецкий дог – добрый великан | DobDog Elegance",
      description:
        "О породе немецкий дог: история, спокойный характер, здоровье и уход – от заводчика догов в Эстонии.",
    },
  },
  ourDogs: {
    en: {
      title: "Our dogs – Dobermanns & Great Dane | DobDog Elegance",
      description:
        "Meet the DobDog Elegance family: Freya, Sirius, Mia, Sahara and our newest Dobermann puppy.",
    },
    et: {
      title: "Meie koerad – dobermannid ja taani dogi | DobDog Elegance",
      description:
        "Tutvu DobDog Elegance'i perega: Freya, Sirius, Mia, Sahara ja meie uusim dobermanni kutsikas.",
    },
    ru: {
      title: "Наши собаки – доберманы и дог | DobDog Elegance",
      description:
        "Знакомьтесь с семьёй DobDog Elegance: Фрейя, Сириус, Миа, Сахара и наш новый щенок добермана.",
    },
  },
  freya: {
    en: {
      title: "Freya – Dobermann female | DobDog Elegance",
      description:
        "Freya, our spirited and devoted Dobermann girl and the heart of the pack. Read her story and see her photos.",
    },
    et: {
      title: "Freya – dobermanni tüdruk | DobDog Elegance",
      description:
        "Freya, meie elurõõmus ja pühendunud dobermanni tüdruk ja karja süda. Loe tema lugu ja vaata fotosid.",
    },
    ru: {
      title: "Фрейя – доберман, девочка | DobDog Elegance",
      description:
        "Фрейя – наша жизнерадостная и преданная девочка-доберман, сердце нашей стаи. Её история и фото.",
    },
  },
  sirius: {
    en: {
      title: "Sirius – Dobermann male | DobDog Elegance",
      description:
        "Sirius, our bold, loyal and endlessly playful Dobermann boy. Read his story, photos and videos.",
    },
    et: {
      title: "Sirius – dobermanni poiss | DobDog Elegance",
      description:
        "Sirius, meie julge, lojaalne ja lõputult mänguhimuline dobermanni poiss. Loe tema lugu, vaata fotosid ja videoid.",
    },
    ru: {
      title: "Сириус – доберман, мальчик | DobDog Elegance",
      description:
        "Сириус – наш смелый, преданный и неутомимо игривый мальчик-доберман. Его история, фото и видео.",
    },
  },
  mia: {
    en: {
      title: "Mia – Dobermann rescued from Ukraine | DobDog Elegance",
      description:
        "Mia was rescued from war-torn Ukraine and found a loving home with us. Read her story and see her photos and videos.",
    },
    et: {
      title: "Mia – Ukrainast päästetud dobermann | DobDog Elegance",
      description:
        "Mia päästeti sõjast räsitud Ukrainast ja leidis meie juures armastava kodu. Loe tema lugu, vaata fotosid ja videoid.",
    },
    ru: {
      title: "Миа – доберман, спасённая из Украины | DobDog Elegance",
      description:
        "Миа была спасена из охваченной войной Украины и обрела у нас любящий дом. Её история, фото и видео.",
    },
  },
  sahara: {
    en: {
      title: "Sahara – champion Great Dane | DobDog Elegance",
      description:
        "Sahara, our accomplished champion Great Dane girl: elegant, focused and beautifully decorated. Titles and photos.",
    },
    et: {
      title: "Sahara – tšempion taani dogi | DobDog Elegance",
      description:
        "Sahara, meie edukas tšempionist taani dogi tüdruk: elegantne, keskendunud ja kaunilt autasustatud. Tiitlid ja fotod.",
    },
    ru: {
      title: "Сахара – чемпионка, немецкий дог | DobDog Elegance",
      description:
        "Сахара – наша титулованная девочка-дог: элегантная, сосредоточенная и отмеченная наградами. Титулы и фото.",
    },
  },
  armageddonsHope: {
    en: {
      title: "Armageddons Hope – Dobermann puppy | DobDog Elegance",
      description:
        "Armageddons Hope, born 25.07.2026 – the newest member of our Dobermann pack, full of curiosity and promise.",
    },
    et: {
      title: "Armageddons Hope – dobermanni kutsikas | DobDog Elegance",
      description:
        "Armageddons Hope, sündinud 25.07.2026 – meie dobermannide karja uusim liige, täis uudishimu ja tõotust.",
    },
    ru: {
      title: "Armageddons Hope – щенок добермана | DobDog Elegance",
      description:
        "Armageddons Hope, родился 25.07.2026 – новый член нашей стаи доберманов, полный любопытства и надежд.",
    },
  },
  puppies: {
    en: {
      title: "Dobermann puppies for sale in Estonia | DobDog Elegance",
      description:
        "Dobermann puppies from the 'A' litter, born 25 July 2026 in Estonia. Raised at home with socialisation and veterinary care, suitable for sport and shows.",
    },
    et: {
      title: "Dobermanni kutsikad müügil Eestis | DobDog Elegance",
      description:
        "Dobermanni kutsikad A-pesakonnast, sündinud 25. juulil 2026 Eestis. Kasvanud kodus, hea sotsialiseerimise ja veterinaarhooldusega, sobivad spordiks ja näitustele.",
    },
    ru: {
      title: "Щенки добермана на продажу в Эстонии | DobDog Elegance",
      description:
        "Щенки добермана из помёта «A», родившиеся 25 июля 2026 года в Эстонии. Выращены дома, с социализацией и ветеринарным уходом, подходят для спорта и выставок.",
    },
  },
  contact: {
    en: {
      title: "Contact us – enquire about a Dobermann puppy | DobDog Elegance",
      description:
        "Get in touch with DobDog Elegance to ask about our Dobermann puppies, Great Danes or anything else.",
    },
    et: {
      title: "Kontakt – küsi dobermanni kutsika kohta | DobDog Elegance",
      description:
        "Võta ühendust DobDog Elegance'iga, et küsida meie dobermanni kutsikate, taani dogide või muu kohta.",
    },
    ru: {
      title: "Контакты – узнать о щенке добермана | DobDog Elegance",
      description:
        "Свяжитесь с DobDog Elegance, чтобы узнать о наших щенках добермана, догах или задать любой вопрос.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | DobDog Elegance",
      description: "How DobDog Elegance collects and uses personal data.",
    },
    et: {
      title: "Privaatsuspoliitika | DobDog Elegance",
      description: "Kuidas DobDog Elegance kogub ja kasutab isikuandmeid.",
    },
    ru: {
      title: "Политика конфиденциальности | DobDog Elegance",
      description:
        "Как DobDog Elegance собирает и использует персональные данные.",
    },
  },
};

const OG_IMAGES: Partial<Record<PageKey, string>> = {
  puppies: `${BLOB}/puppies/6T1A6145_resized.jpg`,
  dobermann: "/images/dobermann/banner.jpg",
  ourDogs: "/images/ourDogs/banner_cropped.jpg",
};
const DEFAULT_OG_IMAGE = "/images/banner2.jpg";

export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      LOCALES.map((l) => [l, `${SITE_URL}${localizePath(path, l)}`]),
    ),
    "x-default": `${SITE_URL}${localizePath(path, DEFAULT_LOCALE)}`,
  };
}

export function pageMetadata(page: PageKey, locale: Locale): Metadata {
  const { title, description } = COPY[page][locale];
  const path = PAGE_PATHS[page];
  const url = `${SITE_URL}${localizePath(path, locale)}`;
  const image = OG_IMAGES[page] ?? DEFAULT_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
