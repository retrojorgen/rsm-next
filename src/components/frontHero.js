import React from "react"
import styled, { keyframes } from "styled-components"
import HeroImage from "../images/retrospillmessen-logo.png"
import TopBackground from "../images/top-background.jpg"
import { LinkButton } from "./Buttons"

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
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 20px;
  position: relative;
  &:before {
    background: url(${TopBackground}) repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
  a {
    color: white;
  }
  img {
    max-width: 100%;
  }
  #frontpage-hero-logo {
    width: 600px;
    animation: ${Appear} 1s ease-in-out forwards;
  }
  #frontpage-hero-info {
    color: white;

    letter-spacing: 1px;
    text-align: center;
    opacity: 0;
    transform: translateY(-4px);
    animation: ${Slidein} 0.4s ease-in-out 0.4s forwards;
    h1 {
      font-size: 40px;
      margin: 0;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
      margin-top: 20px;
    }
    h2 {
      margin: 0;
      color: #f8c90c;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
      font-size: 30px;
    }
    h3 {
      margin: 0;
    }
  }
  .hero-buttons {
    margin-top: 40px;
  }
`
export default props => (
  <FrontPageHeroWrapper>
    <img id="frontpage-hero-logo" src={HeroImage} />
    <div id="frontpage-hero-info">
      <h1>22.-23. juni 2019</h1>
      <h2>Runarhallen, Sandefjord</h2>
      <p>
        For siste nytt og spørsmål besøk oss på{" "}
        <a href="https://www.facebook.com/retrospillmessen">Facebook</a>
      </p>
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
  </FrontPageHeroWrapper>
)
