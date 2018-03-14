/**
 * @flow
 */

import Editor from './Editor'
import { createCodeIcon, createEditor } from './ui'

/**
 * Interval needs to run forever in case page switches
 * and code icon needs to be added again
 */
setInterval(() => {
  let iconContainerClass = '.js__conversation-controls-action-icons'
  let iconContainer = document.querySelector(iconContainerClass)

  if (!iconContainer) {
    return
  }

  let codeIcon = iconContainer.querySelector('.fa-code')

  if (!codeIcon) {
    let icon = createCodeIcon()
    let editor = new Editor(createEditor())

    iconContainer.appendChild(icon)
    icon.onclick = () => editor.show()
  }
}, 50)
