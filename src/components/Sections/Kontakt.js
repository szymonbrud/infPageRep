import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import bg from '../../images/wiadomosci.png';
import bg2 from '../../images/contact.png';

import { contactToMe } from '../../utils/contactToMe';

import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  padding-bottom: 4vh;
  padding-top: 10vh;
`;

const H1 = styled.div`
  margin: 0 0 0 5%;
  color: ${colors.yellow};
  font-size: 2.5rem;
  font-weight: ${fonts.bold};

  ${media.desktop`
    font-size: 3rem;
  `}

  ${media.bigDesktop`
    font-size: 4rem;
  `}
`;

const Img = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  ${media.desktop`
    background-image: url('${bg2}');
    background-repeat: no-repeat;
    background-size: contain;
    height: 50vh;
    width: 50%;
    margin-left: 50%;
    position: absolute;
  `}
`;

const WrapperEmail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  font-size: 1.5rem;
  margin-left: 4%;

  ${media.bigDesktop`
    font-size: 2.3rem;
  `}
`;

const WrapperEmailSchool = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  margin-left: 2%;

  ${media.desktop`
    grid-column: 1/2;
    grid-row: 1/2;
    margin: 0;
  `}
`;

const EmailUser = styled.p`
  margin: 4% 0 0 2%;
  padding: 0;
  color: ${colors.yellow};
  font-weight: ${fonts.medium};

  ${media.desktop`

  `}
`; 

const EmailName = styled.p`
  margin: 0 0 0 2%;
  padding: 0;
  font-weight: ${fonts.regular};
`;

const WrapperForContactToMe = styled.div`
  grid-column: 1/3;
  grid-row:2/3;
  margin: 7vh 0 0 2%;
  min-height: 20vh;

  ${media.desktop`
    grid-column: 1/2;
    grid-row: 2/3;
    margin: 0;
  `}
`;

const H1ContactMe = styled.h1`
  font-size: ${({theme}) => theme.size.xs};;
  margin-left: 2%;

  ${media.tablet`
    font-size: 2rem;
  `}

  ${media.desktop`
    font-size: 1.5rem;
  `}

  ${media.bigDesktop`
    font-size: 2.3rem;
  `}
`; 

const EmailNameA = styled.a`
  margin: 0 0 0 2%;
  padding: 0;
  font-weight: ${fonts.regular};
  text-decoration: none;
  color: black;
`;

const Kontakt = () => (
  <StaticQuery
    query={graphql`
      query{
        inf{
          kontakts{
            id
            kogoEmaim
            email
          }
        } 
      }
    `}
      
    render={({inf : {kontakts}}) => (
      <>
        <MainWrapper className={'sec4'}>
          <H1>Kontakt</H1>
          <Img/>
          <WrapperEmail>
            <WrapperEmailSchool>
              {
                kontakts.map(element => (
                  <div key={element.kogoEmaim}>
                    <EmailUser>{`${element.kogoEmaim}:`}</EmailUser>
                    <EmailName>{element.email}</EmailName>
                  </div>
                ))
              }
            </WrapperEmailSchool>
            <WrapperForContactToMe>
              <H1ContactMe>Strona napisana oraz zaprojektowana przez: Szymona Bruda</H1ContactMe>
              <EmailUser>{`${contactToMe[0].what_name}: `}</EmailUser>
              <EmailNameA
                href={contactToMe[0].kontakt}
                target={'blank'}
              >
                {`${contactToMe[0].kontakt}`}
              </EmailNameA>
            </WrapperForContactToMe>
          </WrapperEmail>
        </MainWrapper>
      </>
    )}
  />
);

export default Kontakt;