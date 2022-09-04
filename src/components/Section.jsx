import React from 'react'
import styled from "styled-components"
import "../index.css"
import Fade from 'react-reveal/Fade';


const Section = ({ title, desc, leftBtnText, rightBtnText, backgroundImg }) => {
  return (
    <Wrap BgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }

          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>


    </Wrap>

  )
}

export default Section

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: orange; */
  background-image:url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.BgImage}")`};
`
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
  }
  
  
`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,.8);
  height: 40px;
  width: 226px;
  color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-Size: 12px;
  opacity: .85;
  margin:8px;
  cursor: pointer;

`
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: .65;
  color: #000;
`



const Buttons = styled.div``

const DownArrow = styled.img`
  margin: 0 auto;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  display: flex;
  height: 40px;

  
`