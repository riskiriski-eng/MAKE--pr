import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Sparkles, ArrowRight } from 'lucide-react'

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export const StandardCard = () => (
  <div className="max-w-md">
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Professional Template</CardTitle>
          <Badge variant="success">ATS 98%</Badge>
        </div>
        <CardDescription>Single-column chronological layout with crisp dividers</CardDescription>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-text-muted">
          Recommended for Corporate, Finance, Law, and Traditional engineering roles.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="secondary" size="sm">Preview</Button>
        <Button size="sm">Use Template</Button>
      </CardFooter>
    </Card>
  </div>
)

export const InteractiveCards = () => (
  <div className="flex flex-col gap-4 max-w-xl">
    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-text-muted">
      <strong>Safe Hover & Micro-interactions:</strong> Cards feature smooth <code>hover:-translate-y-1</code> lift
      and <code>hover:shadow-card-hover</code> with active scale compression and <code>motion-reduce:transform-none</code> accessibility.
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card interactive onClick={() => alert('Selected Professional')}>
        <div className="flex items-center justify-between mb-2">
          <CardTitle>Professional</CardTitle>
          <Badge variant="success" dot>ATS 98%</Badge>
        </div>
        <CardDescription>Hover over me to see the smooth lift and shadow effect!</CardDescription>
      </Card>

      <Card interactive onClick={() => alert('Selected Creative')}>
        <div className="flex items-center justify-between mb-2">
          <CardTitle>Creative</CardTitle>
          <Badge variant="cyan" icon={<Sparkles size={12} />}>Modern</Badge>
        </div>
        <CardDescription>Press Tab to focus me, then Enter or Space to activate!</CardDescription>
      </Card>
    </div>
  </div>
)

export const MobileCardLayout = () => (
  <div className="max-w-[340px] p-2 bg-slate-100 rounded-xl">
    <span className="text-xs font-bold text-text-muted px-2 py-1 block">
      Mobile Viewport (340px) - Responsive Padding
    </span>
    <Card padding="sm" interactive className="mt-2">
      <CardHeader className="mb-2 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Executive Clean</CardTitle>
          <Badge size="sm" variant="cyan">Pro</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-xs text-text-muted">
          Optimized for small mobile viewports with tight padding and clear typography.
        </p>
      </CardBody>
      <CardFooter className="mt-3 pt-2">
        <Button fullWidth size="sm" rightIcon={<ArrowRight size={14} />}>
          Select
        </Button>
      </CardFooter>
    </Card>
  </div>
)
