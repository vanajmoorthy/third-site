import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBehance } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import colors from "styles/colors"

const paddingStyle = {
  padding: "10px",
  display: "inline",
}

const iconsDisplay = {
  display: "inline",
}

const iconStyle = {
    color: "black",
}

const Icons = () => (
  <div style={iconsDisplay}>
    <div style={paddingStyle}>
      <a style={iconStyle} href="https://github.com/vanajmoorthy" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
    <div style={paddingStyle}>
      <a style={iconStyle} href="https://www.instagram.com/vanajmoorthy/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
    </div>
    <div style={paddingStyle}>
      <a style={iconStyle} href="https://behance.net/vanajmoorthy" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faBehance} size="lg" />
      </a>
    </div>
    <div style={paddingStyle}>
      <a style={iconStyle} href="mailto:vanajmoorthy@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  </div>
)

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <Link to="/"></Link>
    <FontAwesomeIcon icon="spinner" fixedWidth />
    <Icons></Icons>
    <FooterAuthor>© 2019 — Vanaj Moorthy</FooterAuthor>
  </FooterContainer>
)

export default Footer
