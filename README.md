# AxonBox marketing site

Standalone marketing / pitch site for **AxonBox**. Independent of the product app.

| Site | Host | URL |
|---|---|---|
| Marketing (this repo) | **Vercel** | https://axonbox-marketing.vercel.app |
| Product app | Railway | https://axonbox-production.up.railway.app |

GitHub: https://github.com/MartinClare/axonbox-marketing

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

Already linked to the `martinclares-projects/axonbox-marketing` Vercel project.

```bash
npx vercel deploy --prod
```

Or connect the GitHub repo in the Vercel dashboard for auto-deploys on push to `main`.

Demo CTA points at the Railway app. Demo login on the site: `admin@axon.demo` / `demo1234`.

## Content

- Brand + pitch art under `public/media/` and `public/icons/`
- Landing copy in `src/app/page.tsx`
- Contact email / demo URL in `src/lib/brand.ts`
