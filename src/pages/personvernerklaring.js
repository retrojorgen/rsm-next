import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopMenu from "../components/topMenu"

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
    <SEO title="Personvernerklæring" keywords={[]} />
    <TopMenu position="front" />
    <PageWrap>
      <ContentWrap>
        <p>
          Hvem er vi?
          <br />
          Spillmuseet
          <br />
          Org.nr: 913109139
          <br />
          Paulines vei 7A, 3244 Sandefjord
          <br />
          <a href="mailto:mail@spillmuseet.no">mail@spillmuseet.no</a>
        </p>

        <TopTitle>Personvernerklæring</TopTitle>

        <p>
          Denne personvernerklæringen forteller deg hvordan Spillmuseet samler
          inn og bruker dine personvernopplysninger. Målet er å gi deg en
          overordnet informasjon om hvordan vi behandler personopplysninger.{" "}
        </p>

        <p>
          Spillmuseet er behandlingsansvarlig for vår behandling av
          personopplysninger. Denne erklæringen oppdateres fortløpende. Dersom
          du har spørsmål om hvordan vi behandler dine personopplysninger kan du
          kontakte oss på{" "}
          <a href="mailto:mail@spillmuseet.no">mail@spillmuseet.no</a>.
        </p>

        <p>Når samler vi inn opplysninger? </p>

        <p>
          I all hovedsak behandler vi dine personopplysninger fordi du har kjøpt
          billett, meldt deg som frivillig eller på annet vis bidrar til et
          eller flere av våre arrangementer. Det er du selv som gir oss
          informasjonen når du registrerer deg, eller ved at du er kontaktperson
          for en profesjonell samarbeidspartner. Vi innhenter ikke informasjon
          fra tredjepart.
        </p>

        <p>Hvilken informasjon samler vi inn? </p>

        <p>
          I tillegg til kontaktinformasjon (navn, adresse, telefonnummer) ber vi
          om å få vite t-skjortestørrelse for frivillige, og om du har noen
          allergier eller diettmessige behov du synes det er viktig at vi
          kjenner til. Dette brukes kun til å sørge for at vi kan tilrettelegge
          for dine behov.{" "}
        </p>

        <p>
          Som frivillig registrerer du også hvilket arbeidsområde du kan tenke
          deg å være frivillig på, din tilgjengelighet under arrangementet, hva
          som motiverer deg til å arbeide for oss og eventuelle andre behov som
          for eksempel overnatting. Disse opplysningene trenger vi for å best
          mulig kunne organisere våre frivillige og gjennomføre arrangementet.
        </p>

        <p>Hvilke rettigheter har jeg?</p>

        <p>
          Som registrert har du en rekke rettigheter, slik som retten til innsyn
          i hvilke opplysninger vi har registrert på deg. Du kan også be om at
          vi retter eventuelle feil i opplysningene dine og protestere mot at vi
          behandler dine opplysninger.{" "}
        </p>

        <p>
          Fullstendig oversikt over dine rettigheter finner du på{" "}
          <a href="https://www.datatilsynet.no/rettigheter-og-plikter/den-registrertes-rettigheter/">
            https://www.datatilsynet.no/rettigheter-og-plikter/den-registrertes-rettigheter/
          </a>
          .
        </p>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
