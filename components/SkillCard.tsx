import type { Skill } from '@/types'

export default function SkillCard({ skill }: { skill: Skill }) {
  const icon = skill.metadata?.icon?.imgix_url
  
  // Handle proficiency field which can be either string or object
  const proficiencyValue = typeof skill.metadata?.proficiency === 'string' 
    ? skill.metadata.proficiency 
    : skill.metadata?.proficiency?.value ?? ''
  
  return (
    <div className="flex items-center gap-3 border p-3 rounded">
      {icon && (
        <img
          src={`${icon}?w=120&h=120&fit=crop&auto=format,compress`}
          alt={skill.title}
          width={60}
          height={60}
          className="w-10 h-10 object-cover rounded"
        />
      )}
      <div>
        <div className="font-medium">{skill.metadata?.name ?? skill.title}</div>
        <div className="text-sm text-gray-500">{proficiencyValue}</div>
      </div>
    </div>
  )
}