'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-react'
import { firm } from '../lib/legal-data'

const services = [
  {
    label: 'Family Law', href: '/family-law/',
    groups: [
      { title: 'Core Family Law', links: [
        ['Family Law in Pakistan', '/family-law-in-pakistan/'],
        ['Divorce Law', '/divorce-law/'],
        ['Dissolution of Marriage', '/dissolution-of-marriage-in-pakistan/'],
        ['Maintenance', '/maintenance-in-pakistan/'],
      ]},
      { title: 'Children & Guardianship', links: [
        ['Child Custody', '/child-custody/'],
        ['Guardianship Law', '/legal-guardianship-laws-of-pakistan/'],
        ['Adoption & Guardianship', '/child-adoption-child-guardianship-in-pakistan/'],
      ]},
      { title: 'Family Lawyers', links: [
        ['Family Lawyers in Pakistan', '/family-lawyers-in-pakistan-divorce-khula-child-custody-experts/'],
        ['Family Lawyers in Lahore', '/family-law-in-lahore-divorce-khula-court-marriage-online-nikah/'],
      ]},
    ],
  },
  {
    label: 'Property & Succession', href: '/property-law-in-pakistan/',
    groups: [
      { title: 'Property Law', links: [
        ['Property Law in Pakistan', '/property-law-in-pakistan/'],
        ['Property Disputes', '/property-disputes/'],
        ['Rental & Tenancy Law', '/rental-and-tenancy-law-of-pakistan/'],
      ]},
      { title: 'Succession', links: [
        ['Succession Certificate', '/succession-certificate-in-pakistan-for-legal-heirs/'],
        ['Succession & Letter of Administration', '/succession-certificate-letter-of-administration/'],
        ['NADRA Succession Certificate', '/get-succession-certificate-and-letter-of-administration-from-nadra/'],
      ]},
    ],
  },
  {
    label: 'Corporate & Tax', href: '/corporate-tax-law-services/',
    groups: [
      { title: 'Corporate', links: [
        ['Corporate & Tax Law Services', '/corporate-tax-law-services/'],
        ['Company Registration Karachi', '/company-registration-service-karachi/'],
        ['Corporate Lawyers', '/corporate-lawyer-in-karachi-islamabad-rawalpindi-lahore-pakistan/'],
      ]},
      { title: 'Taxation', links: [
        ['FBR Income Tax Return Filing', '/fbr-income-tax-return-filing-lawyers-pakistan/'],
        ['NTN Verification', '/ntn-verification-from-the-fbr-in-pakistan/'],
        ['Become a Filer', '/become-filer-in-pakistan-filer-guide-2026/'],
      ]},
      { title: 'Business & IP', links: [
        ['Intellectual Property', '/intellectual-property-in-pakistan/'],
        ['Sales Tax for Importers', '/sales-tax-act-guide-for-importers-in-karachi/'],
      ]},
    ],
  },
  {
    label: 'Civil & Criminal', href: '/civil-law/',
    groups: [
      { title: 'Civil Law', links: [
        ['Civil Law & Civil Lawyers', '/civil-law/'],
        ['Court Litigation', '/lawyers-for-litigation-in-the-court/'],
      ]},
      { title: 'Criminal Law', links: [
        ['Criminal Lawyers', '/criminal-law-in-pakistan/'],
      ]},
    ],
  },
  {
    label: 'Marriage Services', href: '/marriage-services-court-marriage-online-nikah-registration-shadi/',
    groups: [
      { title: 'Court Marriage', links: [
        ['Court Marriage in Pakistan', '/court-marriage-in-pakistan-legal-framework/'],
        ['Court Marriage Karachi', '/court-marriage-in-karachi/'],
        ['Court Marriage Lahore', '/court-marriage-in-lahore-legal-union/'],
        ['Islamabad & Rawalpindi', '/court-marriage-in-islamabad-and-rawalpindi/'],
      ]},
      { title: 'Online Nikah', links: [
        ['Online Marriage', '/online-marriage/'],
        ['Online Nikah in Pakistan', '/online-nikah-online-marriage-in-pakistan/'],
        ['Nikah Nama', '/nikah-nama/'],
      ]},
      { title: 'Certificates', links: [
        ['Marriage Registration Certificate', '/marriage-registration-certificate/'],
        ['Divorce Registration Certificate', '/divorce-registration-certificate/'],
      ]},
    ],
  },
]

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3 no-underline" aria-label="Right Law Associates home">
      <span className="grid h-11 w-10 place-items-center bg-[#c49a5a] font-serif text-2xl font-bold text-white [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]">R</span>
      <span className="leading-none">
        <strong className="block text-[18px] font-extrabold tracking-[0.16em] text-[#173b35]">RIGHT LAW</strong>
        <small className="mt-1 block text-[9px] font-bold tracking-[0.28em] text-[#c49a5a]">ASSOCIATES</small>
      </span>
    </Link>
  )
}

