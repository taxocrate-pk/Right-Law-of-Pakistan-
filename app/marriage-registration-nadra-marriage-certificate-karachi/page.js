import RefinedServicePage from '../../components/refined-service-page'
import page from '../../lib/batch2/karachi-marriage.json'

export const metadata = {
 title: { absolute: page.metaTitle },
 description: page.description,
 alternates: { canonical: `https://rightlaw.pk/${page.slug}` },
 openGraph: { title: page.metaTitle, description: page.description, url: `https://rightlaw.pk/${page.slug}`, type: 'article', images: [{url:page.image,width:1942,height:page.imageHeight,alt:page.alt}] },
}
export default function Page() { return <RefinedServicePage page={page}/> }
