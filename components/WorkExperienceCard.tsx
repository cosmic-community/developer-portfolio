import type { WorkExperience } from '@/types'

export default function WorkExperienceCard({ item }: { item: WorkExperience }) {
  const logo = item.metadata?.company_logo?.imgix_url
  return (
    <div className="flex gap-4 items-start border p-4 rounded bg-white">
      {logo && (
        <img
          src={`${logo}?w=200&h=200&fit=crop&auto=format,compress`}
          alt={item.metadata?.company}
          width={60}
          height={60}
          className="w-12 h-12 object-cover rounded"
        />
      )}
      <div>
        <div className="font-medium">{item.metadata?.company} • {item.metadata?.role}</div>
        <div className="text-sm text-gray-500">
          {item.metadata?.start_date ?? ''} — {item.metadata?.current ? 'Present' : item.metadata?.end_date ?? ''}
        </div>
        <div className="mt-2 text-sm text-gray-700 whitespace-pre-line">{item.metadata?.responsibilities ?? ''}</div>
      </div>
    </div>
  )
}