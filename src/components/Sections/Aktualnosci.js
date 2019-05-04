import React, { Component } from 'react';
import styled from 'styled-components';
import AktualnosciTitle from'../AktualnosciTitle/AktualnosciTitle';

import media from '../../utils/media';

import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);


const MainWrapper = styled.div`
  width: 100%;
`;

const WrapperForInf = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  max-width: 100%;

  ${media.desktop`
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    margin-left: .5%;
    overflow: hidden;
  `}
`;

const OneInf = styled.div`
  position: relative;
  min-height: 20vh;

  grid-column: ${({posit}) => posit % 2 === 0 ? '1/2' : '2/3'};
  grid-row: ${({rowNr}) => rowNr};

  ${media.desktop`
    grid-column: ${({rowNr}) => rowNr};
    grid-row: ${({posit}) => posit % 2 === 0 ? '1/2' : '2/3'};
    width: 30vw;
    padding-bottom: 5%;
    padding-top: 5%;
    transform: translateX(${({posLeft}) => -posLeft}vw);
    transition: transform .2s;

    :first-child{
      margin-left: 12%;      
    }
  `}

  ::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: ${({posit}) => posit % 2 === 0 ? 100 : 0}%;
    height: 100%;
    width: 2px;
    background: black;

    ${media.desktop`
      width: 100%;
      height: 2px;
      left: 0;
      top: ${({posit}) => posit % 2 === 0 ? 100 : 0}%;
    `}
  }

  ::before{
    content: '';
    display: block;
    position: absolute;
    top: calc(5vh - 2vh/2);
    left: calc(${({posit}) => posit % 2 === 0 ? 100 : 0}% - 2vh/2 + 1px);
    height: 2vh;
    width: 2vh;
    border-radius: 50px;
    background: black;

    ${media.desktop`
      top: calc(${({posit}) => posit % 2 === 0 ? 100 : 0}% - 2vh/2 + 1px);
      left: calc(5vh - 2vh/2);
    `}
  }
`;

const H1 = styled.h1`
  width: 90%;
  margin: 2vh 0 0 6%;
  height: 6vh;
  display: flex;
  align-items: center;
  color: ${colors.yellow};

  ${media.tablet`
    font-size: 36px;
  `}

  ${media.desktop`
    font-size: 2.5rem;
    margin: 0 0 0 0%;
  `}

  ${media.bigDesktop`
    font-size: 3.2rem;
  `}
`;

const P = styled.p`
  width: 90%;
  margin: 2% 0 0 8%;

  ${media.desktop`
    font-size: 1.8rem;
    margin: 0 0 0 0%;
  `}

  ${media.bigDesktop`
    font-size: 2.4rem;
  `}
`;

const   I = styled(FontAwesomeIcon)`
  display: block;

  transform: rotate(${({left}) => left ? 90 : -90}deg);
  transform: rotate(${({toDown}) => toDown ? 0 : null}deg);

  ${media.desktop`
    display: block;
  `};

  ${media.desktop`
    font-size: 1.5rem;
  `}

  ${media.bigDesktop`
    font-size: 2rem;
  `}
`;

const CenterBox = styled.div`
  width: calc(100%);
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1.5vh 0 8vh 0px;

  ${media.desktop`
    display: none;
  `}
`;

const BoxForArrow = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  ${media.desktop`
    display: flex;
  `}
`;

const Arrow = styled.div`
  width: 5vh;
  height: 5vh;
  background: ${colors.yellow};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  :first-child{
    margin-right: 10px;
  }

  ::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    opacity: 0;
    transition: opacity .2s;
  }

  :hover::before{
    opacity: 1;
  }

`;

class Aktualnosci extends Component{

  constructor(){
    super();

    this.state = {
      posLeft: 0,
    }
  }

  toLeft = (a) => { 
    const b = a - 3;
    const c = this.state.posLeft / 30;
    const wyn = b - c;
    if(wyn > 0) this.setState({posLeft: this.state.posLeft + 30});
    console.log(this.state.posLeft)
  }

  toRight = () => {
    if(this.state.posLeft <= 0){} else {
      this.setState({posLeft: this.state.posLeft - 30});
    }
  }

  render(){
    return(
      <StaticQuery
        query={graphql`
          query{
            inf{
              poszczegolneAktualnoscis{
                id
                data
                opis
              }
            }
          }
        `}
        
        render={({inf : {poszczegolneAktualnoscis}}) => (
          <>
            <MainWrapper className={'sec3'}>
              <AktualnosciTitle/>
              <WrapperForInf>
                {
                  poszczegolneAktualnoscis.map((element, index) => (
                    <OneInf
                      posit={index}
                      rowNr={`${index+1}/${index + 1}`}
                      key={`information${index}`}
                      posLeft={this.state.posLeft}
                    >
                      <H1>{element.data}</H1>
                      <P>{element.opis}</P>
                    </OneInf>
                  ))
                }
              </WrapperForInf>
              <CenterBox>
                <I toDown icon="angle-down"></I>
              </CenterBox>
              <BoxForArrow>
                <Arrow onClick={() => this.toRight()}>
                  <I left icon="angle-down"></I>
                </Arrow>
                <Arrow onClick={() => this.toLeft(poszczegolneAktualnoscis.length)}>
                  <I icon="angle-down"></I>                  
                </Arrow>
              </BoxForArrow>
            </MainWrapper>
          </>
        )}
      />
    )
  }
  
};

export default Aktualnosci;