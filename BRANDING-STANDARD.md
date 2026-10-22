# RightLaw.pk branding and page-style standard

Owner confirmed 22 October 2026: the reviewed content and page layouts are acceptable; the entire site must retain one standard visual identity.

- Reuse the existing logo, header, navigation and footer. Preserve the established emerald, greige and gold palette.
- Main reading background: `#f7f3eb`. Hero background: the shared emerald gradient in `app/globals.css`. Do not introduce independent colour themes on individual pages.
- Use Arial, Helvetica, sans-serif throughout main content. Shared H1/H2/H3 sizes and weight live in `.rightlaw-unified-theme`; do not override them per route.
- Use existing container, article/sidebar and responsive stacking patterns. Preserve approved content layouts; do not invent a new layout for each new service page. A homepage, directory and legal article may use their established functional arrangements within this same identity.
- Use the existing gold/dark appointment buttons and table/FAQ styling. Keep desktop and 390px/360px mobile layouts readable without page overflow.
- Each newly commissioned service image must be topic-specific, exclusive and compressed WebP with accurate filename, ALT, title and description. Do not repeat the hero in the sidebar. Do not fabricate a professional identity or government approval.
- Public image captions are omitted. Store useful captions/descriptions in metadata. Never publish internal explanations about generated, guessed, fuzzy, missing or unclear pictures.
- Do not rewrite approved legal content, titles, H1 or canonicals as part of visual standardisation.
- Build and inspect representative desktop/mobile templates after shared changes. Keep per-route evidence for broader changes. Production publishing requires the separate owner approval already required by PR #5.

Implementation: `app/layout.js` applies `rightlaw-unified-theme`; `app/globals.css` owns the shared visual rules. Audit evidence: `qa/pr5/evidence/THEME-REVIEW-20261022.md`.
