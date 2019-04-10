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
          om finaleplass i Neo Geo World Championship i Hong Kong. Du kan vinne
          en plass på Retrospillmessen!
        </p>
        <p>
          Det vil foregå to turneringer; en i spillet King of Fighters 98
          (Nintendo Switch / Neo Geo), og en i King Of Fighters XIV (PS4).
        </p>
        <p>
          Du kan melde deg på turneringene{" "}
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fchallonge.com%2Fevents%2Fngwt2norway%3Ffbclid%3DIwAR1Zmx5Tac2o-uWIE3OgKUJVeyMAQ_T6fYGRK0wwnpXyoUeeQuKgf9Cqo6w&h=AT2rhee5uXIIv_G3VoaCIl0nTLuFiogOU9xRNc1cIYUwNmuzNRcMsjZIY4bpBPDgh5O_5bGPqKg4eaMhJGcqkE1DUqCEkHLKUznrydBkUpKBhkwirdv-tP1BjL8dhOZyBoUqRxskxUn4q_M2EAm2MQW_cFDd8xQtZudAcYNUuMHrasVehVzCaKUGwF8M5-IqyXTVtMl5_RgexGT_EPQIUlWvXeusxYW5MBZTF1MN12bhW7mEGYRI2Ed8chVChD3mlFIxi2lrvC1E7-eC8IsPPfIqT_1KrZjQbFyY5Oi7AZpaAS9KdTZ04Az8g2blhZUCqvGe0lZJjVgS8AmIQ853vKjw3JmYy6L22Ym5rfimds2FzXTLM_JwgZn0VVdjnOpavVcOCqugEOoCWBAjzQXeg8u_Pe4E3LdoPzrHXEFmLUrdgjPmcMmMw7G55glOQdlXJXBfF3wG9ht3eBVTG1Z1WMJOP17dJiIz_7Cz23xWY971Mb6baxTNIBdSkTjFNSQ3QeZcd2Qi0YHjAZWW0KhfWmgxfMzrEOgrba8hp8hnE1y_eLn7MPe6gvF39hV0oppcOvb4CmoRPBCDiqW-KMoyCtUkFbIXPUbPsJjwuwcpTPmMicGnEYgTR1U2smAL3sylphbCDhuEher">
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
    </PageWrap>
  </Layout>
)
