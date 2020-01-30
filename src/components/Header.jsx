import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 2em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 30px;
      height: 3px;
      background: transparent;
      right: 50%;
      margin-right: -15px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <AniLink fade to="/">
        <Logo />
      </AniLink>
      <HeaderLinks>
        <AniLink activeClassName="Link--is-active" fade to="/code">
          Code
        </AniLink>
        <AniLink activeClassName="Link--is-active" fade to="/work">
          Work
        </AniLink>
        <AniLink activeClassName="Link--is-active" fade to="/about">
          About
        </AniLink>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
