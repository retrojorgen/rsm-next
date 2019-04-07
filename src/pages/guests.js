import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/retrospillmessen-hotell.jpg"
import Background from "../images/tournament-background.jpg"
import TetrisPhoto from "../images/retrospillmessen-bilde-tetris.jpg"
import NeoGeoWorldTourPhoto from "../images/retrospillmessen-bilde-ngwt.jpg"
import TopMenu from "../components/topMenu"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer from "../components/infoContainer"

const PageWrap = styled.div`
  background: url(${props => props.background});
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding-top: 100px;
`

const ContentWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  max-width: 100%;
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
    <SEO title="Gjester" keywords={[``]} />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Gjester</TopTitle>
        <p>
          Vi jobber med informasjonssiden om spesial-gjestene våre! Følg med.
        </p>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