function MegaMenu({ item, index }) {
  const edge = index === 0 ? 'left-0' : index >= services.length - 2 ? 'right-0' : 'left-1/2 -translate-x-1/2'
  return (
    <div className="group/nav relative">
      <Link href={item.href} className="flex items-center gap-1 whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">
        {item.label}<ChevronDown size={14}/>
      </Link>
      <div className={`invisible absolute top-full z-50 w-[min(92vw,900px)] border border-[#dce5e1] bg-white p-5 opacity-0 shadow-2xl transition-all group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100 ${edge}`}>
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#dce5e1] pb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b18342]">{item.label}</p>
            <p className="mt-1 text-xs text-slate-500">Pakistan-wide guidance and focused legal services</p>
          </div>
          <Link href={item.href} className="shrink-0 text-xs font-bold text-[#173b35] no-underline hover:text-[#b18342]">View main service</Link>
        </div>
        <div className="grid max-h-[68vh] grid-cols-2 gap-x-8 gap-y-6 overflow-y-auto pr-1 xl:grid-cols-3">
          {item.groups.map((group) => (
            <section key={group.title}>
              <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b18342]">{group.title}</h3>
              <div className="space-y-0.5">
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} className="block border-l border-transparent px-2 py-1.5 text-[13px] leading-5 text-slate-600 no-underline hover:border-[#c49a5a] hover:bg-[#f7f3eb] hover:text-[#173b35]">{label}</Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileService({ item, close }) {
  return (
    <details className="group/mobile-service border-t border-[#dce5e1]">
      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-[#173b35] marker:hidden">
        <span>{item.label}</span><ChevronDown size={16} className="transition-transform group-open/mobile-service:rotate-180"/>
      </summary>
      <div className="pb-3 pl-3 pr-1">
        <Link href={item.href} onClick={close} className="block px-3 py-2 text-sm font-bold text-[#b18342] no-underline">Main service</Link>
        {item.groups.map((group) => (
          <div key={group.title} className="mt-2 border-l border-[#dce5e1] pl-2">
            <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b18342]">{group.title}</p>
            {group.links.map(([label, href]) => <Link key={href} href={href} onClick={close} className="block px-3 py-2 text-sm leading-5 text-slate-600 no-underline hover:text-[#173b35]">{label}</Link>)}
          </div>
        ))}
      </div>
    </details>
  )
}

export default function RightLawHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)

  return (
    <>
      <style jsx global>{`.site-header{display:none!important}`}</style>
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${scrolled ? 'border-b border-[#dce5e1] shadow-sm' : 'border-b border-transparent'}`}>
        <div className="hidden border-b border-white/10 bg-[#173b35] text-white md:block">
          <div className="mx-auto flex h-9 w-[min(1180px,calc(100%-56px))] items-center justify-between text-[11px] font-semibold tracking-wide">
            <p className="flex items-center gap-2 text-white/80"><ShieldCheck size={14} className="text-[#d5ae72]"/>Trusted legal representation across Pakistan</p>
            <p className="text-white/75">Senior Advocate-led practice · Since 1985</p>
          </div>
        </div>

        <div className="mx-auto flex h-[76px] w-[min(1180px,calc(100%-56px))] items-center justify-between gap-5 max-sm:w-[calc(100%-32px)]">
          <Logo/>
          <div className="hidden items-center lg:flex">
            <a href={`tel:${firm.phone}`} className="hidden items-center gap-2 border-l border-[#dce5e1] pl-5 text-sm font-bold text-[#173b35] no-underline hover:text-[#b18342] xl:flex"><Phone size={15}/>{firm.phone}</a>
            <Link href="/contact/" className="ml-3 inline-flex items-center gap-2 bg-[#c49a5a] px-5 py-3 text-sm font-bold text-[#173b35] no-underline shadow-sm hover:bg-[#173b35] hover:text-white">Book Consultation <ArrowUpRight size={16}/></Link>
          </div>
          <button className="border border-[#173b35]/20 p-2.5 text-[#173b35] lg:hidden" aria-expanded={open} aria-controls="rightlaw-mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>

        <div className="hidden border-t border-[#dce5e1] lg:block">
          <nav className="mx-auto flex w-[min(1180px,calc(100%-56px))] items-center justify-center" aria-label="Main navigation">
            <Link href="/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Home</Link>
            {services.map((item, index) => <MegaMenu key={item.href} item={item} index={index}/>)}
            <Link href="/meet-our-attorneys/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Lawyers</Link>
            <Link href="/blog/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Blog</Link>
            <Link href="/about-us/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">About</Link>
            <Link href="/contact/" className="whitespace-nowrap px-2.5 py-3 text-[12px] font-semibold text-[#173b35] no-underline hover:bg-[#f7f3eb] hover:text-[#b18342] xl:px-3 xl:text-[13px]">Contact</Link>
          </nav>
        </div>

        {open && (
          <div className="border-t border-[#dce5e1] bg-white lg:hidden">
            <nav id="rightlaw-mobile-nav" className="mx-auto max-h-[75vh] w-[min(1180px,calc(100%-32px))] overflow-y-auto py-4" aria-label="Mobile navigation">
              <Link href="/" onClick={close} className="block px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Home</Link>
              {services.map((item) => <MobileService key={item.href} item={item} close={close}/>)}
              <Link href="/meet-our-attorneys/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Lawyers</Link>
              <Link href="/blog/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Blog</Link>
              <Link href="/about-us/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">About</Link>
              <Link href="/contact/" onClick={close} className="block border-t border-[#dce5e1] px-3 py-3 text-base font-semibold text-[#173b35] no-underline">Contact</Link>
              <div className="mt-4 border-t border-[#dce5e1] px-3 pt-4"><a href={`tel:${firm.phone}`} className="text-sm font-semibold text-[#173b35] no-underline">Call {firm.phone}</a></div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
