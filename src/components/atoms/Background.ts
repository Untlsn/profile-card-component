import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  
  font-size: 4em;

  &::before, &::after {
    content: '';
    border-radius: 20em;
    height: 10em;
    width: 10em;
    position: absolute;
  }
  &::before {
    top: -5em;
    left: -4em;
    background: linear-gradient(
            230deg,
            ${({ theme }) => theme.colors.lightCyan} 20%,
            ${({ theme }) => theme.colors.cyan} 40%,
            ${({ theme }) => theme.colors.darkCyan} 60%
    );
  }
  &::after {
    bottom: -6em;
    right: -3em;
    background: linear-gradient(
            130deg,
            ${({ theme }) => theme.colors.lightCyan} 10%,
            ${({ theme }) => theme.colors.cyan} 25%,
            ${({ theme }) => theme.colors.darkCyan} 40%
    );
  }
`
export default Background
