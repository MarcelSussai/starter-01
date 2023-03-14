import * as S from './styles'
import * as I from './interfaces'



export default function CheckboxDefault({
  text = 'Example of checkbox',
  hideText = false,
  checked = false,
  onChange,
  color = 'default'
}: I.ICheckboxDefault) {

  return (
    <S.ContainerAllCheckbox color={color}>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={checked} onChange={onChange} />
        <S.StyledCheckbox checked={checked}>{'✔'}</S.StyledCheckbox>
      </S.CheckboxContainer>
      { !hideText && <S.Text checked={checked}>{text}</S.Text> }
    </S.ContainerAllCheckbox>
  )
}