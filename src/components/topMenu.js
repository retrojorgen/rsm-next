import React from "react"
import styled from "styled-components"
import logo from "../images/logo-white.svg"
import { Link } from "gatsby"
import { ThinLinkButton } from "./Buttons"

const TopMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-100%);
  transition: all 0.4s ease-in-out;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &.sticky {
    background-color: #0a0c55;
  }
  &.transition-in {
    transform: translateY(0);
  }
  .logo {
    width: 142px;
    flex: 0 0 142px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  li {
    position: relative;
    margin-bottom: 0;
    &.border-hover {
      cursor: pointer;
      &:after {
        position: absolute;
        bottom: 8px;
        opacity: 0;
        left: 10%;
        width: 80%;

        height: 3px;
        content: "";
        background-color: #fbce00;
        transition: all 0.1s ease-in-out;
      }
      &:hover {
        &:after {
          bottom: 12px;
          opacity: 1;
        }
      }
      :last-child {
        padding-right: 20px;
      }
    }

    .regular {
      display: block;
      padding: 20px;
      text-transform: uppercase;
      font-size: 16px;
      text-decoration: none;
      white-space: nowrap;
    }
  }
`
export default class TopMenu extends React.Component {
  state = {
    sticky: false,
  }
  handleScroll() {
    console.log("handling ascroll")
    if (window.pageYOffset >= 50) {
      this.setState({ sticky: true })
    } else {
      this.setState({ sticky: false })
    }
  }

  componentDidMount() {
    window.onscroll = this.handleScroll.bind(this)
  }
  render() {
    let sticky = this.state.sticky
    return (
      <TopMenuWrapper className={`transition-in ${sticky ? "sticky" : ""}`}>
        <Link to="/">
          <img
            id="frontpage-hero-logo"
            alt="logo"
            src={logo}
            className="logo"
          />
        </Link>
        <ul>
          <li className="border-hover">
            <Link className="regular" to="whats-on">
              Hva skjer
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="tournaments">
              Turneringer
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="guests">
              Gjester
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="vendors">
              Utstillere
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="hotel">
              Overnatting
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="travel">
              Reise
            </Link>
          </li>
          <li className="border-hover">
            <Link className="regular" to="contact-us">
              Kontakt oss
            </Link>
          </li>
          <li>
            <ThinLinkButton href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs">
              billetter
            </ThinLinkButton>
          </li>
        </ul>
      </TopMenuWrapper>
    )
  }
}
