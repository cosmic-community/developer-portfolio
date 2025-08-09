export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at?: string;
  modified_at?: string;
  [key: string]: any;
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    proficiency?: { key?: string; value?: string } | string;
    category?: { key?: string; value?: string } | string;
    years_experience?: number;
    icon?: { url: string; imgix_url: string };
    [key: string]: any;
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    short_description?: string;
    content?: string;
    project_type?: { key?: string; value?: string } | string;
    technologies?: Skill[];
    featured_image?: { url: string; imgix_url: string } | null;
    gallery?: { url: string; imgix_url: string }[] | null;
    live_url?: string | null;
    repo_url?: string | null;
    year?: string;
    featured?: boolean;
    [key: string]: any;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    role?: string;
    start_date?: string;
    end_date?: string | null;
    current?: boolean;
    location?: string;
    responsibilities?: string;
    company_logo?: { url: string; imgix_url: string } | null;
    [key: string]: any;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name?: string;
    role?: string;
    company?: string;
    quote?: string;
    headshot?: { url: string; imgix_url: string } | null;
    featured?: boolean;
    [key: string]: any;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total?: number;
  limit?: number;
  skip?: number;
}