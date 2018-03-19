/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/sass/sass'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/python/python'
import 'codemirror/lib/codemirror.css'
import TopBar from './TopBar'

type StyleProps = {|
  hidden: boolean
|}

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: calc(100vw - 70px);
  min-height: 100vh;
  margin: auto;
  position: fixed;
  left: 70px;
  z-index: 10;
  display: ${(props: StyleProps) => (props.hidden ? 'none' : 'flex')};
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
  hidden: boolean,
  hideEditor: () => void
|}

class Editor extends React.Component<Props, State> {
  wrapper: *

  state = {
    code: '',
    mode: 'javascript'
  }

  componentDidMount() {
    ;(document: any).addEventListener('mousedown', this.handleClickOutside)
    ;(document: any).addEventListener('keydown', (e: KeyboardEvent) => {
      const escKey = 27
      if (e.keyCode === escKey) {
        this.props.hideEditor()
      }
    })
  }

  handleClickOutside = (event: SyntheticEvent<HTMLElement>) => {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.props.hideEditor()
    }
  }

  updateCode = (newCode: string) => {
    this.setState({ code: newCode })
  }

  changeMode = (e: SyntheticEvent<HTMLSelectElement>) => {
    this.setState({ mode: e.currentTarget.value })
  }

  render() {
    return (
      <Backdrop hidden={this.props.hidden}>
        <Wrapper innerRef={wrapper => (this.wrapper = wrapper)}>
          <TopBar
            hideEditor={this.props.hideEditor}
            changeMode={this.changeMode}
          />
          <StyledCodeMirror
            id="codemirror"
            options={{
              mode: this.state.mode,
              lineNumbers: true
            }}
            autoFocus
            onChange={this.updateCode}
            value={this.state.code}
          />
        </Wrapper>
      </Backdrop>
    )
  }
}

export default Editor
