import * as S from './styles'
import * as I from './interfaces'



export default function CheckboxDefault({
  text = 'Example of checkbox',
  hideText = false,
  checked = false,
  onChange,
  color = 'default',
  fit = false,
  horizontalAlignment = 'flex-start',
  noBg = false,
}: I.ICheckboxDefault) {

  return (
    <S.ContainerAllCheckbox noBg={noBg} horizontalAlignment={horizontalAlignment} color={color} fit={fit}>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={checked} onChange={onChange} />
        <S.StyledCheckbox checked={checked}>{'✔'}</S.StyledCheckbox>
      </S.CheckboxContainer>
      { !hideText && <S.Text checked={checked}>{text}</S.Text> }
    </S.ContainerAllCheckbox>
  )
}