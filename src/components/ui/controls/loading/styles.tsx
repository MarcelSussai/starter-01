import styled, { keyframes } from 'styled-components'
import * as I from './interfaces'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  width: 100%;
  background: #8881;
  backdrop-filter: blur(4px);
	grid-column: 1 / -1;
  font-weight: 900;
  color: #666F;
`

export const ContainerAllLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 96px;
  height: 96px;

`
// var(--border-size-01)
const size = '88px'
export const ContainerLoading = styled.div`
  --border-size-01: 4px;
  --border-size-02: 1px;
  --border-size-03: 1px;
  --time-01: 3.2s;
  --time-02: 1.6s;
  --border-color-transparent: #0000;
  --border-color-01: #666F;
  --border-color-02: #666E;
  --border-color-03: #666D;
  --border-color-04: #666C;
  --border-color-05: #666B;
  --border-color-06: #666A;

  width: ${size};
  height: ${size};
  border-radius: ${size};
  border-left: solid var(--border-size-01) var(--border-color-01);
  border-top: solid var(--border-size-01) var(--border-color-transparent);
  border-right: solid var(--border-size-01) var(--border-color-transparent);
  border-bottom: solid var(--border-size-01) var(--border-color-transparent);
  animation: ${rotate} 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: content-box;
  div.circle-01 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 16px);
    height: calc(${size} - 16px);
    border-radius: ${size};
    /* background: #AAAA; */
    border-left: solid var(--border-size-03) var(--border-color-02);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1.6s linear reverse infinite;
  }
  div.circle-02 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 32px);
    height: calc(${size} - 32px);
    border-radius: ${size};
    /* background: #FFFFFF40; */
    border-left: solid var(--border-size-02) var(--border-color-03);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent);
    border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    animation: ${rotate} 3.2s linear infinite;
  }
  div.circle-03 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 48px);
    height: calc(${size} - 48px);
    border-radius: ${size};
    /* background: #99999918; */
    border-left: solid var(--border-size-03) var(--border-color-04);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1s linear reverse infinite;
  }
  div.circle-04 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 64px);
    height: calc(${size} - 64px);
    border-radius: ${size};
    /* background: #99999914; */
    border-left: solid var(--border-size-02) var(--border-color-05);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent);
    border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    animation: ${rotate} 2.4s linear infinite;
  }
  div.circle-05 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 80px);
    height: calc(${size} - 80px);
    border-radius: ${size};
    /* background: #9991; */
    border-left: solid var(--border-size-03) var(--border-color-06);
    border-bottom: solid var(--border-size-03) var(--border-color-06);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} .4s linear reverse infinite;
  }
`
