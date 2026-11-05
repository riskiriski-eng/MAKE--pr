import { Button } from '../components/ui/Button'
import { Plus, Trash2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'danger', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
}

export const Accent = {
  args: {
    variant: 'accent',
    children: 'Accent Cyan Action',
  },
}

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Delete Project',
  },
}

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
}

export const WithIcons = () => (
  <div className="flex flex-wrap gap-4 items-center">
    <Button leftIcon={<Plus size={18} />}>Create CV</Button>
    <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Continue</Button>
    <Button variant="accent" leftIcon={<Sparkles size={18} />}>AI Auto-Write</Button>
    <Button variant="danger" leftIcon={<Trash2 size={18} />}>Delete</Button>
  </div>
)

export const Loading = {
  args: {
    loading: true,
    loadingText: 'Saving changes...',
    children: 'Save Changes',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: 'Unavailable Action',
  },
}

export const SafeHoverMicroInteractions = () => (
  <div className="flex flex-col gap-4 max-w-lg p-4 bg-white border border-slate-200 rounded-lg">
    <h4 className="text-sm font-semibold text-navy font-heading">
      Safe Hover & Lift Animations (WCAG AA & prefers-reduced-motion compliant)
    </h4>
    <p className="text-xs text-text-muted">
      Hover over these buttons to observe the subtle, non-disruptive -translate-y-0.5 lift and shadow elevation.
      Disabled buttons remain completely still with no hover artifacts.
    </p>
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Hover Me (Primary)</Button>
      <Button variant="accent">Hover Me (Accent)</Button>
      <Button variant="secondary">Hover Me (Secondary)</Button>
      <Button variant="outline">Hover Me (Outline)</Button>
      <Button variant="primary" disabled>Disabled (No Lift)</Button>
    </div>
  </div>
)

export const MobileResponsiveness = () => (
  <div className="max-w-[360px] p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3">
    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
      Mobile Viewport Preview (360px)
    </span>
    <Button fullWidth variant="primary" leftIcon={<Sparkles size={18} />}>
      Generate Resume with AI
    </Button>
    <Button fullWidth variant="secondary" rightIcon={<ArrowRight size={18} />}>
      Select Template
    </Button>
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="flex-1" leftIcon={<ShieldCheck size={14} />}>
        ATS Check
      </Button>
      <Button variant="ghost" size="sm" className="flex-1">
        Skip
      </Button>
    </div>
  </div>
)
