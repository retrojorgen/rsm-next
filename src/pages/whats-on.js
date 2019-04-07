import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/retrospillmessen-hotell.jpg"
import Background from "../images/whatson-background.jpg"
import spillhistorie from "../images/whatson-reise-spillhistorien.jpg"
import utstillere from "../images/whatson-utstillere.jpg"
import datamaskiner from "../images/whatson-datamaskiner.jpg"
import selgere from "../images/whatson-selgere.jpg"
import modern from "../images/whatson-modern.jpg"
import barneaktiviteter from "../images/whatson-barneaktiviteter.jpg"
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
  padding: 10px;
  p {
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    li {
      padding: 0 20px 0 20px;
    }
    .title {
      font-weight: bold;
      display: block;
      text-transform: uppercase;
    }
    .description {
      font-weight: thin;
      display: block;
      border-bottom: 2px solid #ca9522;
      padding-bottom: 10px;
      margin-bottom: 10px

      &: hover {
        border-bottom: 2px solid #fbce00;
      }
    }
  }
`

const TopTitle = styled.h1`
  display: block;
  border-left: 4px solid #fbce00;
  color: #fbce00;
  padding-left: 20px;
  text-transform: ;
`

const SectionTitle = styled.h2`
  display: block;
  border-left: 4px solid #fbce00;
  color: #fbce00;
  padding-left: 20px;
  text-transform: ;
`

const SubSectionTitle = styled.h3`
  display: block;
  border-left: 4px solid transparent;
  color: #fbce00;
  padding-left: 20px;
  text-transform: ;
`

export default () => (
  <Layout>
    <SEO
      title="Aktiviteter"
      keywords={[`Hva skjer`, `barneaktiviteter`, `marked`]}
    />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Hva skjer</TopTitle>
        <p>
          På Retrospillmessen finner alle i alle aldre noe de synes er gøy. Fra
          Retrospill, til shopping, indiespill, moderne gaming, og roboter.
        </p>
        <InfoContainer
          illustration={spillhistorie}
          reverse={false}
          heading="En reise i spillhistorien"
        >
          <p>
            Dette er den viktigste aktiviteten på Retrospillmessen, og selve
            grunnlaget i alt vi gjør. Ta en reise med venner og familie i
            Retrospillenes rike historie, helt fra Atari 2600 på 70-tallet, den
            første Nintendoen, obskure maskiner som Atari Jaguar, og kjente og
            kjære Nintendo 64.
          </p>
          <p>
            På reisen spiller du klassikere som Super Mario 64, Zelda: Link to
            The Past, E.T, Giana Sisters, Mario Kart, Pokemon og mye mer!
          </p>
          <p>
            <strong>
              Obs! Du finner også en egen fantastisk stand for
              retrodatamaskin-historie!
            </strong>
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={datamaskiner}
          reverse={false}
          heading="Gamle datamaskiner"
        >
          <p>
            Er gamle datamaskiner din greie skal du vite at få andre steder ser
            du fler maskiner fra datamaskinenes historie.
          </p>
          <p>
            På Retrospillmessen opplever du alt fra VIC-20 til Amiga, ZX
            Spectrum og andre kuriositeter!
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={barneaktiviteter}
          reverse={true}
          heading="Barne-aktiviteter"
        >
          <p>
            På Retrospillmessen er hele familien velkommen, og vi har hauger av
            artige aktiviteter for alle aldre. Hos oss finner du et eget område
            for barneaktiviteter, hvor vi perler, gir ansiktsmaling, spiller
            Minecraft, lærer å tegne og mye mer.
          </p>
          <p>
            En favoritt blant alle barn, og et av våre mest populære tilbud!
          </p>
        </InfoContainer>
        <InfoContainer illustration={selgere} reverse={false} heading="Marked">
          <p>
            På Retrospillmessen får du kjøpt akkurat det du trenger av gamle
            retrospill, t-skjorter, leker, tegneserier og til og med Japansk
            godteri!
          </p>
          <p>
            Hos Neo Tokyo finner du unikt Japansk godteri, Zoo Comics har de
            beste tegneseriene, og Retrospillmiljøet disker opp med salg av
            fungerende retrokonsoller og spill.
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={utstillere}
          reverse={true}
          heading="Utstillinger"
        >
          <p>
            Det bugner over av spennende utstillinger på Retrospillmessen. Ikke
            bare stiller vi ut sjeldne retrospill og maskiner, men du finner
            også sjeldne leker og til og med LEGO.
          </p>
          <p>
            Bildet er tatt fra Brikkelaugets enorme og veldig populære
            LEGO-utstilling.
          </p>
        </InfoContainer>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
