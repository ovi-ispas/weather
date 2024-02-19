import { forwardRef } from 'react'

import { Skeleton } from '~ui/index'
import { cn } from '~ui/utils'

import { Card } from '../../atoms/card/card'
import { Today } from '../../molecules/today/today'
import { Values } from '../../molecules/values/values'

interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: {
    city: string
    temperature: number
    description: string
    icon: string
    range: { min: number; max: number }
    wind: string
    humidity: number
    sunrise: string
    sunset: string
  }
  unit?: 'metric' | 'imperial'
  showValues?: boolean
  loading?: boolean
}

const Widget = forwardRef<HTMLDivElement, WidgetProps>(
  (
    {
      className,
      data,
      unit = 'metric',
      showValues = true,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const {
      city,
      temperature,
      description,
      icon,
      range: { min, max },
      wind,
      humidity,
      sunrise,
      sunset,
    } = data ?? { range: { min: '', max: '' } }
    return (
      <div
        ref={ref}
        className={cn('ui-flex ui-flex-col ui-gap-4', className)}
        {...props}
      >
        <header className="ui-mb-4 ui-text-center">
          <h1 className="ui-mb-2 ui-text-2xl ui-font-semibold ui-uppercase ui-text-primary">
            {city}
          </h1>
          <p className="ui-text-muted-foreground">
            {loading ? (
              <Skeleton className="ui-mx-auto ui-mt-4 ui-h-4 ui-w-20" />
            ) : (
              description
            )}
          </p>
        </header>
        <Card className="ui-mb-4">
          <Today
            temperature={String(temperature)}
            icon={icon}
            range={{ min: String(min), max: String(max) }}
            unit={unit}
            loading={loading}
          />
        </Card>
        {showValues && (
          <Values
            className="ui-mb-4"
            data={{
              wind,
              humidity,
              sunrise,
              sunset,
            }}
            loading={loading}
          />
        )}
        {children}
      </div>
    )
  }
)
Widget.displayName = 'Widget'

export { Widget }
