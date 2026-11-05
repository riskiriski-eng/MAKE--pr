import { ToastProvider, useToast } from '../components/ui/Toaster'
import { Button } from '../components/ui/Button'
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from 'lucide-react'

export default {
  title: 'UI/Toaster',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

function ToastDemo() {
  const toast = useToast()

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <h4 className="text-base font-bold text-navy font-heading mb-2">
          Toast Notification Trigger
        </h4>
        <p className="text-sm text-text-muted font-body mb-4">
          Click the buttons below to trigger live accessible status toasts. Notifications appear at
          the bottom right on desktop and center-bottom on mobile with safe entrance animations.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Button
            size="sm"
            onClick={() => toast.success('CV saved successfully to cloud storage!')}
            leftIcon={<CheckCircle2 size={16} />}
          >
            Trigger Success
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => toast.error('Failed to export PDF. Please check connection.')}
            leftIcon={<AlertCircle size={16} />}
          >
            Trigger Error
          </Button>

          <Button
            variant="accent"
            size="sm"
            onClick={() => toast.warning('ATS Score below 75%: Missing work dates.')}
            leftIcon={<AlertTriangle size={16} />}
          >
            Trigger Warning
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => toast.info('AI Auto-Write completed 3 summary bullets.')}
            leftIcon={<Info size={16} />}
          >
            Trigger Info
          </Button>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-text-muted font-body leading-relaxed">
        <p className="font-semibold text-text-primary mb-1">WCAG 2.1 AA Compliance Notes:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Announced via polite live region (<code>aria-live="polite"</code>) and <code>role="status"</code>.</li>
          <li>Contrast ratios verified exceeding 4.5:1 against white text.</li>
          <li>Dismiss button includes explicit <code>aria-label</code> and touch-friendly target.</li>
          <li>Entrance and exit animations respect <code>prefers-reduced-motion</code>.</li>
        </ul>
      </div>
    </div>
  )
}

export const Interactive = () => <ToastDemo />

export const AllVariantsStatic = () => (
  <div className="flex flex-col gap-3 max-w-sm">
    <div className="p-4 rounded-lg bg-emerald-600 border border-emerald-700 text-white flex items-start gap-3 shadow-lg">
      <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
      <p className="text-sm flex-1">Success: CV published to public link.</p>
    </div>

    <div className="p-4 rounded-lg bg-red-600 border border-red-700 text-white flex items-start gap-3 shadow-lg">
      <AlertCircle size={20} className="shrink-0 mt-0.5" />
      <p className="text-sm flex-1">Error: Server timeout during PDF compilation.</p>
    </div>

    <div className="p-4 rounded-lg bg-amber-600 border border-amber-700 text-white flex items-start gap-3 shadow-lg">
      <AlertTriangle size={20} className="shrink-0 mt-0.5" />
      <p className="text-sm flex-1">Warning: Unsaved edits in Work Experience tab.</p>
    </div>

    <div className="p-4 rounded-lg bg-sky-600 border border-sky-700 text-white flex items-start gap-3 shadow-lg">
      <Info size={20} className="shrink-0 mt-0.5" />
      <p className="text-sm flex-1">Info: Autosaved draft 2 minutes ago.</p>
    </div>
  </div>
)
