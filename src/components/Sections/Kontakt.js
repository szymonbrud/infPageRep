import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import bg from '../../images/wiadomosci.png';

import { contactToMe } from '../../utils/contactToMe';

import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  padding-bottom: 4vh;
`;

const H1 = styled.div`
  margin: 4vh 0 0 5%;
  color: ${colors.yellow};
  font-size: 2.5rem;
  font-weight: ${fonts.bold};
`;

const Img = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const WrapperEmail = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  width: 100%;
`;

const WrapperEmailSchool = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  margin-left: 2%;
`;

const EmailUser = styled.p`
  margin: 4% 0 0 4%;
  padding: 0;
  color: ${colors.yellow};
  font-weight: ${fonts.medium};
`; 

const EmailName = styled.p`
  margin: 0 0 0 4%;
  padding: 0;
  font-weight: ${fonts.regular};
`;

const WrapperForContactToMe = styled.div`
  grid-column: 1/3;
  grid-row:2/3;
  margin: 7vh 0 0 2%;
  min-height: 20vh;
`;

const H1ContactMe = styled.h1`
  font-size: 1rem;
  margin-left: 4%;

  ${media.tablet`
    font-size: 2rem;
  `}
`; 

const EmailNameA = styled.a`
  margin: 0 0 0 4%;
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
                // href={'https://github.com/szymonqqaz'} 
                href={contactToMe[0].kontakt}
                target={'blank'}
              >
                {`${contactToMe[0].kontakt}`}
              </EmailNameA>
              <EmailUser>{contactToMe[1].what_name}</EmailUser>
              <EmailName>{contactToMe[1].kontakt}</EmailName>
            </WrapperForContactToMe>
          </WrapperEmail>
        </MainWrapper>
      </>
    )}
  />
);

export default Kontakt;

