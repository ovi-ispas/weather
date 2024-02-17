import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { cn } from '~ui/utils'

const metricVariants = cva(
  'ui-flex ui-w-fit ui-items-center ui-justify-center ui-gap-2',
  {
    variants: {
      labelPosition: {
        start: 'ui-flex-row',
        end: 'ui-flex-row-reverse',
        top: 'ui-flex-col',
        bottom: 'ui-flex-col-reverse',
      },
    },
    defaultVariants: {
      labelPosition: 'start',
    },
  }
)

const valueVariants = cva('ui-font-semibold', {
  variants: {
    variant: {
      default: 'ui-text-primary',
      secondary: 'ui-text-secondary-foreground',
      success: 'ui-text-success',
      warning: 'ui-text-warning',
      danger: 'ui-text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface MetricProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricVariants>,
    VariantProps<typeof valueVariants> {
  label: string
  value: ReactNode
  labelStyles?: string
}

const Metric = forwardRef<HTMLDivElement, MetricProps>(
  (
    {
      className,
      variant = 'default',
      label,
      value,
      labelPosition = 'start',
      labelStyles,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(metricVariants({ labelPosition, className }))}
      {...props}
    >
      <span className={cn('ui-text-muted-foreground', labelStyles)}>
        {label}
      </span>
      <span className={cn(valueVariants({ variant, className }))}>{value}</span>
    </div>
  )
)
Metric.displayName = 'Metric'

export { Metric }
