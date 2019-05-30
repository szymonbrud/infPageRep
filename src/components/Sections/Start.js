import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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
  margin-top: -6%;

  ${media.tablet`
    margin: 0;
  `}

  ${media.desktop`
    grid-column: 1/2;
    margin-left: 5%;
  `}
`;

const H1 = styled.h1`
  color: ${colors.yellow};
  font-size: ${({ theme }) => theme.size.m};
  font-weight: ${fonts.medium};
  margin: 0 5% 1%;

  ${media.phone`
    font-size: ${({ theme }) => theme.size.x};
  `}

  ${media.tablet`
    font-size: 48px;
  `}

  ${media.bigDesktop`
    font-size: 5.4rem;
  `}
`;

const B = styled.b`
  font-weight: ${fonts.bold};
`;

const P = styled.p`
  font-weight: ${fonts.regular};
  width: 80%;
  margin: 0 10%;
  font-size: ${({ theme }) => theme.size.xs};

  ${media.phone`
    font-size: ${({ theme }) => theme.size.s};
  `}

  ${media.tablet`
    font-size: 24px;
  `}

  ${media.bigDesktop`
    font-size: 2.8rem;
  `}
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
  font-size: ${({ theme }) => theme.size.xs};
  margin: 2% 0 0 40%;
  border-radius: 50px;

  display: none;

  cursor: pointer;
  :hover {
    background: #ffcb00;
  }

  ${media.desktop`
    height: 6vmin;
    width: 40%;
    display: flex;
  `}

  ${media.bigDesktop`
    font-size: 2.2rem;
  `}
`;

const Box2 = styled(YellowRadiusBox)`
  width: 80%;
  height: 7vh;
  font-size: 1rem;
  margin: 2% 0 0 15%;
  grid-column: 1/3;
  grid-row: 4/5;
  border-radius: 50px;

  ${media.tablet`
    width: 60%;
    height: 5vh;
    margin: 2% 0 0 35%;
    font-size: 18px;
  `}

  ${media.desktop`
    display: none;
  `}
`;

class Start extends Component {
  toParent = () => {
    console.log('tak');
    this.props.clicedMenu(2);
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulStronaGlowna {
              edges {
                node {
                  MainTitle
                  when
                }
              }
            }
          }
        `}
        render={({ allContentfulStronaGlowna: { edges } }) => (
          <>
            <MainWrapper className="sec1">
              <BoxTitle>
                <H1>
                  <B>Kółko </B>informatyczne
                </H1>
                <P>{edges[0].node.MainTitle}</P>
                <Box onClick={() => this.toParent()}>AKTULANOŚCI</Box>
              </BoxTitle>
              <Logo />
              <Box2>{edges[0].node.when}</Box2>
              <Img />
              <Tablica string={edges[0].node.when} />
            </MainWrapper>
          </>
        )}
      />
    );
  }
}

export default Start;
