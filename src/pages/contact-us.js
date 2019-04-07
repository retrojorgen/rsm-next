import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontHero from "../components/frontHero"
import Photo from "../images/whatson-hallen.jpg"
import Background from "../images/contact-background.jpg"
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
      title="Kontakt oss"
      keywords={[`telefonnummer`, `e-postadresse`, `email`]}
    />
    <TopMenu position="front" />
    <PageWrap background={Background}>
      <ContentWrap>
        <TopTitle>Kontakt oss</TopTitle>
        <p>
          Trenger du å kontakte oss for noe? Du når oss alltid på&nbsp;
          <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a>
          . På telefon når du messegeneral Jan Olav Hegvik på{" "}
          <a href="tel:97750047">977 50 047</a>.
        </p>
        <h2>Pressepass</h2>
        <p>
          Vi innfrir gjerne pressepass til etablerte medier, og Youtube-kanaler
          med over 10 000 følgere. For å søke om pressepass ber vi deg kontakte
          oss på{" "}
          <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a>
          . Det er ingen frist på å søke om pressepass, men det kan bli
          vanskeligere å få innvilget raskt jo nærmere messen vi kommer.
          <strong>
            Vi gjør oppmerksom på at vi kun innfrir pressepass til arbeidende
            journalister og fotografer. Ikke følge.
          </strong>
        </p>
        <h2>Stand på Retrospillmessen</h2>
        <p>
          Ønsker du stand på Retrospillmessen 2019? Vi har få plasser igjen, men
          om du vil sikre deg plass anbefaler vi at du snarest tar kontakt på{" "}
          <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a>
          .
        </p>
        <p>
          Prisen på stands er 500,- per m2, og minste stand er 2x2m (2000,-).
        </p>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
