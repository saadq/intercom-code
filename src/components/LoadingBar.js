/**
 * @flow
 */

import * as React from 'react'
import styled, { keyframes } from 'styled-components'

let animations = {
  indeterminate: keyframes`
    0% {
      left: -35%;
      right: 100%;
    }

    60% {
      left: 100%;
      right: -90%;
    }

    100% {
      left: 100%;
      right: -90%;
    }
  `,

  indeterminateShort: keyframes`
    0% {
      left: -200%;
      right: 100%;
    }

    60% {
      left: 107%;
      right: -8%;
    }

    100% {
      left: 107%;
      right: -8%;
    }
  `
}

let OuterBar = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 4px;
  display: block;
  background: #16191b;
  overflow: hidden;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 0.7s ease-in-out;
`

let InnerBar = styled.div`
  width: 50%;
  background: #ddd;

  &:before {
    content: '';
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${animations.indeterminate} 2.1s
      cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${animations.indeterminateShort} 2.1s
      cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`

type Props = {|
  isLoading: boolean
|}

function LoadingBar({ isLoading }: Props) {
  return (
    <OuterBar isLoading={isLoading}>
      <InnerBar />
    </OuterBar>
  )
}

export default LoadingBar
