import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/whatson-hallen.jpg"
import Background from "../images/hotel-background.jpg"
import TopMenu from "../components/topMenu"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer from "../components/infoContainer"

const PageWrap = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  padding-top: 100px;
  background-size: 100% auto;
`

const ContentWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  max-width: 100%;
  padding: 10px;
  p {
  }
`

const TopTitle = styled.h1`
  display: block;
  border-left: 4px solid #fbce00;
  color: #fbce00;
  padding-left: 20px;
  text-transform: ;
`

export default () => (
  <Layout>
    <SEO
      title="Reise"
      keywords={[
        `Retrospillmessen`,
        `adresse`,
        `runarhallen`,
        `dato`,
        `åpningstider`,
      ]}
    />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Reise</TopTitle>
      </ContentWrap>
      <InfoContainer
        illustration={Photo}
        reverse={true}
        heading="Dato / bil / tog / buss "
      >
        <p>
          Lørdag 22.juni: 10:00-18:00 <br />
          Søndag 23.juni: 10:00-18:00{" "}
        </p>
        <h4>Reise:</h4>
        <p>
          Retrospillmessen arrangeres i Runarhallen i Sandefjord, Klavenesveien
          20. Kjører du bil er det bare en kjapp avkjøring fra E18, og kommer du
          med tog tar du buss 01 fra stasjonen. Det tar ca 40 minutter å gå fra
          stasjonen.
          <a href="ttps://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no">
            Google maps retninger her.
          </a>
        </p>
      </InfoContainer>
    </PageWrap>
  </Layout>
)
