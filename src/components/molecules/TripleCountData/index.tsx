import * as React from 'react';
import type * as P from './props'
import * as A from "@atoms/all";
import * as S from './style'

const TripleCountData = ({ countData }: P.TripleCountDataProps) => {
  return (
    <S.Wrapper>
      {countData.map(
        (props, key) => <A.CountData key={key} {...props} />
      )}
    </S.Wrapper>
  );
};

export default TripleCountData;
export type { TripleCountDataProps } from './props'
