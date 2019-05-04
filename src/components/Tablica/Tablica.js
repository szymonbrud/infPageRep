import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import media from '../../utils/media';

library.add(faAngleDown, faAngleUp);

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

const ButtonToUp = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.yellow};
  border-radius: 50px;
  position: absolute;
  top: -70%;
  right: calc(20% - 45px);
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  
  ::after{
    content: '';
    position: absolute;
    display: block;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    border-radius: 50px;
    opacity: 0;
    transition: opacity .2s;
  }



  :hover{
    ::after{
      opacity: 1;
    }
  }
`;

const ButtonToDown = styled(ButtonToUp)`
  background: ${colors.yellow};
  top: calc(-70% + 45px);
`;

const I = styled(FontAwesomeIcon)`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`;

class Tablica extends Component{

  constructor(){
    super();

    this.state = {
      positTab: 0,//max -20, 8;
    }
  }

  
  toUpFunc = () => {
    console.log('xd')
    // setTimeout(() => {

    // }, 200);
  }


  render(){

    const { string } = this.props;

    return(
      <>
        <Wrapper>
          <P>
            {string}
          </P>
          <ButtonToUp touches={() => this.toUpFunc()}>
            <I icon={faAngleUp}/>
          </ButtonToUp>
          <ButtonToDown>
            <I icon={faAngleDown}/>
          </ButtonToDown>
        </Wrapper>
      </>
    )
  }
};

export default Tablica;