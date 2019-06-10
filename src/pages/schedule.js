import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/retrospillmessen-hotell.jpg"
import Background from "../images/vendors-background.jpg"
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
      time {
        color: #ca9522;
      }
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
      title="Program"
      keywords={[`timeplan`, `tider`, `tider retrospillmessen`]}
    />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Timeplan Retrospillmessen 2019</TopTitle>
        <p>
          Her finner du oversikt over alt som skjer på Retrospillmessen 2019
        </p>
        <p>
          Det er tradisjon på Retrospillmessen å ha et eget panelrom, hvor
          gjestene våre holder spørrerunder, foredrag og såkalte paneler. Du
          finner panelrommet vårt til høyre for kantina, med inngang nederst til
          venstre i salen.
        </p>
        <SectionTitle>Show med Øisteins Blyant, Lørdag 22.juni</SectionTitle>
        <p>
          Øisteins blyant holder tegneshow for barn og voksne i hallen på lørdag
          kl: 11:45 og 15:00. Her blir det garantert mye folk, så møt opp i god
          tid!
        </p>
        <SectionTitle>Offisiell Afterparty, Lørdag 22.juni</SectionTitle>
        <p>
          For første gang arrangerer vi offisiell afterparty etter messa på
          lørdag 22. juni. Det foregår på utestedet Fjordfolk i Sandefjord
          sentrum. Fra 21:00 blir det konsert med David Wise (kjent fra Donkey
          Kong Country) og venner. Dørene åpner tidligere, så her er det bare å
          møte opp. Covercharge på 50kr. Utestedet har 18 års grense, men det er
          lov med barn i følge med voksne frem til konserten er ferdig.{" "}
        </p>
        <SectionTitle>Panelrommet (foredrag/Q&A) Lørdag 22.juni</SectionTitle>
        <ul>
          <li>
            <div className="title">
              <time>10:30 - 11:30</time> - Kevin Bayliss og David Wise (In
              English)
            </div>
            <div className="description">
              {" "}
              - Creation of battletoads, Donkey Kong Country, Killer Instinct
              <br />
              <strong>Panel is hosted by The Retro Hour Podcast.</strong>
            </div>
          </li>
          <li>
            <div className="title">
              <time>12:00 - 13:00</time> - Daniel og Simen (På norsk)
            </div>
            <div className="description">
              Daniel og Simen, kjent fra YouTube og egen dokumentar på NRK
              snakker om deres arbeid mot netthets og mobbing. Viktig for barn å
              voksne å få med seg!
            </div>
          </li>
          <li>
            <div className="title">
              <time>13:30 - 14:30</time> - Daniel Ibbertson - Slopes Game Room
              (In English)
            </div>
            <div className="description">Live Retro quiz</div>
          </li>
          <li>
            <div className="title">
              <time>15:00 - 16:00</time> - Chris Marlow og Shawn Pile (In
              English)
            </div>
            <div className="description">
              The story of Conkers Bad Fur Day for the Nintendo 64
              <br />
              <strong>Panel is hosted by The Retro Hour Podcast.</strong>
            </div>
          </li>
          <li>
            <div className="title">
              <time>16:30 - 17:15</time> - Strand Comics (På norsk)
            </div>
            <div className="description">
              Drømmer du om å bli tegneserieskaper? Tegneren bak Hjalmar, Nils
              Axle Kanten, og Tore Strand Olsen, kjent fra tegneserien Ørn Bjørn
              og Jørn i Pyton forteller om deres erfaringer i
              tegneseriebransjen.
            </div>
          </li>
          <li>
            <div className="title">
              <time>17:30 - 18:30</time> - Premiere of secret documentary (In
              English)
            </div>
            <div className="description">
              We are premiering a brand new documentary, with unique footage.
              You don't want to miss this.
            </div>
          </li>
        </ul>
        <SectionTitle>Panelrommet (foredrag/Q&A) Søndag 22.juni</SectionTitle>
        <ul>
          <li>
            <div className="title">
              <time>10:30 - 11:30</time> - Working at Rare, one of the UKs most
              unique game companies (In English)
            </div>
            <div className="description">
              All star panel with David Doak (GoldenEye/N64), Chris Marlow
              (Conkers Bad Fur Day/N64), Shawn Pile(Conkers Bad Fur Day/N64),
              David Wise (Donkey Kong Country series) and Kevin Bayliss (Killer
              Instinct/N64)
              <br />
              <strong>Panel is hosted by The Retro Hour Podcast.</strong>
            </div>
          </li>
          <li>
            <div className="title">
              <time>12:00 - 13:00</time> - Nerdelandslaget (På norsk)
            </div>
            <div className="description">
              Stian Blipp fra Idol og Senkveld og Andreas Hedemann står bak den
              nye podcasten Nerdelandslaget. De kommer til oss for å holde en
              live versjon av podcasten. Her blir det garantert liv!
            </div>
          </li>
          <li>
            <div className="title">
              <time>13:30 - 14:30</time> - Slik lager Qvisten animasjonsfilmer
              (På norsk)
            </div>
            <div className="description">
              Norske Qvisten Animasjon forteller om hvordan de lager
              animasjonsfilmene sine. Her blir det garantert snadder for deg som
              er interessert i animasjonsbransjen. Qvisten står bak kjente
              filømer som Dyrene i Hakkebakkeskogen, Knerten, Elias, Kutoppen og
              den kommende Kaptein Sabeltann.
            </div>
          </li>
          <li>
            <div className="title">
              <time>15:00 - 16:00</time> - Making modern games with Joel Bylos
              of Funcom (In English)
            </div>
            <div className="description">
              Joel Bylos works as a Creative Director at Funcom. Recently he has
              been involved in Conan Exiles, and will talk about how modern game
              studios produce games.
            </div>
          </li>
          <li>
            <div className="title">
              <time>16:30 - 17:30</time> - Succeding as an international
              youtuber (In English)
            </div>
            <div className="description">
              The creators of Slopes Game Room, Dr. Wily and Commonwealth Realm
              talk about how they are making money from YouTube.
            </div>
          </li>
        </ul>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
