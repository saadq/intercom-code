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
  hideEditor: boolean
|}

class App extends React.Component<Props, State> {
  state = {
    hideEditor: true
  }

  showEditor = () => {
    this.setState({ hideEditor: false })
  }

  hideEditor = () => {
    this.setState({ hideEditor: true })
  }

  render() {
    return (
      <>
        <Editor hideEditor={this.hideEditor} hidden={this.state.hideEditor} />
        <Icon showEditor={this.showEditor} iconRoot={this.props.iconRoot} />
      </>
    )
  }
}

export default App
