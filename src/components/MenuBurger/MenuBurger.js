import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { fonts } from "../../utils/fonts"
import media from "../../utils/media"

const MainWrapper = styled.div`
  height: 7vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2000;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #fff;

    opacity: ${({ visibleMenu }) => (visibleMenu ? 1 : 0)};
    opacity: ${({ a }) => (a ? 0 : null)};

    transition: opacity 0.3s;
  }

  ${media.desktop`
    display: none;
  `}
`

const Wrapper = styled.button`
  width: 38px;
  height: 24px;
  position: relative;
  background: none;
  border: none;

  z-index: 3000;
`

const OneElement = styled.div`
  width: 100%;
  height: 4px;
  background: black;
  border-radius: 50px;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    display: block;
    background: black;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  background: ${({ a }) => (a ? "white" : "black")};

  ::before {
    top: -9px;

    transform: translateY(${({ a }) => (a ? 9 : 0)}px)
      rotate(${({ a }) => (a ? 45 : 0)}deg);
    transition: transform 0.2s;
  }

  ::after {
    bottom: -9px;

    transform: translateY(${({ a }) => (a ? -9 : 0)}px)
      rotate(${({ a }) => (a ? -45 : 0)}deg);
    transition: transform 0.2s;
  }
`

const H1 = styled.h1`
  position: relative;
  color: ${colors.yellow};
  font-size: ${({ theme }) => theme.size.m};
  font-weight: ${fonts.medium};
  z-index: 2000;
  margin-right: 10%;

  ${media.tablet`
    margin-right: 45%;
    font-size: 36px;
  `}

  transition: transform .2s .3s;
  transform: translateX(${({ visibleMenu }) => (visibleMenu ? 0 : -200)}%);
  transform: translateX(${({ a }) => (a ? 0 : null)}%);
`

const B = styled.b`
  font-weight: ${fonts.bold};
`

class MenuBurger extends Component {
  changeVisibleMenu = () => {
    if (this.props.visibleMenuLinks === false) {
      this.setState({ visibleMenuLinks: true })
      this.toParentVisibleLinks(true)
      this.toParent(true)
    } else {
      this.setState({ visibleMenuLinks: false })
      this.toParentVisibleLinks(false)
      this.toParent(false)
    }
  }

  toParent = a => {
    this.props.Parent(a)
  }

  toParentVisibleLinks = a => {
    this.props.VisibleToParent(a)
  }

  render() {
    const { visibleMenu, visibleMenuLinks } = this.props

    return (
      <>
        <MainWrapper visibleMenu={visibleMenu} a={visibleMenuLinks}>
          <H1 visibleMenu={visibleMenu} a={visibleMenuLinks}>
            <B>Kółko </B>informatyczne
          </H1>
          <Wrapper onClick={() => this.changeVisibleMenu()}>
            <OneElement a={visibleMenuLinks} />
          </Wrapper>
        </MainWrapper>
      </>
    )
  }
}

export default MenuBurger
