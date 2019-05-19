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
    <SEO title="Utstillere" keywords={[`boder`, `marked`, `utstilling`]} />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Utstillere</TopTitle>
        <p>
          I Retrospillmessen-hallen finner du hauger av forskjellige boder med
          salg, utstillinger og aktiviter. Både for entusiaster, kids og
          familier. Denne listen blir stadig oppdatert!
        </p>
        <SubSectionTitle>Stand på Retrospillmessen</SubSectionTitle>
        <p>
          Ønsker du stand på Retrospillmessen 2019? Vi har få plasser igjen, men
          om du vil sikre deg plass anbefaler vi at du snarest tar kontakt på{" "}
          <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a>
          .
        </p>
        <p>
          Prisen på stands er 500,- per m2, og minste stand er 2x2m (2000,-).
        </p>
        <SectionTitle>Retrospill, salg og utstillig:</SectionTitle>
        <ul>
          <li>
            <div className="title">Alexander Holth og Sondre Sandvig</div>
            <div className="description">Salg av Retrospill</div>
          </li>
          <li>
            <div className="title">Retrospill Norge</div>
            <div className="description">Salg av Retrospill</div>
          </li>
          <li>
            <div className="title">Jens Olav Bakkland</div>
            <div className="description">Salg av Retrospill</div>
          </li>
          <li>
            <div className="title">
              <a href="http://nintendo8bit.no" target="new_window">
                Nintendo8bit.no (lenke)
              </a>
            </div>
            <div className="description">Salg av Retrospill</div>
          </li>

          <li>
            <div className="title">
              <a
                href="https://www.facebook.com/groups/RetroGameBrothers/"
                target="new_window"
              >
                Retro Game Brothers (lenke)
              </a>
            </div>
            <div className="description">
              Salg av SNES, SEGA, PSP, PSPVita, PS1, PS2, PS3, PS4, Gamecube,
              masse håndholdt, Nintendo 64, Nintendo DS, bitte litt NES.
            </div>
          </li>
          <li>
            <div className="title">Andreas Berg</div>
            <div className="description">Salg av Retrospill og utstilling</div>
          </li>
          <li>
            <div className="title">
              <a
                href="https://www.youtube.com/channel/UCiHBaaqTh08aWrrWtWVEbAQ"
                target="new_windoew"
              >
                Sveins World - Neo Geo Heaven (lenke)
              </a>
            </div>
            <div className="description">
              Norge beste retro-youtubekanal. Stiller ut Neo Geo og mye annet!
            </div>
          </li>
        </ul>
        <SectionTitle>Tegneserier, leker, t-skjorter og merch:</SectionTitle>
        <ul>
          <li>
            <div className="title">Neo Tokyo</div>
            <div className="description">
              Selger Japansk godteri, tegneserier, retrospill, merch og mye mye
              mer!
            </div>
          </li>
          <li>
            <div className="title">Nerdeportalen</div>
            <div className="description">
              Selger t-skjorter, gensere og kopper fra kjente tegneserier og
              filmer
            </div>
          </li>
          <li>
            <div className="title">Erik Torstensen</div>
            <div className="description">Salg av gaming merch</div>
          </li>
          <li>
            <div className="title">Darkhan Bit t-shirts</div>
            <div className="description">Kule retroinspirerte t-skjorter</div>
          </li>
          <li>
            <div className="title">Zoo Comics</div>
            <div className="description">
              Enormt utvalg av tegneserier, leker, plushies og annet merch.
            </div>
          </li>
          <li>
            <div className="title">Strand Comics</div>
            <div className="description">
              Selger tegneserier signert av blant annet Frode Øverli (Pondus) og
              Børge Lund (Lunsj)
            </div>
          </li>
        </ul>
        <SectionTitle>Artstands</SectionTitle>
        <ul>
          <li>
            <div className="title">Marion Bråthen</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Detch Chan Art</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Heli Peach og Katrinu Chan</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Kine`s Crafts</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Pastelbell</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Viktoria Thorstensen</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Octogear</div>
            <div className="description" />
          </li>
        </ul>
        <SectionTitle>Spill / indiegaming / koding</SectionTitle>
        <ul>
          <li>
            <div className="title">Trafikkskolesimulator</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">D-Pad Studios</div>
            <div className="description">
              Stiller ut spillet Vikings on Trampolines
            </div>
          </li>
          <li>
            <div className="title">HP - MineCraft konkurranse</div>
            <div className="description">
              HP leverer maskiner til Minecraft-konkurranser på
              Retrospillmessen! Konkurransene kommer dessuten til å castes av
              hemmelige gjester vi annonserer senere. Følg med!
            </div>
          </li>
          <li>
            <div className="title">Elkjøp Gaming</div>
            <div className="description">
              Elkjøp stiller ut fra sitt store gamingutvalg
            </div>
          </li>
          <li>
            <div className="title">Lær kidsa koding</div>
            <div className="description" />
          </li>
          <li>
            <div className="title">Neo Geo World Tour</div>
            <div className="description">
              Her finner du turneringene under Retrospillmessen. Både Tetris,
              King of Fighters og Metal Slug.
            </div>
          </li>
          <li>
            <div className="title">PolarParty</div>
            <div className="description">
              Lær mer om en av vestfolds eldste pågående LAN-parties.
            </div>
          </li>
          <li>
            <div className="title">Fredrikstad Sci Fi Festival</div>
            <div className="description">
              Norges eneste Science Fiction-festival foregår i Fredrikstad. Lær
              mer om alt det gøye de finner på.
            </div>
          </li>
        </ul>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
