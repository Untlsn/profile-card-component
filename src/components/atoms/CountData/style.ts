import styled from "styled-components";
import { NoMarginGrayParagraph } from '@style/reusable'
export { SlimAndCenter } from '@style/reusable'

export const LittleThickParagraph = styled(NoMarginGrayParagraph)`
  font-size: ${({ theme }) => theme.size.little};
  letter-spacing: 1px;
  text-transform: capitalize;
`

export const LittleMargin900Head3 = styled.h3`
  margin: .2em;
  font-weight: 900;
`
