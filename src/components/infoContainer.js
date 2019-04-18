import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  .row {
    max-width: 1000px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    flex-direction: column;
    @media (min-width: 1000px) {
      flex-direction: row;
      padding: 0 40px 60px 40px;
    }
  }
  &.reverse {
    .container-header {
      @media (min-width: 1000px) {
        margin: 0 -20px 20px 0;
      }
    }
    .row {
      @media (min-width: 1000px) {
        flex-direction: row-reverse;
      }
    }
  }
  .container-illustration {
    display: inline-block;
    margin-top: 0;
    @media (min-width: 1000px) {
      margin-bottom: 40px;
      margin-top: 20px;
    }
    img {
      max-width: 100%;
      display: block;
      margin-bottom: 0;
    }
  }
`

const InfoContainer = styled.div`
  max-width: 600px;
  @media (min-width: 1000px) {
    max-width: 40%;
  }
  p {
    font-size: 20px;
    line-height: 33px;
    padding: 0 20px 0 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
    @media (min-width: 1000px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
  h4 {
    font-size: 22px;
    padding: 0 20px 0 20px;
    margin-bottom: 0;
  }
  .container-header {
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    text-align: center;
    background: #432383;
    padding: 20px;
    margin: 0 0 10px 0;
    position: relative;
    z-index: 3;
    margin-bottom: 40px;
    @media (min-width: 1000px) {
      margin: 0 0 10px -20px;
      text-align: left;
      font-size: 48px;
      margin-bottom: 20px;
    }
  }
  .container-illustration {
    display: inline-block;
    margin-top: 20px;
    @media (min-width: 1000px) {
      margin-bottom: 40px;
      margin-top: 20px;
    }
    img {
      max-width: 100%;
      display: block;
    }
  }
`

const FlexWrap = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  @media (min-width: 1240px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .sidemenu {
    flex: 0 0 240px;
  }
`

export default props => {
  return (
    <Container className={`${props.reverse ? "reverse" : ""}`}>
      <div className="row">
        <div className="container-illustration">
          <img src={props.illustration} />
        </div>
        <InfoContainer>
          <h3 className="container-header">{props.heading}</h3>
          {props.children}
        </InfoContainer>
      </div>
    </Container>
  )
}

export { FlexWrap }
