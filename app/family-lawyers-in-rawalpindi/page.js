import FamilyCityPage, { familyCityMetadata } from '../../components/family-city-page'

export const metadata = familyCityMetadata('rawalpindi')

export default function Page() {
  return <FamilyCityPage pageKey="rawalpindi" />
}
