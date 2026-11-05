import { useState } from 'react'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { FormField, Input } from '../components/ui/Input'

export default {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export const Interactive = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('default')

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => { setSize('default'); setIsOpen(true) }}>Open Default Modal</Button>
        <Button variant="accent" onClick={() => { setSize('lg'); setIsOpen(true) }}>Open AI Modal (Large)</Button>
        <Button variant="secondary" onClick={() => { setSize('sm'); setIsOpen(true) }}>Open Alert Modal (Small)</Button>
      </div>

      <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg max-w-lg text-xs text-text-muted">
        <strong>Phase 3 Polish:</strong> On mobile screens, modal applies responsive <code>p-5 sm:p-7</code> padding,
        fluid widths, touch-scrolling content body, and a 44x44px close button with subtle 90° hover rotation micro-interaction.
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={size === 'lg' ? 'AI Auto-Write CV Assistant' : size === 'sm' ? 'Confirm Deletion' : 'Confirm Action'}
        description={size === 'lg' ? 'Provide a job title or bullet point to generate ATS-friendly text.' : size === 'sm' ? 'This action cannot be undone.' : 'Are you sure you want to proceed with this update?'}
        size={size}
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant={size === 'sm' ? 'danger' : 'primary'} onClick={() => setIsOpen(false)}>
              {size === 'sm' ? 'Delete Permanently' : 'Confirm & Save'}
            </Button>
          </>
        }
      >
        <div className="py-2 flex flex-col gap-4">
          {size !== 'sm' && (
            <FormField label="Target Job Title">
              <Input placeholder="e.g. Full Stack Developer" />
            </FormField>
          )}
          <p className="text-sm text-text-muted">
            Focus trap test: Try pressing Tab and Shift+Tab. Notice how focus remains trapped inside the modal, and pressing Escape closes it!
          </p>
        </div>
      </Modal>
    </div>
  )
}
