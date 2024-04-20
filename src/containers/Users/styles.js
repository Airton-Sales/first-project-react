import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Imagem = styled.img`
  margin-top: 40px;
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
