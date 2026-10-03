'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-react'
import { firm } from '../lib/legal-data'

const navItems = [
  {
    label: 'Family Law', href: '/family-law-in-pakistan/',
    groups: [
      { title: 'Family Law', links: [
        ['Child Custody & Guardianship', '/child-custody/'],
        ['Child Adoption', '/child-adoption-guardianship-in-pakistan/'],
        ['Family Lawyers In Lahore', '/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/'],
        ['Sobia Mohsin — Family Lawyer In Karachi', '/best-family-and-divorce-lawyer-and-lady-advocate-in-karachi-sobia-mohsin-shah-legal-expertise-in-family-law/'],
        ['Divorce Law', '/divorce-law/'],
        ['Talaq (Divorce) in Islam', '/divorce-talaq-in-islam-types-and-quranic-references/'],
        ['Divorce Lawyer', '/divorce-lawyer-for-khula-divorce/'],
        ['Divorce Papers in Pakistan', '/divorce-papers-in-pakistan/'],
        ['Divorce Lawyers in Pakistan', '/divorce-lawyers-in-pakistan-guide-matrimonial-laws-and-procedures/'],
      ]},
      { title: 'Custody & Guardianship', links: [
        ['Guardianship/Child Custody', '/guardianship-child-custody-law-in-pakistan/'],
        ['Guardianship Lawyers in Karachi', '/guardianship-child-custody-lawyers-in-karachi-pakistan/'],
        ['Guardianship & Child Custody Lawyers in Karachi', '/guardianship-child-custody-lawyers-in-karachi/'],
        ['Best Child Custody & Guardianship Lawyers in Karachi', '/child-custody-and-guardianship-lawyers-in-karachi/'],
        ['Legal Guardianship Laws', '/legal-guardianship-laws-of-pakistan/'],
        ['Succession Certificate in Pakistan', '/succession-certificate-in-pakistan-for-legal-heirs/'],
      ]},
      { title: 'Online Marriage & Court Marriage', links: [
        ['Online Nikah/Online Marriage', '/online-nikah-online-marriage-in-islam-and-pakistan/'],
        ['Online Nikah Services', '/online-nikah-services-in-karachi-rawalpindi-islamabad-rahim-yar-khan-and-lahore/'],
        ['Online Marriage/Online Nikah in Pakistan', '/online-marriage/'],
        ['Online Marriage Fees', '/online-marriage-fees-in-karachi-islamabad-rawalpindi/'],
        ['Nikah Registration', '/online-nikah-and-online-nikah-nama-registration-in-pakistan/'],
        ['Online Nikah Khawan', '/nikah-khawan-service/'],
        ['Nikah Nama Form', '/nikah-nama/'],
        ['Court Marriage', '/marriage-services-court-marriage-online-nikah-registration-shadi/'],
        ['Marriage in Islam', '/marriage-marriage-in-islam-importance-of-marriage-in-islam/'],
        ['Shara’i Nikah', '/sharai-nikah-without-registration/'],
        ['Court Marriage Procedure', '/court-marriage-procedure-in-pakistan/'],
        ['Court Marriage Services', '/court-marriage-in-pakistan-legal-framework/'],
        ['Court Marriage Pakistan', '/court-marriage-online-marriage-nikah-khawan-services-pakistan/'],
        ['Court Marriage In Islamabad & Rawalpindi', '/court-marriage-in-islamabad-and-rawalpindi/'],
        ['Court Marriage In Lahore', '/court-marriage-in-lahore-legal-union/'],
        ['Nikah Khawan & Registrar In Karachi', '/nikah-khawan-qazi-and-nikah-registrar-in-karachi-pakistan/'],
        ['Mahr In Islam', '/mehar-mahr-in-islam/'],
        ['Misyar Nikah & Marriage Documentation', '/misyar-marriage-nikah-misyar-marriages/'],
      ]},
    ],
  },
  {
    label: 'Civil Certificates', href: '/civil-certificates-in-pakistan/',
    groups: [{ title: 'Civil Certificates', links: [
      ['Succession Certificate', '/succession-certificate-letter-of-administration/'],
      ['Marriage Certificate', '/marriage-registration-certificate/'],
      ['Divorce Certificate', '/divorce-registration-certificate/'],
      ['Death Certificate', '/death-certificate/'],
      ['Marriage Registration In Karachi', '/marriage-registration-nadra-marriage-certificate-karachi/'],
      ['Computerized Death Certificate Guide', '/nadra-computerized-death-certificate-online-verification-check/'],
      ['B-Form NADRA — Information Guide', '/b-form-nadra-importance-of-b-form-in-pakistan/'],
    ]}],
  },
  {
    label: 'Civil Lawyers', href: '/civil-law/',
    groups: [{ title: 'Civil Law', links: [
      ['Civil Lawyers', '/civil-law/'],
      ['Lawyers For Litigation', '/lawyers-for-litigation-in-the-court/'],
    ]}],
  },
  {
    label: 'Property Law', href: '/property-law-in-pakistan/',
    groups: [{ title: 'Property Law', links: [
      ['Property Law', '/property-law-in-pakistan/'],
      ['Property Disputes', '/property-disputes/'],
      ['Rental Disputes', '/rental-disputes-between-landlords-and-tenants-in-pakistan/'],
      ['Rental and Tenancy Law', '/rental-and-tenancy-law-of-pakistan/'],
    ]}],
  },
  { label: 'Intellectual Property', href: '/intellectual-property-in-pakistan/' },
  {
    label: 'Business Lawyers', href: '/corporate-tax-law-services/',
    groups: [{ title: 'Business Lawyers', links: [
      ['Income Tax Lawyers', '/fbr-income-tax-return-filing-lawyers-pakistan/'],
      ['Sales Tax Lawyers', '/sales-tax-act-guide-for-importers-in-karachi/'],
      ['Sales Tax Act in Karachi', '/sales-tax-act-guide-for-importers-in-karachi/'],
      ['NTN Verification FBR in Pakistan', '/ntn-verification-from-the-fbr-in-pakistan/'],
      ['Corporate Lawyers', '/corporate-tax-law-services/'],
    ]}],
  },
]

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2 no-underline" aria-label="Right Law Associates home">
      <Image src="/images/right-law-logo.webp" alt="Right Law Associates logo" width={56} height={56} priority unoptimized className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14" />
      <span className="leading-none">
        <strong className="block whitespace-nowrap font-serif text-[18px] font-bold tracking-[0.015em] text-[#050505] sm:text-[21px]">RIGHT LAW</strong>
        <small className="mt-1 block whitespace-nowrap text-[8px] font-bold tracking-[0.34em] text-[#c49a5a] sm:text-[9px]">A S S O C I A T E S</small>
      </span>
    </Link>
  )
}

