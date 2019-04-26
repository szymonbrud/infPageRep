import React from 'react';
import styled from 'styled-components';
import AktualnosciTitle from'../AktualnosciTitle/AktualnosciTitle';

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
`;

const OneInf = styled.div`
  position: relative;
  min-height: 20vh;

  grid-column: ${({posit}) => posit % 2 === 0 ? '1/2' : '2/3'};
  grid-row: ${({rowNr}) => rowNr};

  ::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: ${({posit}) => posit % 2 === 0 ? 100 : 0}%;
    height: 100%;
    width: 2px;
    background: black;
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
  }
`;

const H1 = styled.h1`
  width: 90%;
  margin: 2vh 0 0 6%;
  height: 6vh;
  display: flex;
  align-items: center;
  color: ${colors.yellow};
`;

const P = styled.p`
  width: 90%;
  margin: 2% 0 0 8%;
`;

const I = styled(FontAwesomeIcon)`

`;

const CenterBox = styled.div`
  width: calc(100%);
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1.5vh 0 8vh 1px;
`;

const Aktualnosci = () => (
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
                >
                  <H1>{element.data}</H1>
                  <P>{element.opis}</P>
                </OneInf>
              ))
            }
          </WrapperForInf>
          <CenterBox>
            <I icon="angle-down"></I>
          </CenterBox>
        </MainWrapper>
      </>
    )}
  />
);

export default Aktualnosci;