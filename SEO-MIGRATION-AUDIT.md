# RightLaw.pk SEO Migration Audit

Audit baseline: 28 September 2026

## Migration rule

The existing public RightLaw.pk URL structure is the migration authority. Existing indexed/ranking URLs must be preserved in Next.js unless reliable performance evidence supports consolidation. New `/practice-areas/...` or `/locations/...` slugs must not replace established URLs merely for design convenience.

## Current inventory

- Published WordPress pages: 89
- Published WordPress posts: 77
- Total published page/post records reviewed: 166
- Homepage: `/`
- Primary current contact number for Karachi/general use in the Next.js build: `+92 333 1127830`

## Exact route collision found

`/child-adoption-guardianship-in-pakistan/` is recorded as both a WordPress page and a WordPress post. A Next.js migration cannot and should not create two separate resources at the same pathname. The live canonical resource must be retained as one authoritative page and the duplicate database entity must not create a second route.

## High-risk semantic cannibalisation clusters

### Family law

Current family-law intent is spread across multiple URLs, including:

- `/family-law/`
- `/family-law-in-pakistan/`
- `/family-lawyers-in-karachi-lahore-islamabad/`
- `/family-lawyers-in-pakistan-divorce-khula-child-custody-experts/`
- `/family-law-expert-divorce-lawyers-in-karachi-islamabad-lahore/`
- `/family-law-expert-divorce-lawyers-in-karachi-islamabad-lahore-pakistan/`
- `/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/`

Do not redirect these solely because they overlap. Preserve first, then compare GSC clicks, impressions, queries, average position, conversions/engagement if available, backlinks and indexed status before selecting consolidation targets.

### Divorce / khula

Potential overlap includes:

- `/divorce-law/`
- `/divorce-law-divorce-lawyers-khula-lawyers/`
- `/divorce-lawyer-for-khula-divorce/`
- `/divorce-lawyers-in-pakistan-guide-matrimonial-laws-and-procedures/`
- `/dissolution-of-marriage-in-pakistan/`
- `/difference-between-divorce-talaq-and-khula/`

The national legal-guide intent should be separated from lawyer/service intent and from informational talaq/khula comparisons.

### Child custody / guardianship

Potential overlap includes:

- `/child-custody/`
- `/child-custody-and-guardianship-lawyers-in-karachi/`
- `/child-custody-guardianship-legal-custody-vs-legal-guardianship/`
- `/child-custody-laws-in-karachi-pakistan/`
- `/child-custody-vs-guardianship-in-pakistan/`
- `/guardianship-child-custody-law-in-pakistan/`
- `/guardianship-child-custody-lawyers-in-karachi/`
- `/guardianship-child-custody-lawyers-in-karachi-pakistan/`
- `/guardianship-lawyers-in-karachi-lahore-islamabad-pakistan/`
- `/legal-guardianship-laws-of-pakistan/`

Recommended architecture: one national custody pillar, one national guardianship pillar if search intent justifies it, carefully differentiated city/service pages, and informational comparison pages only where the query intent is distinct.

### Court marriage

This is the largest cannibalisation cluster. There are multiple pages and posts targeting court marriage in Pakistan, legality, procedure, fees, Islam, Karachi, Lahore, Islamabad/Rawalpindi and generic service intent. No mass redirect should occur before performance review because several old URLs may carry backlinks, impressions or long-tail rankings.

### Online Nikah / online marriage

There are multiple URLs targeting online Nikah, online marriage, validity in Islam, Pakistan service intent, Nikah Khawan and registration. Separate transactional service intent from informational legal-validity content and registration/documentation intent.

### Succession certificate

Potential overlap includes:

- `/get-succession-certificate-and-letter-of-administration-from-nadra/`
- `/nadra-succession-certificate-online-verification-fees/`
- `/succession-certificate-in-pakistan-for-legal-heirs/`
- `/succession-certificate-letter-of-administration/`
- `/succession-certificate-pakistan-legal-guide-procedure/`

These should be compared by actual query sets and traffic before consolidation. NADRA/administrative intent may deserve a different page from litigation/legal-heirs procedure intent.

### Property law

Potential overlap includes:

- `/property-law-in-pakistan/`
- `/property-disputes/`
- `/property-disputes-a-comprehensive-guide/`
- `/property-lawyers-in-pakistan/`
- `/property-lawyers-expert-in-pakistan/`
- `/property-lawyer-a-good-property-lawyers-qualities-and-responsibilities/`

Keep the main law/service pillar distinct from dispute-specific and informational lawyer-selection content.

## DNA implementation standard for migrated money/authority pages

- Preserve current winning URL.
- One clear H1.
- Strong search-intent answer in the opening section.
- 2500+ words for newly rebuilt core money/authority pages unless the page type genuinely requires less.
- Frequent useful H2/H3 headings; avoid long unbroken text walls.
- Primary topic and semantic variants in headings naturally.
- Target keyword usage approximately 2.0–2.5% only where readability and legal accuracy remain intact.
- Hero CTA early.
- Correct internal links to related services and supporting articles.
- FAQ section where it serves actual user questions.
- LegalService/Article as appropriate, BreadcrumbList and FAQPage schema where valid.
- No invented office details, lawyer profiles, claims, awards, guarantees or business hours.
- Avoid the house-banned wording: embark, seamless, demystified, essence.
- Legal accuracy takes priority over SEO wording.

## Work completed in Next.js repo

- Homepage navigation changed from invented `/practice-areas/...` paths to established RightLaw.pk routes.
- Separate state added for Practice Areas and Locations dropdowns to prevent menu interference.
- Generic business-hours claim removed from header.
- Homepage H1 strengthened to describe the actual national legal-service intent.
- Homepage article cards now link to real existing RightLaw.pk routes rather than the contact anchor.
- First rebuilt authority route added: `/family-law/` with 2500+ word long-form legal content, canonical metadata and LegalService + Breadcrumb + FAQ schema.

## GSC decision gate

No duplicate URL should be redirected merely because another URL looks cleaner. For every cannibalisation cluster, retain the current routes until GSC performance data is available. The preferred canonical/redirect target should be selected using clicks, impressions, query relevance, average position, index status, backlinks and the page's role in the intended site architecture.
