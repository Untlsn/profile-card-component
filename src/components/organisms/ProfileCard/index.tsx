import * as React from 'react';
import * as M from '@molecules/all'
import * as S from './style'
import type * as P from './props'
import BgPatternCard from '@assets/icons/bg-pattern-card.svg'

const ProfileCard = ({ personalData, countData, img }: P.ProfileCardProps) => {
  return (
    <S.Wrapper>
      <S.FancyBack img={BgPatternCard}/>
      <M.PersonalDataAndImg personalData={personalData} img={img}/>
      <M.TripleCountData countData={countData}/>
    </S.Wrapper>
  );
};

export default ProfileCard;
