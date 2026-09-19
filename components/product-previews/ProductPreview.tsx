import type { ProjectId } from '@/lib/projects'
import KaraPreview from './KaraPreview'
import AlexisPreview from './AlexisPreview'
import DameJusticePreview from './DameJusticePreview'

const previews = { kara: KaraPreview, alexis: AlexisPreview, damejustice: DameJusticePreview }

export default function ProductPreview({ id }: { id: ProjectId }) {
  const Preview = previews[id]
  return <Preview />
}