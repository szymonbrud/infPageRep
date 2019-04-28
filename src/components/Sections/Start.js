import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";

import YellowRadiusBox from '../yellowRadiusBox/yellowRadiusBox';

import bg from '../../images/bgProfessor.png';
import logo from '../../images/logo.png';
import bgDesktop from '../../images/bgProfessor.png';

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import media from '../../utils/media';

import Tablica from '../Tablica/Tablica';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8vh 25vh 17vh 10vh auto;

  ${media.tablet`
    grid-template-rows: 8vh auto 17vh auto  50vh;
  `}

  ${media.desktop`
    grid-template-columns: 65% auto;
    grid-template-rows: 8vh 35vh 57vmin;    
  `}
`;

const BoxTitle = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;

  ${media.desktop`
    grid-column: 1/2;
    margin-left: 5%;
  `}
`;

const H1 = styled.h1`
  color: ${colors.yellow};
  font-size: 2rem;
  font-weight: ${fonts.medium};
  margin: 0 5% 1%;

  ${media.tablet`
    font-size: 3rem;
  `}
`;

const B = styled.b`
  font-weight: ${fonts.bold};
`;

const P = styled.p`
  font-weight: ${fonts.regular};
  width: 80%;
  margin: 0 10%;
`;

const Img = styled.div`
  background: url('${bg}') no-repeat top;
  background-size: cover; 
  grid-column: 1/3;
  grid-row: 5; 

  ${media.desktop`
    background: url('${bgDesktop}') no-repeat top;
    background-size: cover;
    grid-column: 1/2;
    grid-row: 3;
    width: 70vmin;
    justify-self: center;
  `}
`;


const Logo = styled.div`
  justify-self: center;
  width: 100vmin;
  background: url('${logo}') no-repeat top;
  background-size: cover;
  grid-column: 1/3;
  grid-row: 3/4;

  ${media.tablet`
    width: 60vmin;
  `}

  ${media.desktop`
    display: none;
  `}
`;

const Box = styled(YellowRadiusBox)`
  width: 50%;
  height: 5vh;
  font-size: .9rem;
  margin: 2% 0 0 40%;

  ${media.tablet`
    font-size: 1.3rem;
    border-radius: 50px;
  `}

  ${media.desktop`
    height: 6vmin;
    width: 40%;
  `}
`;

const Box2 = styled(YellowRadiusBox)`
  width: 80%;
  height: 7vh;
  font-size: .8rem;
  margin: 2% 0 0 15%;
  grid-column: 1/3;
  grid-row: 4/5;
  border-radius: 50px;

  ${media.tablet`
    width: 60%;
    height: 5vh;
    font-size: 1.2rem;
    margin: 2% 0 0 35%;
  `}

  ${media.desktop`
    display: none;
  `}
`;

const Start = () => (
  <StaticQuery
    query={graphql`
      query{
        inf {
          stronaGlownas{
            id
            napis
            kiedyNapis
          }
        }
      }
    `}
    
    render={({inf : {stronaGlownas}}) => (
      <>
        <MainWrapper className={'sec1'}>
          <BoxTitle>
            <H1><B>Kółko </B>informatyczne</H1>
            <P>{
              stronaGlownas[0].napis
            }</P>
            <Box>AKTUALNOŚCI</Box>
          </BoxTitle>
          <Logo/>
          <Box2>{stronaGlownas[0].kiedyNapis}</Box2>
          <Img/>
          <Tablica string={stronaGlownas[0].kiedyNapis}/>
        </MainWrapper>
      </>
    )}
  />
);


export default Start;