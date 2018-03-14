/**
 * @flow
 */

type Settings = {
  codemirror: Object,
  container: HTMLElement
}

class Editor {
  hidden: boolean
  codemirror: Object
  container: HTMLElement

  constructor({ codemirror, container }: Settings) {
    this.hidden = true
    this.codemirror = codemirror
    this.container = container
  }

  show() {
    if (this.hidden === false) {
      return
    }

    this.container.classList.toggle('hidden')
    this.codemirror.refresh()
    this.codemirror.focus()
    this.hidden = false
  }

  hide() {
    if (this.hidden === true) {
      return
    }

    this.container.classList.toggle('hidden')
    this.codemirror.refresh()
    this.hidden = true
  }
}

export default Editor
