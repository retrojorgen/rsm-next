import styled from "styled-components"

const buttonStyle = `
  display: inline-block;
  border-radius: 10px;
  background: linear-gradient(0deg, #e38900, #fedd00, #fbce00);
  border: 4px solid black;
  overflow: hidden;
  padding: 20px 30px;
  font-weight: bold;
  color: black;
  position: relative;
  &:before {
    content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #a34a00;
  }
`

const Button = styled.button`
  ${buttonStyle}
`

const ThinButton = styled(Button)`
  padding: 10px 20px;
`
const LinkButton = styled.a`
  ${buttonStyle}
  color: black !important;
  text-decoration: none;
`

const ThinLinkButton = styled.a`
  ${buttonStyle}
  color: black !important;
  text-decoration: none;
  padding: 10px 20px;
`

export { Button, ThinButton, LinkButton, ThinLinkButton }
