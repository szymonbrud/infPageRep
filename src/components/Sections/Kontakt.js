import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import bg from '../../images/wiadomosci.png';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
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
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  width: 100%;
`;

const emailUser = styled.p`

`;

const emailName = styled.p`
  
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

          </WrapperEmail>
        </MainWrapper>
      </>
    )}
  />
);

export default Kontakt;

