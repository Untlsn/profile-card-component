import styled from "styled-components";
import { NoMarginGrayParagraph } from '@style/reusable'

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;  
`
export const LeftMarginParagraph = styled(NoMarginGrayParagraph)`
  margin-left: .5em;
`
export const SlimGrayParagraph = styled(NoMarginGrayParagraph)`
  text-align: center;
  font-size: ${({ theme }) => theme.size.slim};
`
export const LittleMarginHead3 = styled.h3`
  margin: .3em;
`
