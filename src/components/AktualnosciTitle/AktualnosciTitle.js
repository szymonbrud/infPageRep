import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import media from '../../utils/media';

const H1 = styled.h1`
  margin: 0% 0 0 5%;
  padding-top: 5%;
  color: ${colors.yellow};

  ${media.desktop`
    font-size: 3rem;
  `}

  ${media.bigDesktop`
    font-size: 4rem;
  `}
`;

const P = styled.p`
  margin: 0 0 0 5%;

  ${media.desktop`
    font-size: 2rem;
  `}

  ${media.bigDesktop`
    font-size: 2.8rem;
  `}
`;

const AktualnosciTitle = () => (
  <StaticQuery
    query={graphql`
      query{
        inf{
          sekAktualnoscis{
            id
            gownyTytul
            podTytul
          }
        } 
      }
    `}
    
    render={({inf : {sekAktualnoscis}}) => (
      <>
        <H1>{sekAktualnoscis[0].gownyTytul}</H1>
        <P>{sekAktualnoscis[0].podTytul}</P>
      </>
    )}
  />
);

export default AktualnosciTitle;
