# AxonBox marketing site

Standalone marketing / pitch site for **AxonBox**. Independent of the product app.

| Site | Host | URL |
|---|---|---|
| Marketing (this repo) | **Vercel** | after deploy: `*.vercel.app` |
| Product app | Railway | https://axonbox-production.up.railway.app |

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (e.g. `MartinClare/axonbox-marketing`).
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework preset: **Next.js** (defaults are fine). No env vars required.
4. Deploy. Set the production domain when ready.

Demo CTA points at the Railway app. Demo login shown on the site: `admin@axon.demo` / `demo1234`.

## Content

- Brand + pitch art under `public/media/` and `public/icons/`
- Landing copy in `src/app/page.tsx`
- Contact email / demo URL in `src/lib/brand.ts`
