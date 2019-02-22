import React from 'react'; import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Bar = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const FluidConatiner = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const Left = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const Center = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;

cursor: pointer;
margin-right: 5%;
`

const Right = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`

const SP = styled.span `
cursor: pointer;
margin-right: 5%;
margin-left: 5%;
`

const TopBar = () => {
  return (
    <Bar>
      <FluidConatiner>
        <Left>
          <SP>TOPICS</SP><SP>SEARCH</SP>
        </Left>
        <Center>
          <SP>GENERAL</SP><SP>BROWNBAG</SP><SP>RANDOM</SP><SP>MUSIC</SP><SP>ANNOUNCEMENTS</SP>
        </Center>
        <Right>
          <SP>LOG IN</SP>
        </Right>
      </FluidConatiner>
    </Bar>
  )
}

export default TopBar;