/**
 * @flow
 */

declare var CodeMirror: Object
declare var document: Object

let container = document.createElement('div')
let editorTextArea = document.createElement('textarea')

container.classList.add('editor-container', 'hidden')

container.onclick = e => {
  if (e.target.classList.contains('editor-container')) {
    editor.hide()
    codemirror.refresh()
  }
}

document.body.appendChild(container)
container.appendChild(makeTopBar())
container.appendChild(editorTextArea)

let codemirror = CodeMirror.fromTextArea(editorTextArea, {
  lineNumbers: true,
  viewportMargin: Infinity,
  mode: 'javascript',
  autofocus: true
})

codemirror.refresh()

let editor = {
  hidden: true,

  show() {
    if (this.hidden === false) {
      return
    }

    this.hidden = false
    container.classList.toggle('hidden')
    codemirror.refresh()
    codemirror.focus()
  },

  hide() {
    if (this.hidden === true) {
      return
    }

    this.hidden = true
    container.classList.toggle('hidden')
    codemirror.refresh()
  }
}

function makeTopBar() {
  let topBar = document.createElement('div')
  topBar.classList.add('editor-topbar')
  return topBar
}

export default editor
