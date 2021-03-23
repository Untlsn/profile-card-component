import styled from "styled-components";

export const NoMarginGrayParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`
export const SlimAndCenter = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.size.slim};
`
