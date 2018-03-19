/**
 * @flow
 */

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

/**
 * Interval needs to run forever in case page switches
 * and code icon needs to be readded
 */

setInterval(() => {
  let controls = document.querySelector('.u__left.js__conversation-controls-action-icons')

  if (!controls) {
    return
  }

  let codeIcon = controls.querySelector('#code-icon')

  if (codeIcon) {
    return
  }

  const root = document.createElement('div')
  document.body && document.body.appendChild(root)

  render(<App iconRoot={controls} />, root)
}, 50)
