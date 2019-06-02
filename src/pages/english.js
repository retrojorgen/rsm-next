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
`

const SubSectionTitle = styled.h3`
  display: block;
  border-left: 4px solid #fbce00;
  color: #fbce00;
  padding-left: 20px;
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
        <TopTitle>Information in English</TopTitle>
        <p>
          Planning a trip from abroad to Retrospillmessen? How awesome! You
          should know that travelling to Norway is very safe, and most local
          talk English fluent.
        </p>
        <p>
          If you have any questions at all while planning your stay, or during,
          please do contact us via{" "}
          <a href="https://facebook.com/retrospillmessen">
            facebook (facebook.com/retrospillmessen)
          </a>
          , via e-mail{" "}
          <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a>{" "}
          or by calling Jan Olav Hegvik{" "}
          <a href="tel:+47 977 50 047">+47 977 50 047</a>.
        </p>
        <SubSectionTitle>Travel and hotel</SubSectionTitle>
        <p>
          The convention is held in the town of Sandefjord, in the Vestfold
          region. The closest airport is Torp International Airport. Travel from
          the airport to center of Sandefjord is around 20 minutes by bus or
          taxi.
        </p>
        <p>
          Most of our guests stay at{" "}
          <a
            href="https://www.scandichotels.com/hotels/norway/sandefjord/scandic-park-sandefjord?cmpid=ppc_BH2nd&s_kwcid=AL!7589!3!245108004177!e!!g!!scandic%20park%20sandefjord&gclid=Cj0KCQiA5Y3kBRDwARIsAEwloL7XiSEqBJmjYYtjex9GZDkAp00On-AvVXf7jW63AR90H3gjt5dGHc0aArCqEALw_wcB"
            target="new_window"
          >
            Scandic Park Sandefjord
          </a>
          . The biggest hotel in Sandefjord. But, several hotels in Sandefjord
          are available through hotels.com.
        </p>
        <p>
          The convention is located around 20 minutes from the town center by
          car. We recommend either grabbing a taxi, or using local busses. These
          can be located via Google services. <br />
          <br />
          The address of the convention is Runarhallen, Klavenesveien 20.
        </p>
        <SubSectionTitle>Competitions and panels</SubSectionTitle>
        <p>
          Planning to participate in competitions or tournaments? We recommend
          having a look at our competitions page. It is in Norwegian, but can
          easily be translated via{" "}
          <a href="https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fwww.retrospillmessen.no%2Ftournaments">
            Google Translate
          </a>
          .
        </p>
        <p>
          At Retrospillmessen we have a dedicated panel / Q&A room. Most of the
          panels are in English, and you can find out via our{" "}
          <a href="https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fwww.retrospillmessen.no%2Fprogram">
            program
          </a>{" "}
          page which panels are international.
        </p>
      </ContentWrap>
    </PageWrap>
  </Layout>
)
