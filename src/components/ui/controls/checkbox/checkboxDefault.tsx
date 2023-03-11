import { useState } from 'react'
import * as S from './styles'


interface ICheckboxDefault {
  text?: string
  hideText?: boolean
}
export default function CheckboxDefault({
  text = 'Example of checkbox', hideText = false
}: ICheckboxDefault) {

  const [check, setCheck] = useState(false)
  const handleCheck = () => setCheck(check => !check)

  return (
    <S.ContainerAllCheckbox>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={check} onChange={handleCheck} />
        <S.StyledCheckbox checked={check}>{'✔'}</S.StyledCheckbox>
      </S.CheckboxContainer>
      { !hideText && <S.Text checked={check}>{text}</S.Text> }
    </S.ContainerAllCheckbox>
  )
}