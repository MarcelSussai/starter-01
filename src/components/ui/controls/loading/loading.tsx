import * as S from './styles'
import * as I from './interfaces'


export default function Loading({
  color = 'default'
}: I.ILoading) {

  return (
    <S.ContainerAll>
      <S.ContainerAllLoading>
        <S.ContainerLoading>
          <div className="circle-01" />
          <div className="circle-02" />
          <div className="circle-03" />
          <div className="circle-04" />
          <div className="circle-05" />
        </S.ContainerLoading>
      </S.ContainerAllLoading>
    </S.ContainerAll>
  )
}