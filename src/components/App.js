/**
 * @flow
 */

import * as React from 'react'
import Editor from './Editor'
import Icon from './Icon'

type Props = {|
  iconRoot: HTMLElement
|}

type State = {|
  editorIsHidden: boolean
|}

class App extends React.Component<Props, State> {
  state = {
    editorIsHidden: false
  }

  showEditor = () => {
    this.setState({ editorIsHidden: false })
  }

  hideEditor = () => {
    this.setState({ editorIsHidden: true })
  }

  render() {
    return (
      <>
        {!this.state.editorIsHidden && <Editor hideEditor={this.hideEditor} />}
        <Icon showEditor={this.showEditor} iconRoot={this.props.iconRoot} />
      </>
    )
  }
}

export default App
