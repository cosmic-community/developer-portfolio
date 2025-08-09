import { cosmic, hasStatus } from './cosmic'
import type { Project, Skill, Testimonial, WorkExperience, CosmicResponse } from '@/types'

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'projects',
      props: ['id', 'title', 'slug', 'metadata'],
      limit: 20
    }).depth(1)
    return (res.objects ?? []) as Project[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch projects')
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const res = await cosmic.objects.findOne({
      type: 'projects',
      slug
    }).depth(1)
    const obj = res.object as Project | undefined
    if (!obj) return null
    return obj
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch project')
  }
}

export async function fetchSkills(): Promise<Skill[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'skills',
      props: ['id', 'title', 'slug', 'metadata'],
      limit: 50
    }).depth(1)
    return (res.objects ?? []) as Skill[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch skills')
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'testimonials',
      props: ['id', 'title', 'slug', 'metadata'],
      limit: 10
    }).depth(1)
    return (res.objects ?? []) as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch testimonials')
  }
}

export async function fetchWorkExperience(): Promise<WorkExperience[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'work-experience',
      props: ['id', 'title', 'slug', 'metadata'],
      limit: 10
    }).depth(1)
    return (res.objects ?? []) as WorkExperience[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch work experience')
  }
}