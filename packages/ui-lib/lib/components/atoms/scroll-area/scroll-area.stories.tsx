import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from './scroll-area'

const meta = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  args: {
    className: 'ui-h-96  ui-rounded-md ui-border',
    children: <Content />,
  },
} satisfies Meta<typeof ScrollArea>

function Content() {
  return (
    <div className="ui-whitespace-nowrap ui-p-4">
      <p className="ui-mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
        velit ut risus bibendum, id fringilla sem feugiat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nullam tempus velit ut risus
        bibendum, id fringilla sem feugiat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam tempus velit ut risus bibendum, id
        fringilla sem feugiat.
      </p>
      <p className="ui-mb-4">
        Integer posuere aliquam felis at suscipit. Sed at auctor libero.
        Vestibulum dictum sit amet dolor at interdum. Integer posuere aliquam
        felis at suscipit. Sed at auctor libero. Vestibulum dictum sit amet
        dolor at interdum. Integer posuere aliquam felis at suscipit. Sed at
        auctor libero. Vestibulum dictum sit amet dolor at interdum.
      </p>
      <p className="ui-mb-4">
        Cras orci tellus, rutrum ut turpis at, ullamcorper volutpat justo. Proin
        id vestibulum felis. Cras orci tellus, rutrum ut turpis at, ullamcorper
        volutpat justo. Proin id vestibulum felis. Cras orci tellus, rutrum ut
        turpis at, ullamcorper volutpat justo. Proin id vestibulum felis.
      </p>
      <p className="ui-mb-4">
        Nam tempor quam ut ullamcorper venenatis. Aenean cursus faucibus luctus.
        Nam tempor quam ut ullamcorper venenatis. Aenean cursus faucibus luctus.
        Nam tempor quam ut ullamcorper venenatis. Aenean cursus faucibus luctus.{' '}
      </p>
      <p className="ui-mb-4">
        Curabitur lacus felis, sodales ac consequat et, ultricies mattis mi.
        Vestibulum fringilla iaculis varius. Curabitur lacus felis, sodales ac
        consequat et, ultricies mattis mi. Vestibulum fringilla iaculis varius.
        Curabitur lacus felis, sodales ac consequat et, ultricies mattis mi.
        Vestibulum fringilla iaculis varius.
      </p>
      <p className="ui-mb-4">
        Proin aliquam dignissim leo, sit amet congue elit mattis ac. Suspendisse
        eu nisi purus. Proin aliquam dignissim leo, sit amet congue elit mattis
        ac. Suspendisse eu nisi purus. Proin aliquam dignissim leo, sit amet
        congue elit mattis ac. Suspendisse eu nisi purus.
      </p>
      <p className="ui-mb-4">
        Maecenas mollis erat massa, sed fringilla odio maximus ut. Integer
        tristique augue massa, nec posuere odio interdum nec. Maecenas mollis
        erat massa, sed fringilla odio maximus ut. Integer tristique augue
        massa, nec posuere odio interdum nec. Maecenas mollis erat massa, sed
        fringilla odio maximus ut. Integer tristique augue massa, nec posuere
        odio interdum nec.
      </p>
      <p className="ui-mb-4">
        Aenean posuere vitae erat at vestibulum. Proin quis faucibus sem. Etiam
        at neque eget augue molestie mollis. Aenean posuere vitae erat at
        vestibulum. Proin quis faucibus sem. Etiam at neque eget augue molestie
        mollis. Aenean posuere vitae erat at vestibulum. Proin quis faucibus
        sem. Etiam at neque eget augue molestie mollis.
      </p>
      <p className="ui-mb-4">
        Suspendisse potenti. Curabitur et condimentum mi. Etiam eget pretium
        mauris. Etiam quis pellentesque risus, ut congue neque. Suspendisse
        potenti. Curabitur et condimentum mi. Etiam eget pretium mauris. Etiam
        quis pellentesque risus, ut congue neque. Suspendisse potenti. Curabitur
        et condimentum mi. Etiam eget pretium mauris. Etiam quis pellentesque
        risus, ut congue neque.
      </p>
      <p className="ui-mb-4">
        Vivamus fringilla efficitur enim, nec condimentum leo commodo sed. Sed
        scelerisque nibh vitae blandit fringilla. Vivamus fringilla efficitur
        enim, nec condimentum leo commodo sed. Sed scelerisque nibh vitae
        blandit fringilla. Vivamus fringilla efficitur enim, nec condimentum leo
        commodo sed. Sed scelerisque nibh vitae blandit fringilla.
      </p>
    </div>
  )
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ScrollBarsAlways: Story = {
  args: {
    scrollBarVisibility: 'always',
  },
}

export const ScrollBarsAuto: Story = {
  args: {
    scrollBarVisibility: 'auto',
  },
}

export const ScrollBarVertical: Story = {
  args: {
    scrollBars: 'vertical',
  },
}

export const ScrollBarHorizontal: Story = {
  args: {
    scrollBars: 'horizontal',
  },
}

export const ScrollBarsNone: Story = {
  args: {
    scrollBars: 'none',
  },
}

export const ScrollBarsBoth: Story = {
  args: {
    scrollBars: 'both',
  },
}
