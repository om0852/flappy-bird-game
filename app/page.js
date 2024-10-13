"use client";
import Image from "next/image";
import background from "./images/background-day.png";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;
export default function Home() {
  return (
    <HomeContainer>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird top={300} left={100} width={BIRD_WIDTH} height={BIRD_HEIGHT} />
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

const Bird = styled.div`
  background-image: url("/images/yellowbird-upflap.png");
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  position: relative;
  left: ${(props) => props.left}px;
`;
