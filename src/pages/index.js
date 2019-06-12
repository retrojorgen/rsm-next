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
import SponsorContainer, { MainSponsor } from "../components/sponsorContainer"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer, { FlexWrap } from "../components/infoContainer"

import guestOistein from "../images/guests/oisteinsblyant.jpg"
import guestNerdelandslaget from "../images/guests/nerdelandslaget.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TopMenu position="front" />
    <FrontHero />
    <FlexWrap>
      <div>
        <h2>Ikke gå glipp av:</h2>
        <div class="quick-info">
          <div class="block image">
            <div class="image">
              <img src={guestOistein} />
            </div>
            <p>Tegneshow med Oisteins Blyant, KUN lørdag 22. juni.</p>
            <p>Kl 11:45 og 15:00 i hovedsalen.</p>
          </div>
          <div class="block image">
            <div class="image">
              <img src={guestNerdelandslaget} />
            </div>
            <p>
              Live podcast med Stian Blipp fra Idol og Senkveld og Andreas
              Hedemann.
            </p>
            <p>Kl 12:00 - 13:00 i panelrommet.</p>
          </div>
        </div>
        <h2>Hurtig-info:</h2>
        <div class="quick-info">
          <div class="block">
            <p>Adresse: Runarhallen, Klavenesveien 1, 3220 Sandefjord</p>
          </div>
          <div class="block">
            <p>Åpningstider:</p>
            <ul>
              <li>Lørdag 22. juni: 10:00-18:00</li>
              <li>Søndag 23. juni: 10:00-18:00</li>
            </ul>
          </div>
          <div class="block">
            <p>Billettpriser i døren (20 kr påslag):</p>
            <ul>
              <li>Helgepass: voksen: 369,- barn: 169,-</li>
              <li>Dagspass: voksen: 219,- barn: 119,-</li>
            </ul>
          </div>
          <div class="block">
            <p>Billettpriser på nett:</p>
            <ul>
              <li>Helgepass: voksen: 349,- barn: 149,-</li>
              <li>Dagspass: voksen: 199,- barn: 99,-</li>
            </ul>
            <ThinLinkButton
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-early-bird"
            >
              Kjøp
            </ThinLinkButton>
            <p>Du slipper raskere inn med forhåndskjøpte billetter</p>
          </div>
        </div>
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
            søndag. Vi gjør oppmerksom på at det er et påslag på 20 kr ved kjøp
            i døra.
            <br />
            <strong>
              Voksen: 349,-
              <br /> barn: 149,-
            </strong>
            <br />
            <strong>
              Voksen i døra: 369,-
              <br /> barn i døra: 169,-
            </strong>
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
            velge riktig dato i menyen. Vi gjør oppmerksom på at kjøp i døra har
            et påslag på 20 kr.
            <br />
            <strong>
              Voksen: 199,-
              <br /> barn: 99,-
            </strong>
            <strong>
              Voksen i døra: 219,-
              <br /> barn i døra: 119,-
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
      <SponsorContainer />
    </FlexWrap>
  </Layout>
)

export default IndexPage
