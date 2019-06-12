import React from "react"
import styled, { keyframes } from "styled-components"
import HeroImage from "../images/retrospillmessen-logo.png"
import TopBackground from "../images/top-background.jpg"
import { LinkButton } from "./Buttons"
import bottomBanner from "../images/illustration-hero-min.png"

const AnimateLeft = keyframes`
  0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: -1000px 0px;
    }
`

const Appear = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const Slidein = keyframes`
  0% {
    transform: translateY(-4px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const FrontPageHeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 20px 40px 20px;
  position: relative;
  margin-bottom: 20px;
  @media (min-width: 1000px) {
    height: 100vh;
    padding: 60px 20px;
    margin-bottom: 140px;
  }
  &:before {
    background: url(${TopBackground}) repeat;
    background-size: cover;
    background-position: top center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    filter: hue-rotate(20deg);
  }
  #bottom-banner {
    width: 100%;
    position: absolute;
    bottom: -100px;
    left: 0;
    pointer-events: none;
    display: none;
    @media (min-width: 1000px) {
      display: block;
    }
  }
  a {
    color: white;
  }
  img {
    max-width: 100%;
  }
  #frontpage-hero-info {
    color: white;

    letter-spacing: 1px;
    text-align: center;
    opacity: 0;
    transform: translateY(-4px);
    animation: ${Slidein} 0.4s ease-in-out 0.4s forwards;
    width: 1010px;
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    #frontpage-hero-info-container {
      max-width: 600px;
      text-align: right;
    }
    h1 {
      font-size: 40px;
      margin: 0;
      text-transform: uppercase;
      margin-top: 10px;
      letter-spacing: -1px;
      span {
        font-size: 1.06em;
      }
      @media (min-width: 1000px) {
        font-size: 68px;
      }
    }
    h2 {
      margin: 0;
      color: white;
      text-transform: uppercase;
      font-size: 10px;
      @media (min-width: 1000px) {
        font-size: 19px;
      }
    }
    h3 {
      text-align: left;
      span {
        border-bottom: 3px solid #fbce00;
        color: #fbce00;
        text-transform: uppercase;
        font-size: 8px;
        text-align: left;
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: bold;
        @media (min-width: 1000px) {
          font-size: 12px;
        }
      }
      margin: 0;
    }
  }
  .hero-buttons {
    margin-top: 40px;
  }
`
export default props => (
  <FrontPageHeroWrapper>
    <div id="frontpage-hero-info">
      <div id="frontpage-hero-info-container">
        <h3>
          <span>Norges lengstløpende retromesse er tilbake</span>
        </h3>
        <h1>
          <span>Norges største</span>
          <br />
          retrospillmesse
        </h1>
        <h2>Runarhallen, Sandefjord | 22.-23. juni 2019</h2>
        <div className="hero-buttons">
          <LinkButton
            className="button"
            href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
            target="_blank"
            id="buy-tickets"
          >
            Kjøp billetter
          </LinkButton>
        </div>
      </div>
    </div>
    <img src={bottomBanner} id="bottom-banner" />
  </FrontPageHeroWrapper>
)
