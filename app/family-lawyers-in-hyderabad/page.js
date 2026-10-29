import FamilyCityPage, { familyCityMetadata } from '../../components/family-city-page'

export const metadata = familyCityMetadata('hyderabad')

export default function Page() {
  return <FamilyCityPage pageKey="hyderabad" />
}
