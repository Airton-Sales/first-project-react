import styled from "styled-components";

export const ContainerItens = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 35px;
  border-radius: 61px 61px 0px 0px;
  opacity: 0px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

 ${props => props.isBlur && `
    backdrop-filter: blur(45px);
    min-height: calc(100vh - 170px);`}
`;
