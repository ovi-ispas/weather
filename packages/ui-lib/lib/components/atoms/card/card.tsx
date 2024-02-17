import * as React from 'react'

import { cn } from '~ui/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ui-rounded-md ui-bg-card ui-p-6 ui-text-card-foreground ui-shadow dark:ui-border',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

export { Card }
