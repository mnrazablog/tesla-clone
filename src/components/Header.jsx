import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



const Header = () => {


  const [burgurStatus, setBurgurStatus] = useState(false);








  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        <a href="#"> Model S</a>
        <a href="#"> Model 3</a>
        <a href="#"> Model X</a>
        <a href="#"> Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#"> SHOP</a>
        <a href="#"> TESLA ACCOUNT</a>
        <CustomMenu onClick={()=>setBurgurStatus(true)}/>
      </RightMenu>

      <BurgerNav show={burgurStatus}>
        <CloseWrapper>
          <CustomClose  onClick={()=>setBurgurStatus(false)}/>
        </CloseWrapper>

        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    
  }
  @media (max-width: 768px) {
    display: none;
  }

`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    margin-right: 10px;
    text-transform:uppercase;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform .2s ease-in;

  li{
    padding: 15px 0 ;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;
      font-size: 18px;
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: right;
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

