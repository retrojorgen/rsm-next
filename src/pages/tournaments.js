import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/retrospillmessen-hotell.jpg"
import Background from "../images/tournament-background.jpg"
import TetrisPhoto from "../images/retrospillmessen-bilde-tetris.jpg"
import NeoGeoWorldTourPhoto from "../images/retrospillmessen-bilde-ngwt.jpg"
import DanseNM from "../images/retrospillmessen-bilde-dansenm.jpg"
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
      title="Turneringer"
      keywords={[`tetris`, `Neo Geo World Tour`, `Tetris World Championship`]}
    />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Turneringer</TopTitle>
        <p>
          På Retrospillmessen 2019 kjører vi to hovedturneringer, med masse
          småkonkurranser.
        </p>
        <p>
          På <b>lørdag</b> får vi gjen besøk av Neo Geo World Tour, hvor du kan
          delta i flere turneringer rundt slossespill-serien King of Fighters.
          På <b>søndag</b> får vi besøk av Tetris World Championship, som er den
          offisielle verdensturneringen for Tetris. i
        </p>
        <p>Les mer om turneringene, påmelding og tidspunkt under.</p>
      </ContentWrap>
      <InfoContainer
        illustration={NeoGeoWorldTourPhoto}
        reverse={true}
        heading="Neo Geo World Tour med fete premier"
      >
        <h4>Slossespill-turneringen kommer tilbake</h4>
        <p>
          I fjor fikk vi besøk av Neo Geo-gjengen for første gang, og nå kommer
          de tilbake med en ny turnering. På lørdag (22. juni) skal det kjempes
          om finaleplass i Neo Geo World Championship i Taipei, Taiwan. Du kan
          vinne en plass på Retrospillmessen!
        </p>
        <p>
          Det vil foregå to turneringer; en i spillet King of Fighters 98
          (Nintendo Switch / Neo Geo), og en i King Of Fighters XIV (PS4).
        </p>
        <p>
          Du kan melde deg på turneringene{" "}
          <a href="https://challonge.com/events/ngwt2norway/">
            på challonge her
          </a>
          .
        </p>
        <h4>Metal Slug highscore attack</h4>
        <p>
          Gjengen kjører også i gang et highscore attack i Metal Slug med noen
          fete premier!
        </p>
      </InfoContainer>
      <InfoContainer
        illustration={TetrisPhoto}
        reverse={false}
        heading="Classic Tetris World Championship"
      >
        <h4>Kvalifiser deg til finalen:</h4>
        <p>
          I år blir Retrospillmessen ett av ytterst få stoppesteder for den
          offisielle internasjonale Tetris-turneringen. På søndagen (23. juni)
          kjører vi både en proff-turnering hvor du kan vinne en plass i finalen
          i Classic Tetris World Championship.
        </p>
        <p>
          I tillegg kjører vi en amatørturnering samme dag med fete premier.
        </p>
        <p>
          <strong>
            Påmelding skjer på Retrospillmessen, så husk å møt opp tidlig hvis
            du vil delta!
          </strong>
        </p>
      </InfoContainer>
      <InfoContainer
        illustration={TetrisPhoto}
        reverse={false}
        heading="Classic Tetris World Championship"
      >
        <h4>Uoffisielt dansemaskin-NM for nybegynnere og proffe</h4>
        <p>
          Bli med i uoffisielt dansemaskin-NM!
          <br />
          <br />
          På søndag 23. juni arranger vi turnering for nybegynnere og proffe
          🕺💃 Turneringen starter søndag 12:00, med påmelding senest 11:30, så
          møt opp tidlig :)
        </p>
        <p>
          PS: Har du lyst til å øve, eller finne ut hvor god du er? Maskinene er
          spillbare for alle hele lørdag, og mye av søndag. Maskinene er gøy for
          barn og voksne i alle aldre! * Turneringen vil foregå på Dancing Stage
          Euromix 2 * bildet er fra Retrospillmessen 2018
        </p>
      </InfoContainer>
    </PageWrap>
  </Layout>
)
