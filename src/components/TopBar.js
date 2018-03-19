/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 30px;
  padding: 10px 0;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  margin-left: 25px;

  * {
    margin-right: 15px;
  }
`

const CloseIcon = styled.div`
  margin-right: 25px;
`

type Props = {|
  changeMode: (e: SyntheticEvent<HTMLSelectElement>) => void,
  hideEditor: () => void
|}

function TopBar({ changeMode, hideEditor }: Props) {
  return (
    <Header>
      <Left>
        <select onChange={changeMode}>
          <option value="javascript">JavaScript</option>
          <option value="htmlmixed">HTML</option>
          <option value="css">CSS</option>
          <option value="sass">Sass</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
        </select>
        <button>Insert as Text</button>
        <button>Insert as Gist</button>
      </Left>
      <CloseIcon onClick={hideEditor}>
        <i className="fas fa-times-circle" />
      </CloseIcon>
    </Header>
  )
}

export default TopBar
