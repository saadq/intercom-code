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
  margin: 0 25px;
  padding: 10px 0;
  height: 30px;
  min-width: 125px;
  border: none;
  background: #16191b;
  color: #ddd;
  outline: none;
`

const Button = styled.button`
  background: #16191b;
  color: #ddd;
  border: none;
  border-radius: 5px;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 25px;
  padding: 10px 15px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0f1112;
  }
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
        <div>
          <Dropdown onChange={changeMode}>
            <option value="javascript">JavaScript</option>
            <option value="htmlmixed">HTML</option>
            <option value="css">CSS</option>
            <option value="sass">Sass</option>
            <option value="python">Python</option>
            <option value="ruby">Ruby</option>
          </Dropdown>
          <Button onClick={clearCode}>Clear Code</Button>
          <Button onClick={createGist}>Create Gist</Button>
        </div>
        <CloseIcon onClick={hideEditor}>
          <i className="fas fa-times-circle" />
        </CloseIcon>
      </Header>
    </>
  )
}

export default TopBar
