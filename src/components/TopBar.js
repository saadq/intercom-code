/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'
import LoadingBar from './LoadingBar'

let Header = styled.header`
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

let Dropdown = styled.select`
  margin-left: 25px;
`

let CloseIcon = styled.div`
  margin-right: 25px;
  cursor: pointer;
`

type Props = {|
  isLoading: boolean,
  changeMode: (e: SyntheticEvent<HTMLSelectElement>) => void,
  hideEditor: () => void,
  createGist: () => Promise<void>,
  clearCode: () => void
|}

function TopBar({
  isLoading,
  changeMode,
  hideEditor,
  createGist,
  clearCode
}: Props) {
  return (
    <>
      <LoadingBar isLoading={isLoading} />
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
          <button onClick={createGist}>Insert as Gist</button>
          <button onClick={clearCode}>Clear Code</button>
        </div>
        <CloseIcon onClick={hideEditor}>
          <i className="fas fa-times-circle" />
        </CloseIcon>
      </Header>
    </>
  )
}

export default TopBar
