"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;
const GRAVITY = 9;
const OBJ_WIDTH = 53;
const OBJ_GAP = 200;
const OBJ_SPEED = 5;
export default function Home() {
  const [birdPos, setBirdPos] = useState(350);
  const [isStart, setIsStart] = useState(false);
  const [objHeight, setObjHeight] = useState(200);
  const [objPos, setObjPos] = useState(WALL_WIDTH);
  let birdInterval;
  const BOTTOM_OBJ = WALL_HEIGHT - OBJ_GAP - objHeight;
  useEffect(() => {
    if (isStart && birdPos < WALL_HEIGHT - BIRD_HEIGHT) {
      birdInterval = setInterval(() => {
        setBirdPos((prev) => prev + GRAVITY);
      }, 30);
    }
    return () => clearInterval(birdInterval);
  });
useEffect(()=>{
let topObj = birdPos >= 0 && birdPos <objHeight;
let botObj = birdPos <=WALL_HEIGHT && birdPos>=WALL_HEIGHT-BOTTOM_OBJ + BIRD_HEIGHT

if(objPos>=OBJ_WIDTH && objPos<=OBJ_WIDTH+10 && (topObj || botObj)){
  setIsStart(false);
  setBirdPos(300);

}
},)
  useEffect(() => {
    let objVal;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objVal = setInterval(() => {
        setObjPos((prev) => prev - OBJ_SPEED);
      }, 24);
    } else {
      setObjPos(WALL_WIDTH);
      setObjHeight(Math.floor(Math.random()*WALL_HEIGHT-OBJ_GAP))
    }
    return () => clearInterval(objVal);
  },[isStart,objPos]);
  const handler = () => {
    if (!isStart) setIsStart(true);
    else if (BIRD_HEIGHT > birdPos) {
      setBirdPos(10);
    } else {
      setBirdPos((prev) => prev - 50);
    }
  };
  return (
    <HomeContainer onClick={handler}>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird top={birdPos} left={30} width={BIRD_WIDTH} height={BIRD_HEIGHT} />
        {!isStart && <StartGame>Click to start</StartGame>}{" "}
        <Obj
          deg={180}
          height={objHeight}
          width={OBJ_WIDTH}
          left={objPos}
          top={-30}
        />
        <Obj
          deg={0}
          height={BOTTOM_OBJ}
          width={OBJ_WIDTH}
          left={objPos}
          top={WALL_HEIGHT-(objHeight+BOTTOM_OBJ) - 30}
        />
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

const StartGame = styled.div`
  text-align: center;
  position: absolute;
  top: 49%;
  background-color: black;
  padding: 10px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
`;

const Obj = styled.div`
  position: relative;
  background-image: url("/images/pipe-green.png");
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: rotate(${(props) => props.deg}deg);
  /* transform: rotate(180deg); */
`;
