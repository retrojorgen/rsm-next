import React from "react"
import styled from "styled-components"

import logoHp from "../images/logos/sized/hp.jpg"
import logoHpOmen from "../images/logos/sized/hpomen.jpg"
import logoNeoTokyo from "../images/logos/sized/neotokyo.jpg"
import logoNerdeportalen from "../images/logos/sized/nerdeportalen.jpg"
import logoNGWT from "../images/logos/sized/ngwt.jpg"
import logoAllegro from "../images/logos/sized/allegro.jpg"
import logoLego from "../images/logos/sized/lego.jpg"
import logoXbox from "../images/logos/sized/xboxone.jpg"
import logoPs from "../images/logos/sized/playstation.jpg"
import logoCapcom from "../images/logos/sized/capcom.jpg"
import logoActivision from "../images/logos/sized/activision.jpg"
import logoCarlsen from "../images/logos/sized/carlsenfritsoe.jpg"
import logoStrand from "../images/logos/sized/strandforlag.jpg"
import logoAagard from "../images/logos/sized/aagardmusikk.jpg"
import logoRetro from "../images/logos/sized/retroservice.jpg"
import logoBk from "../images/logos/sized/bk.jpg"
import logoTerrahost from "../images/logos/sized/terrahost.jpg"
import logoRgb from "../images/logos/sized/rgb.jpg"
import logoElkjop from "../images/logos/sized/elkjop.jpg"
import ElkjopLogo from "../images/logos/elkjop.svg"
import logoBjorvikhaugen from "../images/logos/sized/bjorvikhaugen.jpg"
import logoEgmont from "../images/logos/sized/egmont.jpg"
import logoFjordenelektro from "../images/logos/sized/fjordenelektro.jpg"
import logoFuncom from "../images/logos/sized/funcom.jpg"
import logoHvaltorvet from "../images/logos/sized/hvaltorvet.jpg"
import logoQvisten from "../images/logos/sized/qvisten.jpg"
import logoRunarhallen from "../images/logos/sized/runarhallen.jpg"
import logoDotEmu from "../images/logos/sized/dotemu.jpg"
import Background from "../images/top-background.jpg"

const SponsorWrapper = styled.div`
  padding: 40px;
  text-align: center;
  p {
    margin-bottom: 0;
  }
  img {
    width: 400px;
    max-width: 100%;
    margin-bottom: 20px;
  }
`

const LogoWrapper = styled.div`
  background: url(${Background});
  background-size: cover;
  padding: 20px;
  h3 {
    margin-bottom: 20px;
    @media (min-width: 1240px) {
      margin-bottom: 0;
    }
    span {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 16px;
      padding-right: 30px;
      color: #fbce00;
      position: relative;

      display: inline-block;
      @media (min-width: 1240px) {
        transform: translateY(-32px) translateX(-32px);
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 1px;
        height: 3px;
        width: 100%;
        background: #fbce00;
      }
    }
  }
`

const BigLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 220px;
    display: inline-block;
    margin: 0 20px 20px 20px;
  }
  align-items: center;
  justify-content: center;
`

const MediumLogos = styled(BigLogos)`
  img {
    width: 220px;
    margin: 0 20px 20px 20px;
  }
  align-items: center;
  justify-content: center;
`

const MainSponsor = () => (
  <SponsorWrapper>
    <p>I samarbeid med</p>
    <a href="https://www.elkjop.no" target="new_window">
      <img src={ElkjopLogo} alt="logo" />
    </a>
  </SponsorWrapper>
)

export default () => (
  <div className="sidemenu">
    <LogoWrapper>
      <h3>
        <span>Sponsorer og samarbeidspartnere</span>
      </h3>
      <BigLogos>
        <a href="https://www.elkjop.no" target="new_window">
          <img src={logoElkjop} alt="logo" />
        </a>
        <a href="https://www8.hp.com/no/no/home.html" target="new_window">
          <img src={logoHp} alt="logo" />
        </a>
        <a
          href="https://www8.hp.com/no/no/campaigns/gamingpcs/overview.html#desktops-tab"
          target="new_window"
        >
          <img src={logoHpOmen} alt="logo" />
        </a>
        <a href="https://www.neo-tokyo.no/" target="new_window">
          <img src={logoNeoTokyo} alt="logo" />
        </a>
        <a href="https://www.nerdeportalen.no/" target="new_window">
          <img src={logoNerdeportalen} alt="logo" />
        </a>
        <a href="http://www.neogeoworldtour.com/" target="new_window">
          <img src={logoNGWT} alt="logo" />
        </a>
        <a href="https://www.allegro.no/" target="new_window">
          <img src={logoAllegro} alt="logo" />
        </a>
      </BigLogos>
      <MediumLogos>
        <a href="https://www.lego.com/nb-no" target="new_window">
          <img src={logoLego} alt="logo" />
        </a>
        <a href="https://www.xbox.com/nb-NO" target="new_window">
          <img src={logoXbox} alt="logo" />
        </a>
        <a href="https://www.playstation.com/no-no/" target="new_window">
          <img src={logoPs} alt="logo" />
        </a>
        <a href="http://www.capcom-europe.com/" target="new_window">
          <img src={logoCapcom} alt="logo" />
        </a>
        <a href="https://www.activision.com/" target="new_window">
          <img src={logoActivision} alt="logo" />
        </a>
        <a href="https://www.carlsenfritzoe.no/" target="new_window">
          <img src={logoCarlsen} alt="logo" />
        </a>
        <a href="http://www.strandcomics.no/" target="new_window">
          <img src={logoStrand} alt="logo" />
        </a>
        <a href="https://aagaardmusikk.no/" target="new_window">
          <img src={logoAagard} alt="logo" />
        </a>
        <a href="https://www.retroservice.no/" target="new_window">
          <img src={logoRetro} alt="logo" />
        </a>
        <a href="https://bk.no/" target="new_window">
          <img src={logoBk} alt="logo" />
        </a>
        <a href="https://terrahost.no/">
          <img src={logoTerrahost} alt="logo" />
        </a>
        <a
          href="https://www.facebook.com/groups/RetroGameBrothers/"
          target="new_window"
        >
          <img src={logoRgb} alt="logo" />
        </a>
        <a
          href="https://www.fargerike.no/fargehandel/sandefjord/"
          target="new_window"
        >
          <img src={logoBjorvikhaugen} alt="logo" />
        </a>
        <a href="https://www.egmont.no" target="new_window">
          <img src={logoEgmont} alt="logo" />
        </a>
        <a href="https://www.fjordenelektro.no" target="new_window">
          <img src={logoFjordenelektro} alt="logo" />
        </a>
        <a href="https://www.funcom.com" target="new_window">
          <img src={logoFuncom} alt="logo" />
        </a>
        <a href="https://www.hvaltorvet.no" target="new_window">
          <img src={logoHvaltorvet} alt="logo" />
        </a>
        <a href="https://www.qvisten.no" target="new_window">
          <img src={logoQvisten} alt="logo" />
        </a>
        <a href="https://www.ilrunar.no" target="new_window">
          <img src={logoRunarhallen} alt="logo" />
        </a>
        <a href="http://www.dotemu.com/" target="new_window">
          <img src={logoDotEmu} alt="logo" />
        </a>
      </MediumLogos>
    </LogoWrapper>
  </div>
)

export { MainSponsor }
