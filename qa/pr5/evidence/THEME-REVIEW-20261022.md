# RightLaw.pk — Owner Theme and NADRA Image Review

22 October 2026, Asia/Karachi. Existing PR #5 draft only; production publication not authorised.

## Owner-directed changes

- One shared site-wide design rule: existing greige `#f7f3eb` content background, existing emerald hero gradient, gold accents and Arial/Helvetica typography. Header/footer identity retained.
- H1: desktop 56px, mobile 34px; H2: desktop 36px, mobile 26px; H3: desktop 24px, mobile 19px. Responsive clamps apply between sizes. Heading weight 400, including previously bold wrapper tags.
- Shared service-article paragraphs: 16px desktop / 15px mobile with consistent line-height. Sidebar and small navigation labels remain proportionate.
- No publicly visible figure captions or decorative hero image-caption labels across the site. Useful image captions remain metadata rather than awkward frontend commentary.
- Removed shared template prose about missing/guessed portraits. No fake, fuzzy, unclear-image explanations added to product copy.
- Replaced the NADRA succession page's reused consultation image with exclusive `nadra-succession-estate-records-pakistan.webp`, 1200×675, 100,760 bytes. Added descriptive ALT, service-relevant title and ImageObject description. The image appears only once on that page; the sidebar duplicate was removed. [Metadata and provenance](nadra-image-metadata-20261022.json).
- This authorises shared visual consistency across the existing site, including protected routes' styling. Existing legal copy, metadata and contacts were not mass-rewritten. The earlier restriction on replacing the succession asset is superseded specifically by the owner's current image-replacement instruction.

## Verification

- Production build passed. Local `next start` used; Vercel hosted visual access remains unverified.
- **75 HTML routes × 3 widths = 225 rendered checks**, at 1365, 390 and 360 pixels. All HTTP 200; no page-level horizontal overflow; all main backgrounds `rgb(247, 243, 235)`; same emerald hero gradient, font family and H1 scale throughout. No visible figure/hero captions. [All route results](site-theme-20261022.json).
- Main article heading samples consistently measure 36/24px desktop and 26/19px mobile, weight 400. [Two-page computed styles](style-consistency-20261022.json).
- Compared 77 prerendered HTML outputs before/after: **no title, H1 or canonical changes**. [Preservation results](seo-fields-preservation-20261022.json).
- Unique NADRA WebP hash occurs only once in repository media; rendered HTML includes its image `src` once. New content-specific metadata contains no assertion of actual government approval, client identity or staff portrait.
- Visual inspection included both target pages at desktop/mobile, plus homepage, property, family, blog, corporate and specialist-template captures. This is not a claim that every region of all 75 pages was manually inspected. The 225 checks are automated browser DOM checks.
- Lighthouse scores in the preceding PR5 report belong to the previous draft revision. They were not rerun for this reversible presentation update and must not be represented as new scores.

## Current screenshot crops

These show the first 1800px at original viewport width. Full-page local captures were used for internal inspection.

- [trademark-registration-pakistan, 1365px](unified-trademark-registration-pakistan-1365-top.webp)
- [trademark-registration-pakistan, 390px](unified-trademark-registration-pakistan-390-top.webp)
- [trademark-registration-pakistan, 360px](unified-trademark-registration-pakistan-360-top.webp)
- [succession-certificate-letter-of-administration, 1365px](unified-succession-certificate-letter-of-administration-1365-top.webp)
- [succession-certificate-letter-of-administration, 390px](unified-succession-certificate-letter-of-administration-390-top.webp)
- [succession-certificate-letter-of-administration, 360px](unified-succession-certificate-letter-of-administration-360-top.webp)

## Release holds

PR must remain DRAFT and unmerged. Hosted preview verification, professional legal/source review and owner final approval remain required. No production alias or main-branch changes were made. Existing repeated stock images on unrelated routes are not claimed replaced; this media correction targets the expressly identified NADRA page.
