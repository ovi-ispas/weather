import * as React from 'react'

import { cn } from '~ui/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ui-animate-pulse ui-rounded-md ui-bg-secondary-foreground/15',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
