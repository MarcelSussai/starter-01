import styled from 'styled-components'

export const ContainerAllCheckbox = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2px;
  user-select: none;
  transition: all .3s ease-in-out;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  /* border: solid 1px #DDDF; */
  background: #F6F6F6F0;
  &:hover {
    background: #EEEF;

  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MarkCheck = styled.div`
  width: 100%;
  height: 100%;
  background: #AAAF;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`

interface IStyledCheckbox { checked?: boolean }
export const StyledCheckbox = styled.div<IStyledCheckbox>`
  --size: 20px;
  transition: all .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 6px;
  background: ${ ({checked}) => checked ? '#888F' : '#EEEF' };
  color: ${ ({checked}) => !checked ? '#6662' : '#DDDF' };
  font-size: 14px;
  font-weight: 900;
  line-height: 1;
  border: solid 1px ${ ({checked}) => !checked ? '#6662' : '#000F' };
`

interface IText { checked?: boolean }
export const Text = styled.span<IText>`
  font-size: 14px;
  transition: all .3s ease-in-out;
  line-height: 1;
  font-weight: 700;
  color: ${ ({checked}) => !checked ? '#666F' : '#222F' };
  padding: 0 6px;
`