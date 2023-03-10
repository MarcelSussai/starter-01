import styled from 'styled-components'

type displayColumnRepeat = string[1]
interface ISectionGridColumn {
  displayColumnRepeat: displayColumnRepeat
}
export const SectionGridColumn = styled.section<ISectionGridColumn>`
  display: grid;
  grid-template-columns: repeat(
    ${ ({displayColumnRepeat}) => displayColumnRepeat[0] },
    ${ ({displayColumnRepeat}) => displayColumnRepeat[1] }
  );
  width: 100%;
`