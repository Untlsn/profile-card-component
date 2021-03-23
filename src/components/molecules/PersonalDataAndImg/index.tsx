import * as React from 'react';
import type * as P from './props'
import * as A from '@atoms/all'
import * as S from './style'

const PersonalDataAndImg = ({ personalData, img }: P.PersonalDataAndImgProps) => {
  return (
    <S.Wrapper>
      <S.RoundImg src={img}/>
      <A.PersonalData {...personalData} />
    </S.Wrapper>
  );
};

export default PersonalDataAndImg;
export type { PersonalDataAndImgProps } from './props'
