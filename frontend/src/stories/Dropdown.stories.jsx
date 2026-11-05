import { useState } from 'react'
import { Dropdown } from '../components/ui/Dropdown'

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

const TEMPLATES = [
  { value: 'professional', label: 'Professional Chronological (ATS Friendly)' },
  { value: 'creative', label: 'Creative Modern (2-Column Designer)' },
  { value: 'minimal', label: 'Minimalist Swiss (Clean Executive)' },
  { value: 'academic', label: 'Academic & Research (Coming Soon)', disabled: true },
]

export const Interactive = () => {
  const [selected, setSelected] = useState('professional')

  return (
    <div className="max-w-md flex flex-col gap-6">
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-2">Select Template</label>
        <Dropdown
          options={TEMPLATES}
          value={selected}
          onChange={setSelected}
          placeholder="Choose CV template..."
        />
        <p className="text-xs text-text-muted mt-2">
          Current value: <strong>{selected}</strong>. Try Arrow keys, Enter, and Escape for keyboard navigation!
        </p>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-[340px]">
        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
          Mobile Viewport (340px)
        </label>
        <Dropdown
          options={TEMPLATES}
          value={selected}
          onChange={setSelected}
          placeholder="Mobile select..."
        />
        <p className="text-[11px] text-text-muted mt-1.5">
          Features touch momentum scrolling (<code>touch-pan-y</code>) and full viewport containment.
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-primary mb-2">Error State</label>
        <Dropdown
          options={TEMPLATES}
          error={true}
          placeholder="Required template selection"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-primary mb-2">Loading State</label>
        <Dropdown
          options={[]}
          loading={true}
          placeholder="Fetching templates..."
        />
      </div>
    </div>
  )
}
