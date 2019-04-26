import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.yellow};
  flex-direction: column;
`;

const P1 = styled.p`
  color: #000;
  width: 98%;
  margin-left: 2%;
  font-size: 1.1rem;
  font-weight: ${fonts.medium};
  text-align: center;
`;

const P2 = styled.p`
  color: #fff;
  font-weight: ${fonts.medium};
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