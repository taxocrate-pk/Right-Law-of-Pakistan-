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

export const serviceAreaCatalog = {
  karachi: [
    'Clifton','DHA Phase 1','DHA Phase 2','DHA Phase 4','DHA Phase 5','DHA Phase 6','DHA Phase 7','DHA Phase 8',
    'Gizri','Zamzama','Boat Basin','Defence View','Civil Lines','Saddar','PECHS','Bahadurabad','Tariq Road','Shahrah-e-Faisal',
    'KDA Scheme 1','Gulshan-e-Iqbal','Gulistan-e-Jauhar Block 17','Gulistan-e-Jauhar Block 18','Scheme 33','Safoora Goth',
    'University Road','Federal B Area','North Nazimabad','Nazimabad','Buffer Zone','North Karachi','New Karachi','Gulshan-e-Maymar',
    'Malir','Model Colony','Shah Faisal Colony','Korangi','Landhi','Garden East','Garden West','Jamshed Road','Soldier Bazaar',
    'Lyari','Keamari','SITE Area','Orangi Town','Manghopir','Surjani Town','Gulshan-e-Hadeed','Steel Town','Bahria Town Karachi'
  ],
  lahore: [
    'Chauburji','Gulberg','DHA Lahore','Model Town','Johar Town','Garden Town','Faisal Town','Muslim Town','Wapda Town','Valencia',
    'Township','Allama Iqbal Town','Samanabad','Shadman','Mozang','Anarkali','Mall Road','Lahore Cantt','Cavalry Ground','Askari',
    'Bahria Town Lahore','Raiwind Road','Thokar Niaz Baig','Canal Road','Jail Road','Ferozepur Road','Multan Road','Shahdara',
    'Baghbanpura','Mughalpura'
  ],
  islamabad: [
    'F-6','F-7','F-8','F-10','F-11','G-6','G-7','G-8','G-9','G-10','G-11','I-8','I-9','I-10','I-11','E-11','H-8',
    'Blue Area','Diplomatic Enclave','G-13','G-14','D-12','Bahria Enclave','Bani Gala','Chak Shahzad'
  ],
  rawalpindi: [
    'Saddar Rawalpindi','Satellite Town','Commercial Market','Chaklala','Westridge','Peshawar Road','Adiala Road',
    'Airport Housing Society','Bahria Town Rawalpindi','DHA Rawalpindi','Gulraiz','Morgah','Tench Bhatta','Raja Bazaar',
    'Committee Chowk','Murree Road','Shamsabad','6th Road','7th Road','8th Road','Scheme 3','Lalazar','Harley Street',
    'Askari 14','Rawat'
  ],
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
