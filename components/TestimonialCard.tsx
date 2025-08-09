import type { Testimonial } from '@/types'

export default function TestimonialCard({ t }: { t: Testimonial }) {
  const head = t.metadata?.headshot?.imgix_url
  return (
    <div className="border p-4 rounded bg-white shadow-sm">
      <div className="flex items-start gap-4">
        {head && (
          <img
            src={`${head}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={t.metadata?.name ?? t.title}
            width={80}
            height={80}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold">{t.metadata?.name ?? t.title}</div>
          <div className="text-sm text-gray-500">{t.metadata?.role ?? ''}{t.metadata?.company ? ` • ${t.metadata.company}` : ''}</div>
        </div>
      </div>
      <blockquote className="mt-4 text-gray-700">“{t.metadata?.quote ?? ''}”</blockquote>
    </div>
  )
}