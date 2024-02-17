import { forwardRef } from 'react'

import { cn } from '~ui/utils'

import { Card } from '../../atoms/card/card'
import { Metric } from '../../atoms/metric/metric'
import { Skeleton } from '../../atoms/skeleton/skeleton'

interface ValuesProps extends React.HTMLAttributes<HTMLUListElement> {
  data: Record<string, React.ReactNode>
  loading?: boolean
}

const Values = forwardRef<HTMLUListElement, ValuesProps>(
  ({ className, data, loading = false, ...props }, ref) => {
    const ValuesList = Object.entries(data).map(([label, value]) => (
      <li key={label}>
        <Card className="ui-rounded-[6px] ui-px-2 ui-py-1">
          <Metric
            variant="secondary"
            label={label.toUpperCase()}
            value={
              loading ? (
                <Skeleton className="ui-inline-block ui-h-4 ui-w-16" />
              ) : (
                value
              )
            }
          />
        </Card>
      </li>
    ))
    return (
      <ul
        data-testid="values"
        ref={ref}
        className={cn(
          'ui-grid ui-grid-cols-1 ui-gap-4 @lg:ui-grid-cols-2 @2xl:ui-grid-cols-4',
          className
        )}
        {...props}
      >
        {ValuesList}
      </ul>
    )
  }
)
Values.displayName = 'Values'

export { Values }
