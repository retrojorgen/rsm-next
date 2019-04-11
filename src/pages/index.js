import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import RsmBilde4 from "../images/retrospillmessen-bilde-4.jpg"
import FamilyPhoto from "../images/retrospillmessen-bilde-family.jpg"
import RsmBilde2 from "../images/retrospillmessen-bilde-2.jpg"
import RsmHotelPhoto from "../images/retrospillmessen-hotell.jpg"
import TetrisPhoto from "../images/retrospillmessen-bilde-tetris.jpg"
import NeoGeoWorldTourPhoto from "../images/retrospillmessen-bilde-ngwt.jpg"
import TopMenu from "../components/topMenu"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer from "../components/infoContainer"

import Background from "../images/whatson-background.jpg"

import ElkjopLogo from "../images/logos/elkjop.svg"

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
    span {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 30px;
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

const FlexWrap = styled.div`
  @media (min-width: 1240px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .sidemenu {
    flex: 0 0 240px;
  }
`

const MediumLogos = styled(BigLogos)`
  img {
    width: 90px;
    margin: 0 0px 10px 0px;
  }
  justify-content: space-around;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TopMenu position="front" />
    <FrontHero />
    <SponsorWrapper>
      <p>I samarbeid med</p>
      <a href="https://www.elkjop.no" target="new_window">
        <img src={ElkjopLogo} />
      </a>
    </SponsorWrapper>
    <FlexWrap>
      <div>
        <InfoContainer
          illustration={RsmBilde4}
          heading="Velkommen til årets største retrofest!"
          reverse={false}
        >
          <p>
            For femte år på rad arrangerer vi Retrospillmessen i Runarhallen i
            Sandefjord. Med rundt 100 spillbare retrokonsoller og maskiner,
            barneaktiviteter, fantastiske gjester og et stort marked med
            retrospill og merch er Retrospillmessen et av{" "}
            <strong>årets største happenings for gamere i alle aldre!</strong>
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={FamilyPhoto}
          reverse={true}
          heading="Ta med kidsa!"
        >
          <p>
            I Retrospillmessen er vi opptatt av familie, og Retrospillmessen er
            et trygt og trivelig opplevelsessenter for hele familien.
          </p>
          <p>
            Vi har eget barneområde med perling og barneaktiviteter, i tillegg
            elsker de større ungene å teste alle tv-spillene vi har utstilt. For
            ikke å snakke om LEGO, rare roboter, og mye annet rart. Vi har egen
            kantine hvor du får kjøpt mat, det er romslig for barnevogn, og vi
            har selvsagt også <strong>reduserte priser for barn</strong>. <br />
            <br /> Et barne-dagspass til Retrospillmessen{" "}
            <strong>koster faktisk mindre enn en kinobillett.</strong>
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={RsmBilde2}
          reverse={false}
          heading="Billetter"
        >
          <p>
            Du får kjøpt billetter både på nettet, og i døra{" "}
            <strong>under hele arrangementet</strong>.<br />
            Vi aksepterer selvsagt ledsagerbevis, og{" "}
            <strong>barn under 3 år kommer inn gratis</strong>.
          </p>
          <h4>
            <strong>Priser:</strong>
          </h4>
          <p>
            <strong>1. "Tidlig adgang"-billetter:</strong>
            <br />
            Disse billetter gir deg adgang <i>én time</i> før åpningstiden både
            lørdag og søndag. Perfekt for deg som vil gjøre en god deal, eller
            møte kjendisgjester før alle andre.{" "}
            <u>OBS kun 300 billetter tilgjengelig</u>
            .<br />
            <strong>
              Voksen: 499,-
              <br /> barn: 249,-
            </strong>
            <br />
            <ThinLinkButton
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-early-bird"
            >
              Kjøp
            </ThinLinkButton>
          </p>
          <p>
            <strong>2. Helgepass:</strong>
            <br />
            Disse billettene gir adgang til Retrospillmessen både lørdag og
            søndag.
            <br />
            <strong>
              Voksen: 349,-
              <br /> barn: 149,-
            </strong>
            <br />
            <ThinLinkButton
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-weekend-pass"
            >
              Kjøp
            </ThinLinkButton>
          </p>
          <p>
            <strong>3. Dagspass:</strong>
            <br />
            Gir adgang til Retrospillmessen enten lørdag eller søndag. Husk
            velge riktig dato i menyen
            <br />
            <strong>
              Voksen: 199,-
              <br /> barn: 99,-
            </strong>
            <br />
            <ThinLinkButton
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-day-pass"
            >
              Kjøp
            </ThinLinkButton>
          </p>
        </InfoContainer>
        <InfoContainer
          illustration={RsmHotelPhoto}
          reverse={true}
          heading="Praktisk info"
        >
          <p>
            Lørdag 22.juni: 10:00-18:00 <br />
            Søndag 23.juni: 10:00-18:00{" "}
          </p>
          <h4>Reise:</h4>
          <p>
            Retrospillmessen arrangeres i Runarhallen i Sandefjord,
            Klavenesveien 20. Kjører du bil er det bare en kjapp avkjøring fra
            E18, og kommer du med tog tar du buss 01 fra stasjonen. Det tar ca
            40 minutter å gå fra stasjonen.
            <a href="ttps://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no">
              Google maps retninger her.
            </a>
          </p>
          <h4>Overnatting:</h4>
          <p>
            Planlegger du å bli hele helgen på Retrospillmessen? Da bør du bo på
            Sandefjords største hotell{" "}
            <a
              href="https://www.scandichotels.com/hotels/norway/sandefjord/scandic-park-sandefjord?cmpid=ppc_BH2nd&s_kwcid=AL!7589!3!245108004177!e!!g!!scandic%20park%20sandefjord&gclid=Cj0KCQiA5Y3kBRDwARIsAEwloL7XiSEqBJmjYYtjex9GZDkAp00On-AvVXf7jW63AR90H3gjt5dGHc0aArCqEALw_wcB"
              target="new_window"
            >
              Scandic Park
            </a>
            , med den beste hotellfrokosten i fylket.
            <i>Den er seriøst verdt hver krone!</i>. Husk å bruke
            bestillingskoden <strong>BRSM210619</strong> når du bestiller på
            nett. Spesialprisene våre får du også ved å ringe
            <a href="tel:33447423">33 44 74 23</a> eller booke via
            e-postadressen{" "}
            <a href="mailto:meeting.parksandefjord@scandichotels.com">
              meeting.parksandefjord@scandichotels.com
            </a>
            .<br />
            <br />
            <strong>
              <u>Bestillingskode nett: BRSM210619</u>
              <br />
              <br />
            </strong>
            <strong>Priser (inkludert frokost):</strong>
            <br />
            Enkeltrom kr. 875,- pr. døgn
            <br />
            Dobbeltrom kr. 1030,- pr. døgn
            <br />
            Trippelrom kr. 1236,- pr. døgn
            <br />
            Firemannsrom kr. 1442,- pr. døgn
            <br />
            ** oppgradering til superior-rom 200,-
            <br />
            <strong>Obs! Rom må bookes innen 21/4/2019.</strong>
          </p>
        </InfoContainer>
      </div>
      <div className="sidemenu">
        <LogoWrapper>
          <h3>
            <span>Sponsorer</span>
          </h3>
          <BigLogos>
            <img src={logoHp} />
            <img src={logoHpOmen} />
            <img src={logoNeoTokyo} />
            <img src={logoNerdeportalen} />
            <img src={logoNGWT} />
            <img src={logoAllegro} />
          </BigLogos>
          <MediumLogos>
            <img src={logoLego} />
            <img src={logoXbox} />
            <img src={logoPs} />
            <img src={logoCapcom} />
            <img src={logoActivision} />
            <img src={logoCarlsen} />
            <img src={logoStrand} />
            <img src={logoAagard} />
            <img src={logoRetro} />
            <img src={logoBk} />
            <img src={logoTerrahost} />
            <img src={logoRgb} />
          </MediumLogos>
        </LogoWrapper>
      </div>
    </FlexWrap>
  </Layout>
)

export default IndexPage
