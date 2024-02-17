import * as React from 'react'

import { cn } from '~ui/utils'

import { Card } from '../../atoms/card/card'
import { ScrollArea } from '../../atoms/scroll-area/scroll-area'
import { Skeleton } from '../../atoms/skeleton/skeleton'

interface ValuesProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    day: React.ReactNode
    time: React.ReactNode
    icon: string
    range: {
      min: React.ReactNode
      max: React.ReactNode
    }
  }[]
  loading?: boolean
}

const Forecast = React.forwardRef<HTMLDivElement, ValuesProps>(
  ({ className, data, loading = false, ...props }, ref) => {
    const DayForecastsList = data.map(({ day, time, icon, range }, index) => (
      <li key={index}>
        <Card>
          <DayForecast
            day={day}
            time={time}
            icon={icon}
            range={range}
            className="ui-w-20"
            loading={loading}
          />
        </Card>
      </li>
    ))

    return (
      <section
        data-testid="forecast"
        ref={ref}
        className={cn(' uii-shadow-sm', className)}
        {...props}
      >
        <ScrollArea scrollBarVisibility="always" scrollBars="horizontal">
          <ul className="ui-inline-flex ui-w-fit ui-gap-4 ui-pb-4">
            {DayForecastsList}
          </ul>
        </ScrollArea>
      </section>
    )
  }
)
Forecast.displayName = 'Forecast'

export { Forecast }

function DayForecast({
  day,
  time,
  icon,
  range,
  loading = false,
  className,
}: {
  day: React.ReactNode
  time: React.ReactNode
  icon: string
  range: {
    min: React.ReactNode
    max: React.ReactNode
  }
  loading?: boolean
  className?: string
}) {
  return (
    <article className={cn('ui-flex ui-flex-col ui-items-center', className)}>
      <h3>
        {loading ? <Skeleton className="ui-inline-block ui-h-3 ui-w-8" /> : day}
      </h3>
      <time className="ui-text-xs ui-text-muted-foreground">
        {loading ? (
          <Skeleton className="ui-inline-block ui-h-2 ui-w-6" />
        ) : (
          time
        )}
      </time>

      {loading ? (
        <Skeleton className="ui-mb-3 ui-mt-3 ui-inline-block ui-h-8 ui-w-8 !ui-rounded-full" />
      ) : (
        <img
          src={icon}
          alt="Today's Weather Icon"
          className="ui-h-14 ui-w-14 ui-opacity-85 ui-brightness-125 ui-saturate-50"
        />
      )}

      <p className="ui-font-semibold">
        {loading ? (
          <Skeleton className="ui-inline-block ui-h-3 ui-w-6" />
        ) : (
          range.min
        )}
        °~
        {loading ? (
          <Skeleton className="ui-inline-block ui-h-3 ui-w-6" />
        ) : (
          range.max
        )}
        °
      </p>
    </article>
  )
}
