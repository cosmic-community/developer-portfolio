import { fetchProjects, fetchSkills, fetchTestimonials } from '@/lib/api'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import TestimonialCard from '@/components/TestimonialCard'
import Loading from '@/components/Loading'

export default async function HomePage() {
  const [projects, skills, testimonials] = await Promise.all([
    fetchProjects(),
    fetchSkills(),
    fetchTestimonials()
  ])

  const featured = projects.filter(p => p.metadata?.featured).slice(0, 3)
  const topTestimonials = testimonials.slice(0, 3)
  const topSkills = skills.slice(0, 6)

  return (
    <div>
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        {featured.length === 0 ? <Loading /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </section>

      <section id="skills" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topSkills.map(s => <SkillCard key={s.id} skill={s} />)}
        </div>
      </section>

      <section id="testimonials" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topTestimonials.map(t => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </section>
    </div>
  )
}