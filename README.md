# DobDog Elegance

Website for DobDog Elegance, a small Dobermann and Great Dane home kennel in
Estonia — live at [dobdog.com](https://dobdog.com). Built with Next.js (App
Router) and deployed on Vercel.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Languages

Every page exists in English, Estonian and Russian under its own URL:
`/en/...`, `/et/...`, `/ru/...`. Visiting a URL without a language prefix
(for example `/puppies`) redirects to the visitor's language (`src/proxy.ts`).

| What                            | Where                                |
| ------------------------------- | ------------------------------------ |
| Page text (all three languages) | `src/components/LangContext.tsx`     |
| Search titles and descriptions  | `src/lib/seo.ts`                     |
| Privacy policy                  | `src/app/[lang]/privacy/content.tsx` |
| Pedigrees                       | `src/lib/pedigrees.ts`               |
| Pages                           | `src/app/[lang]/...`                 |
| Styles                          | `src/app/globals.css`                |

When you change text, update it in all three languages.

## Images and videos

- Small site images live in `public/images`.
- Puppy photos and videos are stored in Vercel Blob and referenced by URL
  (see `src/app/[lang]/puppies/page.tsx` and `src/lib/videos.ts`).
- `upload-videos.mjs` uploads local videos to Vercel Blob and prints their
  URLs. `compress-images.mjs` batch-compresses images in `public/images`.

## Environment variables

| Variable                | Needed for                                                          |
| ----------------------- | ------------------------------------------------------------------- |
| `RESEND_API_KEY`        | Sending contact form emails (set in Vercel)                         |
| `NEXT_PUBLIC_SITE_URL`  | Optional; site address for SEO links (default `https://dobdog.com`) |
| `BLOB_READ_WRITE_TOKEN` | Only for `upload-videos.mjs` (`vercel env pull .env.local`)         |

## SEO

`src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
`/robots.txt`. The site is verified in Google Search Console via
`public/google171d9241a175b1c6.html` — keep that file.
