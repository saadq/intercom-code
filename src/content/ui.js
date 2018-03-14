/**
 * @flow
 */

declare var CodeMirror: Object

/**
 * Adds a new code icon to the chat window
 *
 * Intercom has a structure like this for each icon:
 *
 * <div class="inbox__conversation-controls__inserter ember-view">
 *   <div class="inbox__conversation-controls__inserter-opener js__popover-opener js__overlay-opener ember-view">
 *     <!-- icon element goes here -->
 *   </div>
 * </div>
 */
function createCodeIcon() {
  // Create conversation-controls__inserter
  let controlsInserter = document.createElement('div')
  let controlsInserterClasses = [
    'inbox__conversation-controls__inserter',
    'ember-view'
  ]
  controlsInserter.classList.add(...controlsInserterClasses)

  // Create conversation-controls__inserter-opener
  let controlsInserterOpener = document.createElement('div')
  let controlsInserterOpenerClasses = [
    'inbox__conversation-controls__inserter-opener',
    'js__popover-opener',
    'js__overlay-opener',
    'ember-view'
  ]

  controlsInserterOpener.dataset.content = 'Insert a code snippet'
  controlsInserterOpener.classList.add(...controlsInserterOpenerClasses)

  // Create the code icon
  let codeIcon = document.createElement('i')
  let codeIconClasses = ['fas', 'fa-code', 'interface-icon', 'o__standard']
  codeIcon.style.width = '16px'
  codeIcon.style.height = '16px'
  codeIcon.classList.add(...codeIconClasses)

  // Connect all our dynamically created elements together
  controlsInserter.appendChild(controlsInserterOpener)
  controlsInserterOpener.appendChild(codeIcon)

  return controlsInserter
}

/**
 * Creates the topbar for the editor
 *
 * The topbar has a structure like so:
 *
 * <div class="editor-topbar">
 *   <div class="editor-buttons">
 *     <button>Insert as Text</button>
 *     <button>Insert as Gist</button>
 *   </div>
 *   <i class="fas fa-times-circle" />
 * </div>
 */
function createTopBar() {
  // Make topbar
  let topBar = document.createElement('div')
  topBar.classList.add('editor-topbar')

  // Make editor-buttons container
  let editorButtons = document.createElement('div')
  editorButtons.classList.add('editor-buttons')

  // Make 'Insert as text' button
  let insertTextBtn = document.createElement('button')
  insertTextBtn.textContent = 'Insert as text'

  // Make 'Insert as Gist' button
  let insertGistBtn = document.createElement('button')
  insertGistBtn.textContent = 'Insert as Gist'
  insertGistBtn.classList.add('editor-button')

  // Make the close icon
  let closeIcon = document.createElement('i')
  closeIcon.classList.add('fas', 'fa-times-circle')

  topBar.appendChild(editorButtons)
  editorButtons.appendChild(insertTextBtn)
  editorButtons.appendChild(insertGistBtn)
  topBar.appendChild(closeIcon)

  return topBar
}

/**
 * Creates the CodeMirror code editor
 *
 * The structure looks like this:
 *
 * <div class="editor-container">
 *   <textarea>
 *     ...
 *   </textarea>
 * </div>
 */
function createEditor() {
  let container = document.createElement('div')
  let topBar = createTopBar()
  let editorTextArea = document.createElement('textarea')

  container.classList.add('editor-container', 'hidden')
  ;(document.body: any).appendChild(container)
  container.appendChild(topBar)
  container.appendChild(editorTextArea)

  let codemirror = CodeMirror.fromTextArea(editorTextArea, {
    lineNumbers: true,
    viewportMargin: Infinity,
    mode: 'javascript',
    autofocus: true
  })

  return { codemirror, container }
}

export { createTopBar, createCodeIcon, createEditor }
