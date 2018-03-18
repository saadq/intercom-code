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

  if (codeIcon) {
    return
  }

  let icon = createCodeIcon()
  let editor = new Editor(createEditor())

  iconContainer.appendChild(icon)
  icon.onclick = () => editor.show()

  let iconWrapper: any = editor.container.querySelector('.icon-wrapper')
  iconWrapper.onclick = () => editor.hide()

  editor.container.onclick = event => {
    if (event.target.classList.contains('editor-container')) {
      editor.hide()
    }
  }

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      editor.hide()
    }
  })
}, 50)
