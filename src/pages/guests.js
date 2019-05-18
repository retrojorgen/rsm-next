import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/retrospillmessen-hotell.jpg"
import Background from "../images/tournament-background.jpg"
import TopMenu from "../components/topMenu"

import guestOistein from "../images/guests/oisteinsblyant.jpg"
import guestDanielogsimen from "../images/guests/danielogsimen.jpg"
import guestPrebenFjell from "../images/guests/prebenfjell.jpg"
import guestNilsaxlekanten from "../images/guests/nilsaxlekanten.jpg"
import guestIgnorance from "../images/guests/ignorance.jpg"

import guestDavidWise from "../images/guests/davidwise.jpg"
import guestChrisMarlow from "../images/guests/chrismarlow.jpg"
import guestShawnPile from "../images/guests/shawnpile.jpg"
import guestTheRetroHour from "../images/guests/theretrohour.jpg"
import guestDavidDoak from "../images/guests/daviddoak.jpg"
import guestSlopesGameRoom from "../images/guests/slopesgameroom.jpg"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer, {
  TopTitle,
  SectionTitle,
  SubSectionTitle,
} from "../components/infoContainer"

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
    .guest-image {
      float: left;
      max-width: 100px;
      margin-right: 20px;
    }

    .title {
      font-weight: bold;
      display: block;
      text-transform: uppercase;
      font-size: 30px;
      margin-bottom: 10px;
      .date {
        color: #fbce00;
        font-size: 0.8em;
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

        <SectionTitle>Retro:</SectionTitle>
        <ul>
          <li>
            <img src={guestDavidWise} alt="" className="guest-image" />
            <div className="title">
              David Wise <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              David Wise er en bauta i spillbransjen. Som inhousemusiker for det
              britiske spillselskapet Rare har han stått bak musikken til store
              spill som BattleToads, Donkey Kong Country-serien og nyere spill
              som Yokaa-Laylee. David har alltid med seg saxofonen på tur, og er
              kjent for å fremføre en og annen snutt fra sine kjente spill.
            </div>
          </li>
          <li>
            <img src={guestTheRetroHour} alt="" className="guest-image" />
            <div className="title">
              The Retro Hour (Dan og Ravi){" "}
              <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              <a href="https://theretrohour.com/" target="new_window">
                The Retro Hour
              </a>{" "}
              har på få år rukket å bli en av verdens beste retro-podcaster.
              Gutta fra Newcastle har intervjuet noen av de største i bransjen,
              og er fast inventar på de største retromessene i Storbritannia. Nå
              tar de turen til Norge for første gang, og blir med å lede flere
              av våre paneler, som de også gjør i England.
            </div>
          </li>
          <li>
            <img src={guestChrisMarlow} alt="" className="guest-image" />
            <div className="title">
              Chris Marlow <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Chris Marlow er en av skaperne bak det legendariske Nintendo
              64-spillet Conkers Bad Fur Day. Han er hobby-operasanger og har
              stemmen til bossen The Great Mighty Poo i spillet. Han er fortsatt
              i spillbransjen som utvikler, og jobber i dag i selskapet Gory
              Detail med spillet Sea of Thieves.
            </div>
          </li>
          <li>
            <img src={guestShawnPile} alt="" className="guest-image" />
            <div className="title">
              Shawn Pile <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Shawn Pile jobbet med Chris Marlow på Conkers Bad Fur Day til
              Nintendo 64. Han jobber fort tiden i Gory Detail hvor han blant
              annet var med å utvikle spillet The Unlikely Legend of Rusty Pup.
            </div>
          </li>
          <li>
            <img src={guestDavidDoak} alt="" className="guest-image" />
            <div className="title">
              David Doak <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              David Doak er en publikumsfavoritt på Retrospillmessen. Han
              arbeidet blant annet på det legendariske GoldenEye 007 til
              Nintendo 64, hvor han kjennes igjen som karakteren Dr. Doak. Doak
              har også arbeidet på det kjente spillet Timesplitters, og Haze.
            </div>
          </li>
          <li>
            <img src={guestSlopesGameRoom} alt="" className="guest-image" />
            <div className="title">
              Slopes Game Room <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Daniel Ibbertson står bak{" "}
              <a
                href="https://www.youtube.com/user/djslopesroom"
                target="new_window"
              >
                Slopes Game Room
              </a>
              , en av Storbritannias mest populære retro-youtubere.
              Spesialiteten hans er spill-dokumentarer, og han står blant annet
              bak den ekstremt populære{" "}
              <a
                href="https://www.youtube.com/watch?v=K0lrUnA3X3g"
                target="new_window"
              >
                "The Complete History of Streets of Rage"
              </a>
              . Daniel er fast inventar på de store spill-panelene i England, og
              nå tar han turen til Norge.
            </div>
          </li>
        </ul>
        <SectionTitle>Norske gjester:</SectionTitle>
        <ul>
          <li>
            <img src={guestOistein} alt="" className="guest-image" />
            <div className="title">
              Øisteins Blyant <span className="date">lørdag</span>
            </div>
            <div className="description">
              Den kjente illustratøren kjent fra barne-tv kommer til
              Retrospillmessen på lørdag for å holde tegneshow. Det blir tegning
              av spillfigurer, autografer og mye mer. OBS! Kun lørdag
            </div>
          </li>
          <li>
            <img src={guestDanielogsimen} alt="" className="guest-image" />
            <div className="title">
              Daniel og Simen <span className="date">lørdag</span>
            </div>
            <div className="description">
              Daniel og Simen er to kjempepopulære youtubere og streamere fra
              Stathelle. De er kjente for å stå opp mot netthets, og fikk i
              våres sin egen{" "}
              <a
                href="https://tv.nrk.no/program/KOID75000018"
                target="new_window"
              >
                dokumentar på NRK
              </a>
              . De kjører meetup på Retrospillmessen på lørdagen. OBS! Kun
              lørdag{" "}
              <a
                href="https://www.youtube.com/channel/UCp-DIi5oNk5WZWklxAUiLOg"
                target="new_window"
              >
                {" "}
                [Youtube-kanalen]{" "}
              </a>
            </div>
          </li>
          <li>
            <img src={guestPrebenFjell} alt="" className="guest-image" />
            <div className="title">
              Preben Fjell <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Preben Fjell er kjent fra YouTube-kanalen Prebz og Dennis, og som
              talsperson for Multicom. Du møter Preben på Retrospillmessen både
              lørdag og søndag. Mest sansynlig er han i området for
              barneaktiviteter hvor vi både har Minecraft-konkurranse og andre
              aktiviteter.
            </div>
          </li>
          <li>
            <img src={guestNilsaxlekanten} alt="" className="guest-image" />
            <div className="title">
              Nils Axle Kanten (tegneserien Hjalmar){" "}
              <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Nils Axle Kanten har laget tegnestripen Hjalmar i en årrekke, og
              trykkes i både Pondus og VG. Tidligere jobbet Nils Axle på blant
              annet Elias-filmene, Trolljegeren og Fatso som animatør og
              illustratør. Han lager også stripen Firekanta.
            </div>
          </li>
          <li>
            <img src={guestIgnorance} alt="" className="guest-image" />
            <div className="title">
              Ignorance (Nora) <span className="date">lørdag / søndag</span>
            </div>
            <div className="description">
              Streameren Ignorance også kjent som Nora tar turen til
              Retrospillmessen i år. Ignorance har blitt en megapopulær streamer
              på Twitch, og fått presseomtale i blant annet Sandefjords Blad.
              Twitch-kanalen hennes finner du her:
              <a href="https://www.twitch.tv/ignorance" target="new_window">
                https://www.twitch.tv/ignorance
              </a>
            </div>
          </li>
        </ul>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
