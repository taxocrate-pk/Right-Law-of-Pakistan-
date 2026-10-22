# Lahore Property Lawyer Portrait Correction — 22 October 2026

Reported live route: /property-lawyers-in-lahore.
Production source confirmed by GitHub main 34551ea Vercel status URL and live asset deployment ID dpl_7hRdZcEZY5nH4qYbRK22QcCA9NBg.

Junaid Kahloon profile had no image field. The shared card reserved a 92px first grid column, placing text there when the image was absent.

Restored the identified photograph from the owner's Qanoon House Lahore page:
https://qanoonhouse.com/online-nikah-lahore/
https://qanoonhouse.com/wp-content/uploads/2026/05/Muhammad-Junaid-Kahlon-Advocate-Lahore-High-Court-1.webp
Saved as public/images/junaid-kahloon.webp, served locally to avoid hotlink dependence.
Text-only property profiles now use one full-width column.

Validation: Next.js production build passed (78 static outputs). Chromium rendering at 1365, 390 and 360px: Lahore portrait decoded successfully at all widths; no horizontal overflow; Hyderabad text-only card uses full available width (887/313/283px). Desktop and mobile screenshots inspected. No page copy, metadata or contact changes.

Vercel connector could not resolve this project in its currently connected team. GitHub's successful main deployment status independently confirms repository mapping. Live post-release verification is required after the Git-triggered deployment.
