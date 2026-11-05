import { useState } from 'react'
import { Badge } from '../components/ui/Badge'
import { Check, AlertTriangle, Sparkles, Filter } from 'lucide-react'

export default {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export const AllVariants = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Badge variant="primary">Navy Tag</Badge>
    <Badge variant="cyan">Cyan Skill</Badge>
    <Badge variant="orange">Orange Warning</Badge>
    <Badge variant="success" dot icon={<Check size={14} />}>ATS Score: 98%</Badge>
    <Badge variant="warning" dot icon={<AlertTriangle size={14} />}>ATS Score: 74%</Badge>
    <Badge variant="error" dot>Format Issue</Badge>
    <Badge variant="neutral">Neutral Slate</Badge>
    <Badge variant="cyan" icon={<Sparkles size={14} />}>AI Suggested</Badge>
  </div>
)

export const InteractiveSkillTags = () => {
  const [skills, setSkills] = useState(['React.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL'])
  const [activeFilter, setActiveFilter] = useState('All')

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove))
  }

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <h4 className="text-sm font-bold text-navy font-heading mb-2">
          Removable Skill Chips (CV Builder)
        </h4>
        <p className="text-xs text-text-muted mb-3">
          Hover to see safe micro-interaction and click the 'x' button to remove a skill.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="cyan"
              onRemove={() => removeSkill(skill)}
            >
              {skill}
            </Badge>
          ))}
          {skills.length === 0 && (
            <span className="text-xs text-text-muted italic">All skills removed.</span>
          )}
        </div>
      </div>

      <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <h4 className="text-sm font-bold text-navy font-heading mb-2 flex items-center gap-2">
          <Filter size={16} /> Filter Pills (Interactive Clickable)
        </h4>
        <div className="flex flex-wrap gap-2">
          {['All', 'ATS Verified', 'Creative', 'Executive'].map((category) => (
            <Badge
              key={category}
              variant={activeFilter === category ? 'primary' : 'neutral'}
              interactive
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export const MobileResponsiveBadges = () => (
  <div className="max-w-[320px] p-4 bg-slate-50 border border-slate-200 rounded-lg">
    <p className="text-xs font-semibold text-navy mb-2">Mobile 320px Viewport Wrapping:</p>
    <div className="flex flex-wrap gap-1.5">
      <Badge size="sm" variant="success" dot>ATS 95%</Badge>
      <Badge size="sm" variant="cyan">React 18</Badge>
      <Badge size="sm" variant="primary">Vite</Badge>
      <Badge size="sm" variant="neutral">Tailwind</Badge>
      <Badge size="sm" variant="orange">In Progress</Badge>
    </div>
  </div>
)
