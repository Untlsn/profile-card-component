import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.deepColors.shadow};
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-evenly;
`
