import type { ProjectId } from '@/lib/projects'
import KaraPreview from './KaraPreview'
import AlexisPreview from './AlexisPreview'

const previews = { kara: KaraPreview, alexis: AlexisPreview }

export default function ProductPreview({ id }: { id: ProjectId }) {
  const Preview = previews[id]
  return <Preview />
}