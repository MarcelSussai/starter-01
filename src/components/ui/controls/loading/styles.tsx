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
  padding: 8px;
  width: 100%;
  background: #AAA2;
	grid-column: 1 / -1;
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
export const ContainerLoading = styled.div`
  --border-size-01: 4px;
  --border-size-02: 1px;
  --border-size-03: 1px;
  --time-01: 3.2s;
  --time-02: 1.6s;
  --border-color-transparent: #0000;
  --border-color-01: #222;
  --border-color-02: #444;
  --border-color-03: #666;
  --border-color-04: #888;
  --border-color-05: #AAA;
  --border-color-06: #CCC;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* background: #6661; */
  border-left: solid var(--border-size-01) var(--border-color-01);
  border-top: solid var(--border-size-01) var(--border-color-transparent);
  /* border-bottom: solid var(--border-size-01) var(--border-color-transparent);
  border-right: solid var(--border-size-01) var(--border-color-transparent); */
  animation: ${rotate} 3.2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  div.circle-01 {
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: #6660;
    border-left: solid var(--border-size-03) var(--border-color-02);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1.6s linear reverse infinite;
  }
  div.circle-02 {
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: #6660;
    border-left: solid var(--border-size-02) var(--border-color-03);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    /* border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent); */
    animation: ${rotate} 3.2s linear infinite;
  }
  div.circle-03 {
    position: absolute;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background: #6660;
    border-left: solid var(--border-size-03) var(--border-color-04);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1.6s linear reverse infinite;
  }
  div.circle-04 {
    position: absolute;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background: #6660;
    border-left: solid var(--border-size-02) var(--border-color-05);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    /* border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent); */
    animation: ${rotate} 3.2s linear infinite;
  }
  div.circle-05 {
    position: absolute;
    width: 10%;
    height: 10%;
    border-radius: 50%;
    background: #6660;
    border-left: solid var(--border-size-03) var(--border-color-06);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1.6s linear reverse infinite;
  }
`
