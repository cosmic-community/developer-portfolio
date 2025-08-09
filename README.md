# Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/7a164980-74bc-11f0-a051-23c10f41277a-photo-1498050108023-c5249f4df085-1754701328417.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A Next.js portfolio that uses your existing Cosmic content (projects, skills, work-experience, testimonials).

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=689698d33d5033a7ab1ae041&clone_repository=68969e9370fd3eaf8318b4f4)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Features
- Home page that highlights featured projects and client testimonials.
- Project detail pages with linked technologies (skills).
- Work experience timeline and skills listing.
- Image optimization via imgix URL parameters.
- Typesafe data fetching with TypeScript and strict tsconfig.
- Dismissible, required "Built with Cosmic" badge.

## Technologies
- next (App Router)
- react
- typescript
- @cosmicjs/sdk
- tailwindcss
- postcss, autoprefixer

## Getting Started

Prerequisites
- Node.js / bun (recommended)
- A Cosmic bucket with the existing object types mentioned above
- COSMIC_BUCKET_SLUG and COSMIC_READ_KEY (automatic in platform - do not commit)

Installation
1. Install dependencies with bun:
   bun install

2. Start development:
   bun run dev

Cosmic SDK Examples
- Fetch all projects:
```ts
// lib/api.ts (example)
const projects = await fetchProjects()
```

Cosmic CMS Integration
- This app uses your bucket's existing object types: projects, skills, work-experience, testimonials.
- Data fetching uses depth=1 to include linked objects (e.g., project.technologies -> skills).

Deployment Options
- Vercel is recommended for Next.js App Router deployments.
- Make sure COSMIC_BUCKET_SLUG and COSMIC_READ_KEY are set in environment variables on your host.

<!-- README_END -->