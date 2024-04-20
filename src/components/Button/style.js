import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  margin-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border: ${props => props.isBack ? "1px solid #FFFFFF" : "none"};
  
  img{
    rotate: ${props => props.isBack ? "180deg" : "0deg"}
  }


  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
