# 360devz — company website

Company site for 360 DEVZ LTD.
Next.js 15 (App Router) · React 19 · TypeScript (strict) · no UI dependencies.

## Pages

`/` · `/services` · `/educloud` · `/about` · `/contact` · `/privacy`

## Content

All copy lives in `src/content/site.ts`. It is fully typed, so a broken shape
fails the build. You should not need to open a component to change wording.

The design system — every colour, size and spacing value — is a set of CSS
custom properties at the top of `src/app/globals.css`.

## Deploy

```bash
npx vercel          # then: npx vercel --prod
```

For a plain static host, uncomment `output: "export"` in `next.config.ts` and
run `npm run build`. Next writes a static site to `./out`. Every page is
prerendered, so nothing is lost.

Set `metadataBase` in `src/app/layout.tsx` to the deployed origin.

---

© 360 DEVZ LTD. All rights reserved.
