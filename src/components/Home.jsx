import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Home = () => {
  return (
    <Container>




      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custum Order"
        rightBtnText="existing Inventory" />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custum Order"
        rightBtnText="existing Inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custum Order"
        rightBtnText="existing Inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custum Order"
        rightBtnText="existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText=" Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText=" Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
        leftBtnText=" Shop Now"
        rightBtnText=""
      />

    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
  
`