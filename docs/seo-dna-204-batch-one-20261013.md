# RightLaw.pk — First Five Pages: Implementation And QA Checkpoint

Prepared on 13 October 2026 from PR #2, parent SHA `9931c799531ab0974dbf5768aa63930d87865869`. Branch: `codex/rightlaw-seo-dna-204-20261012`. The 74-page audit was not repeated.

## Status

Five-page implementation and local production-build QA are complete. Vercel preview and final environment verification are BLOCKED. Do not mark any page fully complete or merge this PR until the preview gate passes and the owner separately approves production.
No production deployment, merge, project recreation, relinking, domain change, secret change or unrelated-site edit was performed.

## Existing Page URLs And Five Mandatory Gates

All statuses below refer to the local production build. Visual and automated checks were run at 360px, 390px and 1365px. A public production URL is an identity reference, not evidence that these branch changes are live.

| Existing URL | H1/H2/H3 | Unique Hero | WebP And Metadata | Legal Relevance | Mobile Layout | Overall |
|---|---|---|---|---|---|---|
| https://rightlaw.pk/ | PASS | PASS | PASS | PASS | PASS | Preview pending |
| https://rightlaw.pk/property-lawyers-in-karachi/ | PASS | PASS | PASS | PASS | PASS | Preview pending |
| https://rightlaw.pk/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law/ | PASS | PASS | PASS | PASS | PASS | Preview pending |
| https://rightlaw.pk/divorce-lawyer-for-khula-divorce/ | PASS | PASS | PASS | PASS | PASS | Preview pending |
| https://rightlaw.pk/child-custody-and-guardianship-lawyers-in-karachi/ | PASS | PASS | PASS | PASS | PASS | Preview pending |

## What Changed

- Homepage: preserved existing hero grid, H1, opening content, proof strip, family-left/business-right placement and global CSS. Replaced the shared consultation PNG with a unique office illustration derived from the approved scene. This is an image asset variation, not the separately proposed hero redesign. Added relevant metadata, FAQ and office structured data. Karachi general practice now features identified portraits of Syed M. Akhtar Rizvi, Tahir Pervez Qureshi and Shankar Lal Kataria.
- Karachi property: kept existing service prose, URL, senior profile and twenty FAQs. Removed repeated H3 scaffolding only for the Karachi route, placed its first H2 before the unique property WebP, corrected local office data, added figure metadata and a statutory-source link.
- Sobia Mohsin: retained the existing unique WebP illustration and twenty FAQs; shortened repeated main prose to useful city-service text, simplified the hero and retained genuine identified profiles. Existing remote photographs were self-hosted as WebP, with captions and metadata. Canonical now uses the established trailing-slash URL.
- Divorce/khula and Karachi custody: replaced generic shared-template filler with route-specific legal sections and twenty specific FAQs each. Added unique relevant WebP illustrations, senior supporting portraits, matching FAQ schema and related-page links. National divorce intent and Karachi custody intent remain distinct.
- Titles shortened where measured width exceeded the requested 580px guard; core service/city terms retained. No URL or sitemap route was added, removed or redirected.
- Main Karachi CTAs and scoped header phone use +92 331 6644789. Office data uses Supreme Corner Johar Chowrangi and 76-C Main Jami Commercial, Phase 7. No unverified unit number was retained in the batch-specific content.

## QA Evidence

- Production build: PASS; 78 static/system paths generated. Existing project configuration skips TypeScript checking; this is a successful Next build, not a claim that all repository TypeScript errors were checked.
- 15 viewport cases: PASS for HTTP 200, one main H1, no duplicate main H1/H2/H3, no hierarchy skips, no heading clipping, no horizontal overflow, loaded content images with ALT/title, mobile menu open/close and appointment navigation.
- Local page JavaScript errors: none. Vercel Analytics cannot load its deployment-only insights endpoint locally; analytics behaviour is not covered by this local pass.
- Internal navigation: all 39 unique internal destinations found in the five page main sections returned HTTP 200.
- Forms: no HTML form exists in the five main sections. Contact/appointment links were tested to the existing contact route; no enquiry-storage or email-delivery claim is made.
- Telephone links were inspected; no real telephone call or WhatsApp message was initiated.
- Four service pages have twenty FAQs each, with exact visible question/schema alignment. Homepage retains three expandable FAQs; accordion interaction tested. This reports actual counts and does not claim 20–25 homepage FAQs.
- Full-page captures showed a long-page Chromium compositing artefact; visual acceptance used fresh 900px viewport captures and composite evidence sheets, plus DOM geometry. No visual PASS was based only on stitched full-page screenshots.

