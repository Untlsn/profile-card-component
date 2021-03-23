import * as React from 'react';
import * as P from './props'
import * as H from './helpers'
import * as S from './style'

const CountData = ({ num, name }: P.CountDataProps) => {
  return (
    <S.SlimAndCenter>
      <S.LittleMargin900Head3>{H.shortBigNumber(num)}</S.LittleMargin900Head3>
      <S.LittleThickParagraph>{name}</S.LittleThickParagraph>
    </S.SlimAndCenter>
  );
};

export default CountData;
export type { CountDataProps } from './props'
