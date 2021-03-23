import styled from "styled-components";

const wrapperWidth = '20em'

export const Wrapper = styled.div`
  position: relative;
  height: ${wrapperWidth};
  width: ${wrapperWidth};
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.deepColors.shadow} 5px 5px 10px 10px;
`
export const FancyBack = styled.div<{ img: string }>`
  background-image: url("${({ img }) => img}");
  background-size: cover;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  
  height: 8em;
  width: inherit;
`
