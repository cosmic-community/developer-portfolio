import type { Project } from '@/types'
import Link from 'next/link'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const img = project?.metadata?.featured_image?.imgix_url
  const title = project.metadata?.title ?? project.title
  const short = project.metadata?.short_description ?? ''

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white">
      {img && (
        <img
          src={`${img}?w=1200&h=600&fit=crop&auto=format,compress`}
          alt={title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{short}</p>
        <div className="mt-4">
          <Link href={`/projects/${project.slug}`}>
            <a className="text-sm text-blue-600 hover:underline">View project →</a>
          </Link>
        </div>
      </div>
    </article>
  )
}