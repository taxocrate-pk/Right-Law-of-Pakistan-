import FamilyCityPage, { familyCityMetadata } from '../../components/family-city-page'

export const metadata = familyCityMetadata('islamabad')

export default function Page() {
  return <FamilyCityPage pageKey="islamabad" />
}
