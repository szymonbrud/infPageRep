import React from 'react';
import styled from 'styled-components';
import media from '../../utils/media';
import { colors } from '../../utils/colors';

const Wrapper = styled.div`
  height: 18vw;
  width: 25vw;
  background: ${colors.yellow};
  grid-column: 2/3;
  grid-row: 3;
  position: relative;
  left: 0;
  top: 0;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  
  ${media.desktop`
    display: flex;
  `}

  ::after, ::before{
    content: '';
    width: 2px;
    display: block;
    background: black;
    position: absolute;
    top: -80vh;
    height: 80vh;
  }

  ::after{
    right: 20%;
  }

  ::before{
    left: 20%;
  }
`;

const P = styled.p`
  width: 80%;
  text-align: center;
`;

const Tablica = ({string}) =>(
  <>
    <Wrapper>
      <P>
        {string}
      </P>
    </Wrapper>
  </>
);

export default Tablica;