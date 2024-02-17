import { forwardRef, ReactNode } from 'react'

import { Skeleton } from '~ui/components/atoms/skeleton/skeleton'
import { Metric } from '~ui/index'
import { cn } from '~ui/utils'

interface TodayProps extends React.HTMLAttributes<HTMLDivElement> {
  temperature: string
  unit?: 'metric' | 'imperial'
  icon?: string
  range?: {
    min: string
    max: string
  }
  loading?: boolean
}

const Today = forwardRef<HTMLDivElement, TodayProps>(
  (
    {
      temperature,
      unit = 'metric',
      icon,
      range,
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    const measurementUnit = unit === 'metric' ? 'C' : 'F'
    return (
      <main
        data-testid="today"
        ref={ref}
        className={cn(
          'ui-flex ui-flex-col ui-items-center @xs:ui-flex-row @xs:ui-justify-between',
          { '@xs:!ui-justify-center': !range && !icon },
          className
        )}
        {...props}
      >
        <h2 className="ui-text-6xl ui-font-bold ui-tracking-tighter ui-text-primary">
          {loading ? (
            <Skeleton className="ui-inline-block ui-h-14 ui-w-14 !ui-rounded-full" />
          ) : (
            temperature
          )}
          °{measurementUnit}
        </h2>
        {icon &&
          (loading ? (
            <Skeleton className="ui-my-3 ui-inline-block ui-h-14 ui-w-14 !ui-rounded-full" />
          ) : (
            <img
              src={icon}
              alt="Today's Weather Icon"
              className="ui-h-20 ui-w-20 ui-object-cover ui-opacity-85 ui-brightness-125 ui-saturate-50"
            />
          ))}
        {range && (
          <TemperatureRange
            min={
              <>
                {loading ? (
                  <Skeleton className="ui-inline-block ui-h-6 ui-w-6 !ui-rounded-full" />
                ) : (
                  range.min
                )}
                °{measurementUnit}
              </>
            }
            max={
              <>
                {loading ? (
                  <Skeleton className="ui-inline-block ui-h-6 ui-w-6 !ui-rounded-full" />
                ) : (
                  range.max
                )}
                °{measurementUnit}
              </>
            }
          />
        )}
      </main>
    )
  }
)
Today.displayName = 'Today'

function TemperatureRange({ min, max }: { min: ReactNode; max: ReactNode }) {
  return (
    <div className="ui-flex ui-w-full ui-justify-evenly ui-text-lg @xs:ui-w-fit @xs:ui-flex-col @xs:ui-items-end @xs:ui-gap-1">
      <Metric
        label="Min"
        labelStyles="ui-uppercase ui-mt-2"
        value={min}
        labelPosition="top"
        className="@xs:ui-hidden"
      />
      <Metric
        label="Max"
        labelStyles="ui-uppercase ui-mt-2"
        value={max}
        labelPosition="top"
        className="@xs:ui-hidden"
      />
      <Metric
        label="Min"
        labelStyles="ui-uppercase ui-me-2"
        value={min}
        className="ui-hidden @xs:ui-flex"
      />
      <Metric
        label="Max"
        labelStyles="ui-uppercase ui-me-2"
        value={max}
        className="ui-hidden @xs:ui-flex"
      />
    </div>
  )
}

export { Today }
