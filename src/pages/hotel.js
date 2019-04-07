import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import RsmHotelPhoto from "../images/retrospillmessen-hotell.jpg"
import RsmHotelBackground from "../images/hotel-background.jpg"
import TopMenu from "../components/topMenu"

import { ThinLinkButton } from "../components/Buttons"

import styled from "styled-components"

import InfoContainer from "../components/infoContainer"

const PageWrap = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  padding-top: 100px;
  background-size: 100% auto;
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
      title="Hotell"
      keywords={[`overnatting`, `hotell`, `Park Sandefjord`]}
    />
    <TopMenu position="front" />
    <PageWrap background={RsmHotelBackground}>
      <ContentWrap>
        <TopTitle>Overnatting</TopTitle>
        <p>
          Planlegger du å bli hele helgen på Retrospillmessen? Da bør du bo på
          Sandefjords største hotell,
          <a
            href="https://www.scandichotels.com/hotels/norway/sandefjord/scandic-park-sandefjord?cmpid=ppc_BH2nd&s_kwcid=AL!7589!3!245108004177!e!!g!!scandic%20park%20sandefjord&gclid=Cj0KCQiA5Y3kBRDwARIsAEwloL7XiSEqBJmjYYtjex9GZDkAp00On-AvVXf7jW63AR90H3gjt5dGHc0aArCqEALw_wcB"
            target="new_window"
          >
            Scandic Park
          </a>
          , med den beste hotellfrokosten i fylket. <br />
          <br />
          <i>Den er seriøst verdt hver krone!</i>.
          <br />
          <br />
          Husk å bruke bestillingskoden <strong>BRSM210619</strong> når du
          bestiller på nett. Spesialprisene våre får du også ved å ringe{" "}
          <a href="tel:33447423">33 44 74 23</a> eller booke via e-postadressen{" "}
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
      </ContentWrap>
    </PageWrap>
  </Layout>
)