function MegaMenu({ item, index }) {
  if (!item.groups) return <Link href={item.href} className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">{item.label}</Link>
  const edge = index <= 1 ? 'left-0' : index >= navItems.length - 2 ? 'right-0' : 'left-1/2 -translate-x-1/2'
  return <div className="group/nav relative"><Link href={item.href} className="flex items-center gap-1 whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">{item.label}<ChevronDown size={14}/></Link><div className={`invisible absolute top-full z-50 w-[min(92vw,980px)] border border-[#dce5e1] bg-white p-5 opacity-0 shadow-2xl transition-all group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100 ${edge}`}><div className="mb-4 flex items-center justify-between gap-4 border-b border-[#dce5e1] pb-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b18342]">{item.label}</p><p className="mt-1 text-xs text-slate-500">RightLaw.pk existing pages and services</p></div>{item.href !== '#' && <Link href={item.href} className="shrink-0 text-xs font-bold text-[#173b35] no-underline hover:text-[#b18342]">View main page</Link>}</div><div className={`grid max-h-[68vh] ${item.groups.length > 1 ? 'grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-x-8 gap-y-6 overflow-y-auto pr-1`}>{item.groups.map(group => <section key={group.title}><h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b18342]">{group.title}</h3><div className="space-y-0.5">{group.links.map(([label,href]) => <Link key={`${label}-${href}`} href={href} className="block border-l border-transparent px-2 py-1.5 text-[13px] leading-5 text-slate-600 no-underline hover:border-[#c49a5a] hover:bg-[#f7f3eb] hover:text-[#173b35]">{label}</Link>)}</div></section>)}</div></div></div>
}

function MobileItem({ item, close }) {
  if (!item.groups) return <Link href={item.href} onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-sm font-semibold text-[#173b35] no-underline">{item.label}</Link>
  return <details className="group/mobile-service border-t border-[#dce5e1]"><summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-[#173b35] marker:hidden"><span>{item.label}</span><ChevronDown size={16} className="transition-transform group-open/mobile-service:rotate-180"/></summary><div className="pb-3 pl-3 pr-1">{item.href !== '#' && <Link href={item.href} onClick={close} className="block px-3 py-2 text-sm font-bold text-[#b18342] no-underline">Main page</Link>}{item.groups.map(group => <div key={group.title} className="mt-2 border-l border-[#dce5e1] pl-2"><p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b18342]">{group.title}</p>{group.links.map(([label,href]) => <Link key={`${label}-${href}`} href={href} onClick={close} className="block px-3 py-2 text-sm leading-5 text-slate-600 no-underline hover:text-[#173b35]">{label}</Link>)}</div>)}</div></details>
}

export default function RightLawHeader() {
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 8); onScroll(); window.addEventListener('scroll',onScroll); return () => window.removeEventListener('scroll',onScroll) }, [])
  const close = () => setOpen(false)
  return <><style jsx global>{`.site-header{display:none!important}`}</style><header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${scrolled ? 'border-b border-[#dce5e1] shadow-sm' : 'border-b border-transparent'}`}><div className="hidden border-b border-white/10 bg-[#173b35] text-white md:block"><div className="mx-auto flex h-9 w-[min(1180px,calc(100%-56px))] items-center justify-between text-[11px] font-semibold tracking-wide"><p className="flex items-center gap-2 text-white/80"><ShieldCheck size={14} className="text-[#d5ae72]"/>Trusted legal representation across Pakistan</p><p className="text-white/75">Senior Advocate-led practice · Since 1985</p></div></div><div className="mx-auto flex h-[76px] w-[min(1180px,calc(100%-56px))] items-center justify-between gap-5 max-sm:w-[calc(100%-32px)]"><Logo/><div className="hidden items-center lg:flex"><a href={`tel:${firm.phone}`} className="hidden items-center gap-2 border-l border-[#dce5e1] pl-5 text-sm font-bold text-[#173b35] no-underline hover:text-[#b18342] xl:flex"><Phone size={15}/>{firm.phone}</a><Link href="/contact/" className="ml-3 inline-flex items-center gap-2 bg-[#c49a5a] px-5 py-3 text-sm font-bold text-[#173b35] no-underline shadow-sm hover:bg-[#173b35] hover:text-white">Book Consultation <ArrowUpRight size={16}/></Link></div><button className="border border-[#173b35]/20 p-2.5 text-[#173b35] lg:hidden" aria-expanded={open} aria-controls="rightlaw-mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div><div className="hidden border-t border-[#dce5e1] lg:block"><nav className="mx-auto flex w-[min(1240px,calc(100%-40px))] items-center justify-center" aria-label="Main navigation"><Link href="/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Home</Link>{navItems.map((item,index) => <MegaMenu key={`${item.label}-${item.href}`} item={item} index={index}/>)}<Link href="/blog/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Blog</Link><Link href="/about-us/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">About Us</Link><Link href="/meet-our-attorneys/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Our Attorneys</Link><Link href="/faq/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">FAQ</Link></nav></div>{open && <div className="border-t border-[#dce5e1] bg-white lg:hidden"><nav id="rightlaw-mobile-nav" className="mx-auto max-h-[75vh] w-[min(1180px,calc(100%-32px))] overflow-y-auto py-4" aria-label="Mobile navigation"><Link href="/" onClick={close} className="block px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Home</Link>{navItems.map(item => <MobileItem key={`${item.label}-${item.href}`} item={item} close={close}/>)}<Link href="/blog/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Blog</Link><Link href="/about-us/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">About Us</Link><Link href="/meet-our-attorneys/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Our Attorneys</Link><Link href="/faq/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">FAQ</Link><div className="mt-4 border-t border-[#dce5e1] px-3 pt-4"><a href={`tel:${firm.phone}`} className="text-sm font-semibold text-[#173b35] no-underline">Call {firm.phone}</a></div></nav></div>}</header></>
}
