"use client"
import Image from "next/image";
import background from "./images/background-day.png"
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
export default function Home() {
  return (
    <HomeContainer>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird />
      </Background>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-image: url("/images/background-day.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border: 2px solid black;
`;

const Bird = styled.div``;
