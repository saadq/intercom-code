/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 30px;
  padding: 10px 0;
  background: #212b30;
  color: white;
  border-bottom: 1px solid #151b1f;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Dropdown = styled.select`
  margin-left: 25px;
`

const CloseIcon = styled.div`
  margin-right: 25px;
`

type Props = {|
  changeMode: (e: SyntheticEvent<HTMLSelectElement>) => void,
  hideEditor: () => void,
  insertAsText: () => void,
  insertAsGist: () => Promise<void>,
  clearCode: () => void
|}

function TopBar({
  changeMode,
  hideEditor,
  insertAsText,
  insertAsGist,
  clearCode
}: Props) {
  return (
    <Header>
      <Dropdown onChange={changeMode}>
        <option value="javascript">JavaScript</option>
        <option value="htmlmixed">HTML</option>
        <option value="css">CSS</option>
        <option value="sass">Sass</option>
        <option value="python">Python</option>
        <option value="ruby">Ruby</option>
      </Dropdown>
      <div>
        <button>Insert as Text</button>
        <button onClick={insertAsGist}>Insert as Gist</button>
        <button onClick={clearCode}>Clear Code</button>
      </div>
      <CloseIcon onClick={hideEditor}>
        <i className="fas fa-times-circle" />
      </CloseIcon>
    </Header>
  )
}

export default TopBar