| Page Path | Title Width, 20px Arial | Description Characters | FAQ Entries | Main Paragraph Words, Excluding FAQs |
|---|---:|---:|---:|
| / | 565px | 143 | 3 | 745 |
| /property-lawyers-in-karachi | 420px | 138 | 20 | 541 |
| /best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law | 517px | 143 | 20 | 843 |
| /divorce-lawyer-for-khula-divorce | 527px | 73 | 20 | 655 |
| /child-custody-and-guardianship-lawyers-in-karachi | 474px | 79 | 20 | 705 |

Paragraph counts omit headings, tables, lists and captions. The property page retains its useful comparison table and locality list; the Sobia city prose is within 600–900 paragraph words. National divorce depth is driven by service intent, not a mechanical truncation.

### Visual Evidence

- [360px headings](qa/batch-one-20261013/hero-sheet-360.jpg)
- [390px headings](qa/batch-one-20261013/hero-sheet-390.jpg)
- [Desktop headings](qa/batch-one-20261013/hero-sheet-1365.jpg)
- [360px images](qa/batch-one-20261013/image-sheet-360.jpg)
- [390px images](qa/batch-one-20261013/image-sheet-390.jpg)
- [Desktop images](qa/batch-one-20261013/image-sheet-1365.jpg)
- [Viewport checks](qa/batch-one-20261013/qa-summary.json)
- [Schema/metadata evidence](qa/batch-one-20261013/semantic-checks.json)
- [Internal-link evidence](qa/batch-one-20261013/link-checks.json)
- [Build log](qa/batch-one-20261013/build.log)

## Legal And Photograph Sources

