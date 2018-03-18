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

  let editor = new Editor(createEditor())

  let icon = createCodeIcon()
  iconContainer.appendChild(icon)
  icon.onclick = () => editor.show()

  let iconWrapper: any = editor.container.querySelector('.icon-wrapper')
  iconWrapper.onclick = () => editor.hide()

  editor.container.addEventListener('click', (e: MouseEvent) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains('editor-container')
    ) {
      editor.hide()
    }
  })

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      editor.hide()
    }
  })

  let dropdown: any = document.querySelector('select')

  dropdown.addEventListener('change', (e: Event) => {
    if (e.target instanceof HTMLSelectElement) {
      let lang = e.target.value
      editor.codemirror.setOption('mode', lang)
    }
  })

}, 50)
