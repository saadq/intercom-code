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

  // Show editor when code icon is clicked
  let icon = createCodeIcon()
  iconContainer.appendChild(icon)
  icon.onclick = () => editor.show()

  // Close editor when closeIcon is clicked
  let closeIcon: HTMLDivElement = (editor.container.querySelector('.icon-wrapper'): any)
  closeIcon.onclick = () => editor.hide()

  // Close editor when anywhere outside editor is clicked
  editor.container.addEventListener('click', (e: MouseEvent) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains('editor-container')
    ) {
      editor.hide()
    }
  })

  // Close editor when escape key is pressed
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      editor.hide()
    }
  })

  // Change language mode when dropdown value is changed
  let dropdown: HTMLSelectElement = (document.querySelector('select'): any)

  dropdown.addEventListener('change', (e: Event) => {
    if (e.target instanceof HTMLSelectElement) {
      let lang = e.target.value
      editor.codemirror.setOption('mode', lang)
    }
  })

  let gistBtn: HTMLButtonElement = (document.querySelector('#gist-btn'): any)

  gistBtn.addEventListener('click', async (e: MouseEvent) => {
    let code = editor.getCode()
    await createGist(code)
  })
}, 50)

/**
 * Creates a Gist with the given code
 */
async function createGist(code: string) {
  console.log(code)
}
