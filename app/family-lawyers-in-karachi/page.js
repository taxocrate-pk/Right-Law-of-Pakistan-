import FamilyCityPage, { familyCityMetadata } from '../../components/family-city-page'

export const metadata = familyCityMetadata('karachi')

export default function Page() {
  return <FamilyCityPage pageKey="karachi" />
}
