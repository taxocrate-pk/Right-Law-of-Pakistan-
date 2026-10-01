import { notFound } from 'next/navigation'
import { getNavRoute, navRouteContent } from '../../lib/nav-route-content'
import DnaRoutePage from '../../components/dna-route-page'

export function generateStaticParams() {
  return Object.keys(navRouteContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getNavRoute(slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://rightlaw.pk/${slug}/` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://rightlaw.pk/${slug}/`,
      siteName: 'Right Law Associates',
      type: 'article',
    },
  }
}

export default async function RoutePage({ params }) {
  const { slug } = await params
  const page = getNavRoute(slug)
  if (!page) notFound()
  return <DnaRoutePage page={page} slug={slug} />
}
