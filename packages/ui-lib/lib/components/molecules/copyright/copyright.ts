import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import * as React from 'react'

@customElement('copyright-element')
export class CopyrightElement extends LitElement {
  @property() author = 'author'

  render() {
    return html`<span>Copyright © 2024 by ${this.author}.</span>`
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'copyright-element': React.DetailedHTMLProps<
        React.HTMLAttributes<CopyrightElement>,
        CopyrightElement
      > & { author?: string }
    }
  }
}
