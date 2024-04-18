import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Imagem = styled.img`
  margin-top: 40px;
`;
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
`;

export const H1 = styled.h1`
  margin-bottom: 80px;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 39.84px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;
export const InputLabel = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: rgba(238, 238, 238, 1);
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  top: 193px;
  left: 36px;
  padding: 15px 20px 15px 25px;
  gap: 0px;
  border-radius: 20px;
  opacity: 0px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  color: white;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: rgba(0, 0, 0, 0.8);
  
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
      opacity:0.8
  }
  &:active {
      opacity: 0.5;
  }
`;

export const User = styled.li`
margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 58px;
  top: 193px;
  left: 36px;
  padding: 15px 20px 15px 25px;
  gap: 0px;
  border-radius: 20px;
  opacity: 0px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  color: white;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
  margin-bottom: 34px;

button {
  background: none;
  border: none;
  cursor: pointer;
}
`;
