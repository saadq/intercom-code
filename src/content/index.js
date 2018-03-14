/**
 * @flow
 */

import editor from './editor'

// Wait for intercom chat panel to load before appending the code icon
let interval = setInterval(() => {
  let iconContainerClass = '.js__conversation-controls-action-icons'
  let iconContainer = document.querySelector(iconContainerClass)

  if (iconContainer) {
    clearInterval(interval)
    appendCodeIcon(iconContainer)
  }
}, 200)

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
function appendCodeIcon(iconContainer: HTMLElement) {
  let controlsInserter = document.createElement('div')
  let controlsInserterClasses = [
    'inbox__conversation-controls__inserter',
    'ember-view'
  ]
  controlsInserter.classList.add(...controlsInserterClasses)
  controlsInserter.onclick = () => {
    editor.show()
  }

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
  controlsInserterOpener.appendChild(codeIcon)
  controlsInserter.appendChild(controlsInserterOpener)
  iconContainer.appendChild(controlsInserter)
}
