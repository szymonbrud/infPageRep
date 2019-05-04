import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center ;
  background: ${colors.yellow};
  flex-direction: column;

`;

const P1 = styled.p`
  margin: 30px 0 0 0%;
  color: #000;
  width: 100%;
  font-size: ${({theme}) => theme.size.s};
  font-weight: ${fonts.medium};
  text-align: center;

  ${media.bigDesktop`
    font-size: ${({theme}) => theme.size.m};
  `}
`;

const P2 = styled.p`
  margin: 20px 0 30px 0;
  color: #fff;
  font-size: ${({theme}) => theme.size.s};
  font-weight: ${fonts.medium};

  ${media.bigDesktop`
    font-size: ${({theme}) => theme.size.m};
  `}
`;

const Footer = () => (
  <>
    <MainWrapper>
      <P1>Kółko odbywa się w gimnazjum 24 w krakowie</P1>
      <P2>W każdy poniedziąłek o 14: 10 po 7 lekcji</P2>
    </MainWrapper>
  </>
);

export default Footer;