# RightLaw.pk PR #5 — Draft QA and Release Hold

Updated **22 October 2026, Asia/Karachi**. **DRAFT ONLY — NO MERGE OR PRODUCTION APPROVAL.**

Repository: `taxocrate-pk/Right-Law-of-Pakistan-`
Branch: `codex/rightlaw-trademark-recovery-20261021`
PR: https://github.com/taxocrate-pk/Right-Law-of-Pakistan-/pull/5
Starting head: `fbf3b751d0e984470d14e5851cbf2d41d9e420c5`
Starting main: `34551eaec9ba6cf3b8dfb749dbee649d6809817a`

Policy read: **SEO_DNA_2_06_CONSOLIDATED_Owner_Policy_20_Oct_2026(1).docx**, inherited rules and controlling amendments 146–166. Owner's protected-field instruction takes precedence.

## Changes on this draft branch

- New exclusive hero `/images/trademark-brand-clearance-pakistan.webp`: **1200×675, 61,854 bytes**. Descriptive ALT, title, ImageObject description, dimensions and OG image. No visible caption. [Metadata, provenance and prompt](qa/pr5/evidence/image-metadata.json). Built-in imagegen created a conceptual brand-clearance visual; it is not an actual office, client, lawyer or official registration certificate. Compressed locally to WebP.
- Fixed duplicate title inheritance: `Trademark Registration in Pakistan | RightLaw.pk | RightLaw.pk` → `Trademark Registration in Pakistan | RightLaw.pk`. Global title template preserved.
- Modelled trademark offering as `Service`, with a `LegalService` provider, rather than using service-only properties on a business entity. Added ImageObject and primary-image relationship. Succession service-type correction is slug-scoped; other routes' schemas unchanged.
- Added a trademark link using the existing IP menu, a compact dropdown, and one contextual incoming link from the IP guide. Existing menu hierarchy, branding, footer and contacts preserved.
- Added page-specific navigation/sidebar, semantic H3 FAQ questions and relevant keyword wording. Preserved ten substantive trademark sections, fourteen FAQs and process table. Added one contextual Taxocrate company-registration resource distinguishing incorporation from trademark protection.
- Succession title, H1, canonical, opening, image and basic structure preserved; sixteen specific FAQs retained.

## Verified local production build

Visitor flow: existing IP menu/guide → trademark article, table and FAQs → existing appointment/contact route. Succession visitors receive targeted FAQs on the original route.

Environment: repository lockfile installed with `npm ci`; `next build`, then `next start`; Next.js 16.3.3, Chromium 153. Local URL `http://127.0.0.1:3000`. Runtime-only host network-interface workaround stayed outside the repository. **This evidence certifies the local build only, not the protected Vercel deployment.**

| Gate | Trademark | Succession |
|---|---|---|
| Build/route | PASS; HTTP 200 | PASS; HTTP 200 |
| Rendered H1 | Exactly one | Exactly one, original preserved |
| Meta description | 152 characters | Original, 85 characters |
| Canonical | `https://rightlaw.pk/trademark-registration-pakistan` | Original `https://rightlaw.pk/succession-certificate-letter-of-administration/` |
| FAQ schema/visible parity | 14/14 exact Q&A matches | 16/16 exact Q&A matches |
| JSON-LD | Parseable service, WebPage, image, breadcrumb and FAQ graph | Parseable existing graph with scoped service correction |
| Viewports captured | 1365×900, 768×900, 390×900, 360×900 | Same four viewports |
| Page-level overflow | None in all four widths | None in all four widths |
| Images | New WebP loaded at every width | Existing assets loaded |
| Browser runtime errors | None | None |
| Internal main-content destinations | All tested destinations HTTP 200 after existing slash normalization | All tested destinations HTTP 200 |
| Menu | Desktop keyboard focus and 390/360 tap open/select/close verified | Shared existing menu preserved |
| Tables | Scroll container works; mobile scrollLeft 42/72px | Existing scroll containers preserved |
| Incoming link | IP guide HTML and menu verified | Existing links preserved |
| Robots/sitemap | Both HTTP 200; source allows indexing and includes route | Original entries preserved |
| Named human legal review | PENDING | PENDING; existing editorial name is not fresh review evidence |
| Hosted preview / production | NOT VERIFIED / NOT PUBLISHED | NOT VERIFIED / NOT PUBLISHED |

[Before DOM evidence](qa/pr5/evidence/before-rendered.json), [final headings, metadata, schema and viewport evidence](qa/pr5/evidence/final-rendered.json), [menu and internal-link results](qa/pr5/evidence/interactions-links.json).

**Trademark focus:** `Trademark Registration in Pakistan`; 7 exact case-insensitive whole-phrase matches / 1917 substantive article words × 5 = **0.02%**. Excludes header, footer, schema, breadcrumb/navigation, sidebar and appointment button group. Advocates Family Lawyers PR #57's separate amendment was not applied to RightLaw. Protected succession content was not rewritten for density.

## Measured Lighthouse results

Lighthouse 12.8.2 on local production build. Default simulated mobile settings; official desktop config. These are not hosted or production scores. Report JSON retains configuration and audit details; embedded screenshot payloads omitted. Local `/_vercel/insights/script.js` returns 404 outside Vercel, explaining the best-practices console finding; production analytics code was preserved.

