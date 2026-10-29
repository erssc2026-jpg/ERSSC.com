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

## Deployment

The site is hosted on Cloudflare Pages in the project **erssc**, at https://erssc.com and https://www.erssc.com.

Every push to `main` publishes the site through the GitHub Action in `.github/workflows/deploy.yml`. It needs two repository secrets, set under **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | A Cloudflare API token with **Account → Cloudflare Pages → Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | `7b5d2244f40a1473ea569370213d0d9e` |

You can also run it by hand from the **Actions** tab (**Deploy to Cloudflare Pages → Run workflow**).

`_headers` sets security headers and long-term caching for images and fonts. `sitemap.xml` is the search-engine site map, and `/sitemap` is the visible site-map page.

## Editing content

Text lives directly in the HTML files. Photos are in `assets/img/` as `name-640`, `name-1024` and `name-1408`, each in `.avif` and `.webp`. Styles are in `assets/css/site.css`.

## Contact form

The form opens the visitor's email app with the enquiry addressed to support@erssc.com. It needs no server.
