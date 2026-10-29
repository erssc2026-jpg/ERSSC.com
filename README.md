# ERSSC.com

Website for **ERSSC — Engineering Root Solution Saudi Company**.

A fast static site: plain HTML, one CSS file, one small script, self-hosted fonts, and AVIF/WebP photos at three sizes. There is no build step and nothing to install.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/about` | `about.html` |
| `/services` | `services.html` |
| `/services/gas-turbines` and four more | `services/*.html` |
| `/contact` | `contact.html` |
| not found | `404.html` |

## Deploy on Cloudflare Pages

1. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git** and choose this repository.
2. Build settings: **Framework preset: None**, **Build command: empty**, **Build output directory: `/`**.
3. Deploy. Cloudflare serves `/about` from `about.html` automatically.
4. Open the project's **Custom domains** tab, add `erssc.com` and `www.erssc.com`, and accept the DNS records Cloudflare proposes.

Every push to `main` redeploys the site automatically.

`_headers` sets security headers and long-term caching for images and fonts.

## Editing content

Text lives directly in the HTML files. Photos are in `assets/img/` as `name-640`, `name-1024` and `name-1408`, each in `.avif` and `.webp`. Styles are in `assets/css/site.css`.

## Contact form

The form opens the visitor's email app with the enquiry addressed to support@erssc.com. It needs no server.
