import * as React from 'react';
import * as P from './props'
import * as S from './style'

const PersonalData = ({ name, age, residence }: P.PersonalDataProps) => {
  return (
    <div>
      <S.CenterFlex>
        <S.LittleMarginHead3>{name}</S.LittleMarginHead3>
        <S.LeftMarginParagraph>{age}</S.LeftMarginParagraph>
      </S.CenterFlex>
      <S.SlimGrayParagraph as='p'>{residence}</S.SlimGrayParagraph>
    </div>
  );
};

export default PersonalData;
export type { PersonalDataProps } from './props'
