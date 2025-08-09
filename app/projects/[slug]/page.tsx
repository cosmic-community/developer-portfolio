// app/projects/[slug]/page.tsx
import { fetchProjectBySlug, fetchProjects } from '@/lib/api'
import type { Project } from '@/types'
import Link from 'next/link'

type Params = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params
  const project = await fetchProjectBySlug(slug)

  if (!project) {
    return (
      <div>
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-4">We couldn't find the requested project.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back home</a></Link>
      </div>
    )
  }

  const techs = project.metadata?.technologies ?? []

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{project.metadata?.title ?? project.title}</h1>
      <p className="text-gray-600 mb-4">{project.metadata?.short_description}</p>

      {project.metadata?.featured_image?.imgix_url && (
        <img
          src={`${project.metadata.featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
          alt={project.metadata?.title ?? project.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded"
        />
      )}

      <section className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: project.metadata?.content ?? '' }} />

      {techs.length > 0 && (
        <section className="mt-6">
          <h3 className="font-semibold">Technologies</h3>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {techs.map((t: any) => (
              <div key={t.id} className="border p-2 rounded text-sm bg-white">
                {t.metadata?.name ?? t.title}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}