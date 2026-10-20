# DNA 2.06 — RightLaw.pk PR #5 QA Register

**Audit date:** 21 October 2026  
**Production:** `https://rightlaw.pk/` (GitHub main / Vercel; unchanged)  
**Draft PR:** https://github.com/taxocrate-pk/Right-Law-of-Pakistan-/pull/5  
**Branch:** `codex/rightlaw-trademark-recovery-20261021`

## Owner-Approved Brief

- Restore high-intent historic trademark-service URL only as a distinct service article.
- Improve existing NADRA succession route selectively; preserve ranking intent and protect the title/H1/canonical.
- Distinguish old WordPress **Posts** from **Pages**; absence of an old post URL is not proof that the subject is missing.
- No mass redirects, mass rewriting, automatic publication or tampering with successful pages.

## Source Checks

| Check | Trademark Registration | Succession Certificate |
|---|---|---|
| URL retained | Restored historical slug in draft | Existing slug unchanged |
| Word count | At least 1,294 words in sections/FAQ alone; + introduction and other visible copy | Substantive main sections already present; not mass-rewritten |
| Intent | IPO trademark service/clearance/filing/objections | NADRA estates, succession vs letters of administration |
| H1 | Exactly one in JSX source | Existing metadata/H1 title preserved |
| Meta description | 152 characters | Original description restored/protected |
| H2/H3 | Meaningful structured sections with H2/H3 directly after hero + image | Existing shared route structure retained |
| FAQs | 14 distinct client questions | 16 targeted answers added to existing route |
| Tables | One useful 3-column stage table | Existing shared route tables untouched |
| CTA | Phone appointment, no "Free Consultation" claim | Existing CTA untouched |
| Visible breadcrumbs | Added, three levels | Existing breadcrumb schema; visible UI to verify |
| Structured data | Service, WebPage, BreadcrumbList, visible FAQ mirror | Original route-level schema preserved |
| Official links | Trade Marks Ordinance 2001 PDF; IPO Pakistan | Dedicated NADRA official succession page added |
| Sitemap | New trademark URL added; canonical no trailing slash | Original URL retained |
| Image uniqueness | **BLOCKED:** reused placeholder still in draft | **PROTECTED:** existing asset unchanged |
| Mobile 390px / 360px | **BLOCKED:** actual viewport screenshots not captured | **BLOCKED:** actual viewport screenshots not captured |
| Preview HTML | **BLOCKED:** Vercel preview access denied 403 despite READY build | Not yet independently visually QA'd |
| Production render | **NOT PUBLISHED** | **NOT CHANGED** |

## Release Blockers

1. Replace `/images/corporate-tax-document-review.webp` placeholder on trademark page with a **new exclusive topic-specific compressed WebP**. The generated image has been prepared separately and must be uploaded as a verified binary; inspect alt/title/description and no visible caption.
2. Review source legal accuracy, professional facts and current official fees/processing time before merge; avoid unverifiable guarantees.
3. Get desktop, 390px, 360px screenshots of the actual preview; verify image sizing, table/FAQ overflow, sticky controls and contrast.
4. Check page source and ordinary rendered DOM for one H1, indexability, canonical, sitemap, visible/schema parity, OG tags, incoming contextual links and actual link destinations.
5. No merge until all DNA 2.06 gates PASS and owner approval recorded.

## Risk Register

- **Main branch untouched:** current PR is a draft; no production alias modification.
- **Protected succession title restored:** no ranking-sensitive title/H1 changes shipped.
- **Content overlap:** IPO trademark service content must remain distinct from the broad `/intellectual-property-in-pakistan/` guide and Taxocrate trademark service pages.
- **Never represent a READY build as a mobile/production QA PASS.**
