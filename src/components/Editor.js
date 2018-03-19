/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import { Controlled as CodeMirror } from 'react-codemirror2'
import TopBar from './TopBar'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/sass/sass'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/python/python'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: calc(100vw - 70px);
  min-height: 100vh;
  margin: auto;
  position: fixed;
  left: 70px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 80vw;
`

const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    z-index: 10;
    width: 100% !important;
    height: 90vh !important;
  }
`

type State = {|
  code: string,
  mode: string
|}

type Props = {|
  hideEditor: () => void
|}

class Editor extends React.Component<Props, State> {
  editor: *
  wrapper: *

  state = {
    code: '',
    mode: 'javascript'
  }

  componentDidMount() {
    ;(document: any).addEventListener('mousedown', this.handleClickOutside)
    ;(document: any).addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        this.props.hideEditor()
      }
    })
  }

  handleClickOutside = (event: SyntheticEvent<HTMLElement>) => {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.props.hideEditor()
    }
  }

  changeMode = (e: SyntheticEvent<HTMLSelectElement>) => {
    this.setState({ mode: e.currentTarget.value })
    this.editor.focus()
  }

  insertAsGist = async () => {
    const extensions = {
      javascript: 'js',
      css: 'css',
      sass: 'scss',
      htmlmixed: 'html',
      ruby: 'rb',
      python: 'py'
    }

    const data = {
      files: {
        [`code.${extensions[this.state.mode]}`]: {
          content: this.state.code
        }
      }
    }

    const request = {
      method: 'POST',
      body: JSON.stringify(data)
    }

    const response = await fetch('https://api.github.com/gists', request)
    const json = await response.json()
    const gistURL = json.html_url

    let chatBox = document.querySelector('.composer-inbox p')

    if (!chatBox) {
      return
    }

    chatBox.textContent = gistURL
    this.props.hideEditor()
  }

  insertAsText = () => {
    let chatBox = document.querySelector('.composer-inbox')

    if (!chatBox) {
      return
    }

    chatBox.innerHTML = `<pre class="code">${this.state.code}</pre>`
  }

  clearCode = () => {
    this.setState({ code: '' })
    this.editor.focus()
  }

  render() {
    return (
      <Backdrop>
        <Wrapper innerRef={wrapper => (this.wrapper = wrapper)}>
          <TopBar
            hideEditor={this.props.hideEditor}
            changeMode={this.changeMode}
            insertAsGist={this.insertAsGist}
            insertAsText={this.insertAsText}
            clearCode={this.clearCode}
          />
          <StyledCodeMirror
            value={this.state.code}
            options={{
              mode: this.state.mode,
              theme: 'material',
              lineNumbers: true
            }}
            onBeforeChange={(editor, data, code) => this.setState({ code })}
            editorDidMount={editor => {
              this.editor = editor
              editor.focus()
            }}
          />
        </Wrapper>
      </Backdrop>
    )
  }
}

export default Editor
