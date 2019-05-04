import React, { Component } from 'react';
import styled from 'styled-components';

import { fonts } from '../../utils/fonts';
import { colors } from '../../utils/colors';
 
import NavNames from '../../utils/NavNames';
import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: none;
  align-items: center;

  ${media.desktop`
    display: flex;
  `}

  ::before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    opacity: ${({visibleMenu}) => visibleMenu ? '1' : '0'};
    transition: opacity .2s;
  }
`;

const WrapperElement = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const OneElemnt = styled.p`
  font-size: 1.4rem;
  font-weight: ${fonts.medium};
  position: relative;
  cursor: pointer;

  ::before, ::after{
    display: block;
    content: '';
    width: 120%;
    height: 2px;
    border-radius: 50px;
    position: absolute;
    bottom: -10%; 
    left: -10%;
    transition: transform .2s;
  }

  ::after{
    background: black; 
    transform: scaleX(0);
  }

  ::before{
    background: ${colors.yellow}; 
    transform: scaleX(${({whereWeAreHere}) => whereWeAreHere ? '1' : '0'});
  }

  :hover::after{
    transform: scaleX(1);
  }

  :hover::before{
    transform: scaleX(0);
  }

  ${media.bigDesktop`
    font-size: 2rem;
  `}
`;

const H1 = styled.h1`
  margin: 0;
  display: block;
  color: ${colors.yellow};
  font-size: 2rem;
  font-weight: ${fonts.medium}; 
  position: relative;
  left: 5%;

  transition: transform .2s .3s;
  transform: translateX(${({visibleMenu}) => visibleMenu ? 0 : -200}%);

  ${media.bigDesktop`
    font-size: 2.6rem;
  `}
`;

const B = styled.b`
  font-weight: ${fonts.bold};
`;


class MenuDesktop extends Component{

  toParent = (number) => {
    this.props.clicedMenu(number);
  }

  render(){

    const { whereWeAreHere, visibleMenu } = this.props;

    return(
      <>
        <MainWrapper visibleMenu={visibleMenu}>
          <H1 visibleMenu={visibleMenu}><B>Kółko </B>informatyczne</H1>
          <WrapperElement>
            {
              NavNames.map((element, index) => (
                <OneElemnt onClick={() => this.toParent(index)} key={element} whereWeAreHere={index + 1 === whereWeAreHere ? true : false}>{element}</OneElemnt>
              ))
            }
          </WrapperElement>
        </MainWrapper>
      </>
    )
  }
}

export default MenuDesktop;