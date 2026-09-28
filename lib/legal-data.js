export const firm = {
  name: 'Right Law Associates',
  legalName: 'Right Law Associates (Pvt) Limited',
  shortName: 'RightLaw.pk',
  tagline: 'Clarity in law. Confidence in action.',
  email: 'info@rightlaw.pk',
  phone: '+92 333 1127830',
  whatsapp: '923331127830',
}

export const practiceAreas = [
  { name: 'Family Law', slug: 'family-law', description: 'Practical guidance for families navigating sensitive legal matters.', icon: 'family' },
  { name: 'Divorce & Khula', slug: 'divorce-khula', description: 'Clear advice and representation for divorce, khula and related claims.', icon: 'scale' },
  { name: 'Child Custody', slug: 'child-custody', description: 'Focused support for custody, visitation and guardianship matters.', icon: 'heart' },
  { name: 'Property & Inheritance', slug: 'property-inheritance', description: 'Careful handling of property, succession and inheritance disputes.', icon: 'building' },
  { name: 'Corporate & Tax', slug: 'corporate-tax', description: 'Legal advisory for companies, founders and growing businesses.', icon: 'briefcase' },
  { name: 'Civil & Criminal Law', slug: 'civil-criminal-law', description: 'Representation and strategy across civil and criminal proceedings.', icon: 'gavel' },
]

export const cities = [
  { name: 'Karachi', phone: '+92 333 1127830' },
  { name: 'Lahore', phone: '+92 333 1127835' },
  { name: 'Islamabad', phone: '+92 333 1127836' },
  { name: 'Rawalpindi', phone: '+92 333 1127831' },
  { name: 'Faisalabad', phone: firm.phone },
  { name: 'Hyderabad', phone: firm.phone },
]

export const articles = [
  { category: 'Family law', title: 'Understanding the khula process in Pakistan', date: '12 September 2026', slug: 'understanding-khula-process' },
  { category: 'Property law', title: 'Key documents to review before buying property', date: '04 September 2026', slug: 'property-documents' },
  { category: 'Corporate law', title: 'When should a business consider company registration?', date: '28 August 2026', slug: 'company-registration-guide' },
]

export const faqs = [
  { question: 'How do I arrange an initial consultation?', answer: 'Call our office, send a WhatsApp message or use the consultation form. We will ask for a brief outline of your matter and suggest the most appropriate next step.' },
  { question: 'Does Right Law Associates assist overseas Pakistanis?', answer: 'Yes. We assist overseas clients with selected family, property, succession and corporate matters in Pakistan, subject to the facts and documents available.' },
  { question: 'Can I speak to a lawyer online?', answer: 'Online consultations can be arranged for suitable matters. The lawyer will confirm the scope, documents required and available appointment times.' },
]

export const siteUrl = 'https://rightlaw.pk'

export function iconFor(name) {
  return name
}

export function practicePath(slug) {
  return `/practice-areas/${slug}`
}

export function cityPath(name) {
  return `/locations/${name.toLowerCase()}`
}