| Page / mode | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
|---|---:|---:|---:|---:|---:|---:|
| [succession-certificate-letter-of-administration-desktop](qa/pr5/evidence/lighthouse-succession-certificate-letter-of-administration-desktop.json) | 100 | 90 | 96 | 100 | 0.6 s | 0 |
| [succession-certificate-letter-of-administration-mobile](qa/pr5/evidence/lighthouse-succession-certificate-letter-of-administration-mobile.json) | 97 | 91 | 96 | 100 | 2.7 s | 0 |
| [trademark-registration-pakistan-desktop](qa/pr5/evidence/lighthouse-trademark-registration-pakistan-desktop.json) | 100 | 92 | 96 | 100 | 0.6 s | 0 |
| [trademark-registration-pakistan-mobile](qa/pr5/evidence/lighthouse-trademark-registration-pakistan-mobile.json) | 97 | 92 | 96 | 100 | 2.7 s | 0 |

Inherited findings remain: low-contrast gold logo small print, spaced visible logo text versus accessible name, compact footer targets and succession/footer heading order. Accessibility meets the minimum 90 in these local tests, but these findings are **not marked fixed**. Global branding/footer redesign is outside this targeted correction. Preliminary desktop tests incorrectly retained mobile-style throttling and scored 84; the table uses the corrected official desktop configuration, not an alleged performance fix.

## Screenshots and visual review

Full-page captures were inspected at hero, article, FAQ and footer regions at all requested widths, plus tablet. No unexplained article-ending gap or page-level horizontal overflow was seen. Original full-page PNGs remain in the working checkout at `qa/pr5/final-*.png`. Compact repository evidence contains the first 1800px at original viewport width and menu captures; these are explicitly crops, not full-page images.

**trademark-registration-pakistan**

- [1365px capture](qa/pr5/evidence/final-trademark-registration-pakistan-1365-top.webp)
- [768px capture](qa/pr5/evidence/final-trademark-registration-pakistan-768-top.webp)
- [390px capture](qa/pr5/evidence/final-trademark-registration-pakistan-390-top.webp)
- [360px capture](qa/pr5/evidence/final-trademark-registration-pakistan-360-top.webp)

**succession-certificate-letter-of-administration**

- [1365px capture](qa/pr5/evidence/final-succession-certificate-letter-of-administration-1365-top.webp)
- [768px capture](qa/pr5/evidence/final-succession-certificate-letter-of-administration-768-top.webp)
- [390px capture](qa/pr5/evidence/final-succession-certificate-letter-of-administration-390-top.webp)
- [360px capture](qa/pr5/evidence/final-succession-certificate-letter-of-administration-360-top.webp)

- [IP menu 1365px](qa/pr5/evidence/menu-1365.webp)
- [IP menu 390px](qa/pr5/evidence/menu-390.webp)
- [IP menu 360px](qa/pr5/evidence/menu-360.webp)

## Legal/source review and remaining holds

- [Trade Marks Ordinance, 2001 official PDF](https://pakistancode.gov.pk/pdffiles/administratora4ef8d40e3d97faef49343d2242e0c3a.pdf) retrieved successfully, 91 pages. The page's classification, refusal, application, examination, opposition, renewal and licensing topics correspond to statutory subject matter, including ss. 12, 14, 17, 22, 27–35 and 69–77. This was a topic/claim check, not a signed legal opinion or certification of every current amendment. No fixed fee, guaranteed approval or promised completion date was added.
- [NADRA succession source](https://www.nadra.gov.pk/identityDocument/certificates/succession): current indexed official text supports movable/immovable distinction and the stated Sindh/Balochistan counsel arrangements. Direct retrieval returned **403**, so direct-source availability is NOT PASS. Province-specific law, minor heirs, objections, overseas verification and correction/reprint eligibility still require professional confirmation.
- [IPO Pakistan](https://ipo.gov.pk/) and [official fee/forms endpoint](https://www.ipo.gov.pk/trademarks-fee-forms): official host/index identified but direct requests timed out. Current fee instructions are NOT freshly verified. No amount was introduced.
- [Taxocrate company registration](https://taxocrate.com/company-registration/) opened successfully and matches the separate incorporation context. Existing succession group links were preserved, not blanket-certified as legal authorities.
- Succession's protected trailing-slash canonical differs from local Next.js slash normalization. Deliberately preserved under owner instruction; any migration needs separate evidence and approval.
- Existing succession generic consultation image is reused in hero/sidebar, has a visible caption, and lacks verified portrait identity. Existing global NAP variants and editorial attribution are inherited review items. They were not silently replaced or certified authentic. New trademark image is explicitly conceptual and exclusive.
- **Competent named human legal review and owner approval are still required.** No new Reviewed By attribution or review signature was invented.

## Protected preview 403 investigation

Starting deployment: `dpl_H74ahcRkPjvjGVExe8FdhD8VHjzw`; project `rightlaw-production-recovery`; team `taxocrate-pks-projects`. GitHub reported READY/success for starting commit.

Authorised protected fetch failed at `read_protection_bypass`, HTTP **403**, `forbidden`, on the deployment-alias access endpoint. This is a connector/project/team authorisation failure, not an application-render diagnosis. No authenticated local Vercel CLI was available. No protection settings, access-control rules or production aliases changed. The owner-authorised local production-build alternative was used.

Remaining: connect an identity authorised for this Vercel project/team, identify the updated branch deployment and repeat hosted-preview checks. A READY badge alone does not close this hold.

## Release state

**Saved to existing draft branch only. Do not merge or publish.** Keep PR DRAFT, main and production unchanged. Hosted-preview access, direct official-source limitations, professional review and owner approval remain separate release holds. This report does not assert complete SEO DNA compliance or live publication.
