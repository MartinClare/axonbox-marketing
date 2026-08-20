# AxonCase marketing site

Standalone marketing / pitch site for **AxonCase**. Independent of the product app.

| Site | Host | URL |
|---|---|---|
| Marketing (this repo) | **Vercel** | https://axoncase.com (DNS pending) · https://axonbox-marketing.vercel.app |
| Product app | Railway | https://axonbox-production.up.railway.app |

GitHub: https://github.com/MartinClare/axonbox-marketing

## Custom domain (`axoncase.com`)

Attached in Vercel to project `axonbox-marketing`. At the DNS host (**Instra** / `*.instradns.com`), set:

| Type | Name | Value |
|---|---|---|
| **A** | `@` | `216.150.1.1` |
| **A** | `@` | `216.150.16.1` |
| **CNAME** | `www` | `29aba2f90e828185.vercel-dns-016.com` |

Remove any old **A** record pointing `@` to `198.50.252.64`.

Then run:

```bash
npx vercel domains verify axoncase.com
npx vercel domains verify www.axoncase.com
```

Propagation can take a few minutes to a few hours.
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
