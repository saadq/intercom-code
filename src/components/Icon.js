/**
 * @flow
 */

import * as React from 'react'
import { createPortal } from 'react-dom'

type Props = {|
  iconRoot: HTMLElement,
  showEditor: () => void
|}

function Icon({ iconRoot, showEditor }: Props) {
  return createPortal(
    <div
      onClick={showEditor}
      className="inbox__conversation-controls__inserter ember-view"
    >
      <div
        data-content="Insert a code snippet"
        className="inbox__conversation-controls__inserter-opener js__popover-opener js__overlay-opener ember-view"
      >
        <i id="code-icon" className="fas fa-code interface-icon o__standard" />
      </div>
    </div>,
    iconRoot
  )
}

export default Icon
