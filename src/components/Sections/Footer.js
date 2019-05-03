import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center ;
  background: ${colors.yellow};
  flex-direction: column;
`;

const P1 = styled.p`
  margin: 5% 0 0 0%;
  color: #000;
  width: 100%;
  font-size: ${({theme}) => theme.size.s};
  font-weight: ${fonts.medium};
  text-align: center;

  ${media.tablet`
    font-size: 1.4rem;
  `}
`;

const P2 = styled.p`
  margin: 2% 0 5% 0;
  color: #fff;
  font-weight: ${fonts.medium};

  ${media.tablet`
    font-size: ${({theme}) => theme.size.xs};
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