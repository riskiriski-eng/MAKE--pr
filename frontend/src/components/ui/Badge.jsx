import { clsx } from 'clsx'
import { X } from 'lucide-react'

/**
 * Badge / Status Indicator Component - PortoCraft Design System
 *
 * Design Spec (design-system.md Section 4):
 *   - Used for ATS Score Pills, Tags, Statuses, and Filters
 *   - WCAG AA verified color contrast
 *   - Safe hover micro-interactions with prefers-reduced-motion support
 *   - Variants:
 *       primary -> Navy badge
 *       cyan    -> Cyan accent badge
 *       orange  -> Orange accent badge
 *       success -> ATS Score high (>85) / Saved status
 *       warning -> ATS Score medium (70-84) / Warning
 *       error   -> ATS critical (<70) / Validation issue
 *       neutral -> Subtle slate tag
 */

export function Badge({
  variant = 'neutral',
  size = 'default',
  dot = false,
  icon,
  interactive = false,
  onRemove,
  onClick,
  className,
  children,
  ...props
}) {
  const isClickable = interactive || Boolean(onClick)

  const variantClasses = {
    primary: 'bg-navy/10 text-navy border-navy/20 hover:bg-navy/15',
    cyan:    'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100',
    orange:  'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100',
    warning: 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100',
    error:   'bg-red-50 text-red-800 border-red-200 hover:bg-red-100',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200',
  }[variant] ?? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'

  const dotClasses = {
    primary: 'bg-navy',
    cyan:    'bg-cyan',
    orange:  'bg-orange',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error:   'bg-red-500',
    neutral: 'bg-slate-400',
  }[variant] ?? 'bg-slate-400'

  const sizeClasses = {
    sm:      'text-xs px-2 py-0.5 gap-1 font-medium',
    default: 'text-xs sm:text-sm px-2.5 py-1 gap-1.5 font-semibold',
    lg:      'text-sm sm:text-base px-3 py-1.5 gap-2 font-semibold',
  }[size] ?? 'text-xs sm:text-sm px-2.5 py-1 gap-1.5 font-semibold'

  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center rounded-full border font-body select-none transition-all duration-150',
        variantClasses,
        sizeClasses,
        isClickable && [
          'cursor-pointer hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-1',
          'motion-reduce:transform-none motion-reduce:transition-none',
        ],
        className
      )}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick?.(e)
              }
            }
          : undefined
      }
      {...props}
    >
      {dot && (
        <span
          className={clsx('w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-150', dotClasses)}
          aria-hidden="true"
        />
      )}
      {icon && (
        <span className="shrink-0 flex items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove(e)
          }}
          className="ml-0.5 -mr-1 p-0.5 rounded-full hover:bg-black/10 active:bg-black/20 focus:outline-none focus:ring-1 focus:ring-current transition-colors cursor-pointer inline-flex items-center justify-center"
          aria-label="Remove item"
        >
          <X size={13} aria-hidden="true" />
        </button>
      )}
    </span>
  )
}

export default Badge
