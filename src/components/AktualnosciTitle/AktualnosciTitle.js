import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const H1 = styled.h1`
  margin: 5% 0 0 5%;
  padding-top: 5%;
  color: ${colors.yellow};
`;

const P = styled.p`
  margin: 1% 0 0 5%;
  font-weight: ${fonts.medium};
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
