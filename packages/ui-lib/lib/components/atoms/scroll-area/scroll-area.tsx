import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'

import { cn } from '~ui/utils'

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  scrollBars?: 'vertical' | 'horizontal' | 'both' | 'none'
  scrollBarVisibility?: 'auto' | 'always' | 'scroll' | 'hover'
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    {
      scrollBars = 'both',
      scrollBarVisibility = 'hover',
      className,
      children,
      ...props
    },
    ref
  ) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('ui-relative ui-overflow-hidden', className)}
      type={scrollBarVisibility}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="ui-h-full ui-w-full ui-rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      {['horizontal', 'both'].includes(scrollBars) && (
        <ScrollBar orientation="horizontal" />
      )}
      {['vertical', 'both'].includes(scrollBars) && (
        <ScrollBar orientation="vertical" />
      )}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'ui-flex ui-touch-none ui-select-none ui-transition-colors',
      orientation === 'vertical' &&
        'uui-bg-green-500 ui-h-full ui-w-2.5 ui-border-l ui-border-l-transparent ui-p-[1px]',
      orientation === 'horizontal' &&
        'uui-bg-green-500 ui-h-2.5 ui-flex-col ui-border-t ui-border-t-transparent ui-p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="ui-relative ui-flex-1 ui-rounded-full ui-bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