- [Muslim Family Laws Ordinance, 1961](https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf): notice, ninety-day and pregnancy provisions reviewed.
- [Dissolution of Muslim Marriages Act, 1939](https://pakistancode.gov.pk/pdffiles/administratora49511407956fc2c3a2587b9cbe6614f.pdf): statutory dissolution grounds reviewed without inventing a financial forfeiture rule.
- [Guardians and Wards Act, 1890](https://pakistancode.gov.pk/pdffiles/administratord265c726d2d564a9377ed7a8e04708ae.pdf): sections 9, 12, 17 and relevant orders reviewed; no automatic parental result or travel-document guarantee.
- [Family Courts Act, 1964, Pakistan Code](https://pakistancode.gov.pk/pdffiles/administratorf08eaec19066a65a1b82cb4ad49feb4d.pdf): general family-court framework reviewed. Province-specific operation remains relevant; no fixed court fee, universal deadline or unsupported Sindh amendment was advertised.
- [Transfer of Property Act, 1882](https://pakistancode.gov.pk/pdffiles/administrator77923ce792b475e339e1f46ba0442da3.pdf): general transfer framework reviewed; no assertion that one document establishes title in every Karachi regime.
- Tahir portrait identified by ALT and named profile on https://www.advocates.com.pk/letter-of-administration-in-karachi ; source asset `/Tahir%20Parvaiz.png`.
- Shankar portrait identified by ALT and named family-law profile on https://www.advocates.com.pk/services/family-lawyers ; source asset `/shankar-lal.png`.
- Sobia and Mohsin portraits retained from the exact identified sources already used in the approved Sobia page, then converted without identity changes. Rizvi’s existing identified self-hosted portrait was retained.
- No generated person is presented as a real advocate. The four new primary visuals are labelled illustrations. The current generated hero assets are checked as five distinct hero files together with Sobia’s retained image.
- Fiaz A. Khakh, ASC, is outside this five-page Karachi/national batch. Do not replace other city profiles or legacy names without a separate verified source and photograph in their own batch.

## Coordination With The Separate Header/Footer Proposal

Fetched branch `feat/compact-header-footer-20261013` read-only. It changes `components/legal-site.js`, `components/rightlaw-header.js` and `app/globals.css`.
This batch does not modify `app/globals.css` or the shared office dataset `lib/legal-data.js`. The existing `Footer()` function is byte-for-byte unchanged from PR #2’s base. No footer redesign or proposed hero structure was imported.
The shared header change is limited to selecting the batch’s Karachi phone; it introduces no new header layout. Both branches touch a large single-line header return and the legal-site component. If the separately approved proposal is later combined, retain its approved header/footer design while preserving this branch’s scoped phone logic and homepage functions. Do not merge the other branch into this one during QA.
The frozen footer still contains historical office labels/unit text and its previous central number. Those shared footer details must be reconciled in the separately authorised footer work. They are not silently treated as corrected by this batch.

## Remaining Blockers And Exact Resume Step

1. Vercel connector still returns project-not-found for existing `rightlaw-production-recovery` in team `team_H60uZsyQZIOkZYoxnfsGC8DY`. Browser reached the Vercel login page; secure sign-in request timed out with no verified signed-in state. Do not retry credential entry automatically or assume successful authentication.
2. No preview URL is available. After existing-project access is restored, verify production branch/domain mapping read-only, create or inspect a PREVIEW for the exact PR head, and repeat five-route visual/form/navigation checks in that environment.
3. Check the frozen shared footer content against the separate proposal before final owner review. Never implement that redesign or any new hero structure on this branch without approval.
4. No page is marked fully complete yet. After preview QA, report the exact PR head and preview, then await separate owner approval for production.

## Changed Application Files And Assets

- `app/[slug]/page.js`
- `app/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law/page.js`
- `app/page.js`
- `app/property-lawyers-in-karachi/page.js`
- `components/legal-site.js`
- `components/property-city-page.js`
- `components/rightlaw-header.js`
- `components/sobia-family-lawyer-service-page.js`
- `lib/sobia-family-lawyer-page.js`
- `components/batch-family-service.js`
- `components/batch-image.js`
- `components/batch-karachi-offices.js`
- `components/batch-senior-team.js`
- `docs/qa/`
- `lib/batch-one-assets.js`
- `lib/batch-one-services.js`
- `public/images/custody-karachi-child-welfare.webp`
- `public/images/divorce-khula-case-review.webp`
- `public/images/mohsin-ali-shah-verified.webp`
- `public/images/property-karachi-title-review.webp`
- `public/images/rightlaw-home-consultation.webp`
- `public/images/shankar-lal-kataria-verified.webp`
- `public/images/sobia-mohsin-verified.webp`
- `public/images/tahir-pervez-qureshi-verified.webp`

QA evidence and this checkpoint are additional documentation. No dependency or lockfile change is included.

## Generated Asset Prompt Record

Built-in imagegen was used; no CLI API key was needed. Project-bound images are saved under `public/images/`.
- `rightlaw-home-consultation.webp`: derive a unique empty document-review room from the approved office image; preserve its warm light, table and shelving character; remove people, readable text and official documents. Website grid remains unchanged.
- `property-karachi-title-review.webp`: Karachi property-document review with house keys, building plan and neutral folders; no people, marriage imagery or fabricated official instruments.
- `divorce-khula-case-review.webp`: private meeting table, separated chairs and neutral folders for confidential family case advice; no people, ceremony, judge, gavel or official certificates.
- `custody-karachi-child-welfare.webp`: school backpack and closed notebooks beside neutral review folders; child welfare and education theme; no identifiable child, wedding scene or fabricated order.

Illustrations were visually inspected before WebP conversion. Photographs were converted from identified existing owner sources, without generating or substituting faces.
