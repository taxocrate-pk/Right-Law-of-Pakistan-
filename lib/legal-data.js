export const firm = {
  name: 'Right Law Associates',
  legalName: 'Right Law Associates (Pvt) Limited',
  shortName: 'RightLaw.pk',
  tagline: 'Clarity in law. Confidence in action.',
  email: 'info@rightlaw.pk',
  phone: '+92 333 1127830',
  whatsapp: '923331127830',
  dhaBranchAddress: '76C, Mezzanine Floor, Main Jami Commercial, Phase 7, DHA, Karachi',
  offices: {
    islamabad: { label: 'Head Office — Islamabad', address: 'Office No. 5, 2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz, Islamabad' },
    karachiDha: { label: 'Karachi Branch — DHA', address: '76C, Mezzanine Floor, Main Jami Commercial, Phase 7, DHA, Karachi' },
    karachiJohar: { label: 'Karachi Branch — Gulistan-e-Jauhar', address: 'T-219, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Jauhar, Karachi' },
    lahore: { label: 'Lahore Branch', address: '2nd Floor, Al-Mairaj Arcade, Near Surayya Azeem Trust Hospital, Chauburji Chowk, Lahore' },
  },
}

export const practiceAreas = [
  { name: 'Family Law', slug: 'family-law', route: '/family-law/', description: 'Divorce, khula, maintenance, dower, guardianship and family court representation.', icon: 'family' },
  { name: 'Divorce & Khula', slug: 'divorce-khula', route: '/divorce-law/', description: 'Advice and representation for talaq, khula, dissolution and related family claims.', icon: 'scale' },
  { name: 'Child Custody', slug: 'child-custody', route: '/child-custody/', description: 'Custody, visitation, guardianship and child welfare proceedings before the relevant courts.', icon: 'heart' },
  { name: 'Property & Inheritance', slug: 'property-inheritance', route: '/property-law-in-pakistan/', description: 'Property disputes, inheritance, succession, partition, title review and documentation.', icon: 'building' },
  { name: 'Corporate & Tax', slug: 'corporate-tax', route: '/corporate-tax-law-services/', description: 'Company, business, compliance, taxation and commercial legal advisory.', icon: 'briefcase' },
  { name: 'Civil Law', slug: 'civil-law', route: '/civil-law/', description: 'Civil litigation, injunctions, recovery, contracts and court representation.', icon: 'gavel' },
  { name: 'Criminal Law', slug: 'criminal-law', route: '/criminal-law-in-pakistan/', description: 'Criminal defence, bail, complaints and representation in criminal proceedings.', icon: 'gavel' },
]

export const cities = [
  { name: 'Karachi', phone: '+92 333 1127830', route: '/contact/' },
  { name: 'Lahore', phone: '+92 333 1127835', route: '/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/' },
  { name: 'Islamabad', phone: '+92 333 1127836', route: '/contact/' },
  { name: 'Rawalpindi', phone: '+92 333 1127831', route: '/contact/' },
  { name: 'Faisalabad', phone: firm.phone, route: '/contact/' },
  { name: 'Hyderabad', phone: firm.phone, route: '/contact/' },
]

export const articles = [
  { category: 'Family law', title: 'Understanding The Khula Process In Pakistan', date: '12 September 2026', slug: 'understanding-khula-process', route: '/dissolution-of-marriage-in-pakistan/' },
  { category: 'Property law', title: 'Property Law, Disputes And Title Protection In Pakistan', date: '27 September 2026', slug: 'property-law-in-pakistan', route: '/property-law-in-pakistan/' },
  { category: 'Corporate law', title: 'Company Registration And Corporate Legal Services', date: '27 September 2026', slug: 'company-registration-service-karachi', route: '/company-registration-service-karachi/' },
]

export const faqs = [
  { question: 'How do I arrange an initial consultation?', answer: 'Call our office, send a WhatsApp message or use the consultation form. We will ask for a brief outline of your matter and direct it to the appropriate legal team.' },
  { question: 'Does Right Law Associates assist overseas Pakistanis?', answer: 'Yes. We assist overseas clients with selected family, property, succession, corporate and documentation matters in Pakistan, subject to the facts, jurisdiction and documents available.' },
  { question: 'Can I speak to a lawyer online?', answer: 'Online consultations can be arranged for suitable matters. The lawyer can review the initial facts, identify documents required and explain the next procedural step.' },
]

export const siteUrl = 'https://rightlaw.pk'

export function iconFor(name) {
  return name
}

export function practicePath(slug) {
  return practiceAreas.find((item) => item.slug === slug)?.route || '/contact/'
}

export function cityPath(name) {
  return cities.find((item) => item.name === name)?.route || '/contact/'
}
