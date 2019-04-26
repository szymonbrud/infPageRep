import React, { Component } from 'react';
import styled from 'styled-components';

import NavNames from '../../utils/NavNames';

const MainWrapper = styled.div`
  width: 100%;
  height: 101vh;
  background: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 1500;

  transform: translateX(${({visibleMenuLinks}) => visibleMenuLinks ? -100 : 0}%);
  transition: transform .3s;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const OneElement = styled.p`
  font-size: 2rem;
`;

class MenuLinks extends Component{
  toParent = (number) => {
    this.props.clic(number)
  }

  render(){

    const { visibleMenuLinks } = this.props;
    
    return(
      <>
        <MainWrapper visibleMenuLinks={visibleMenuLinks}>
          {
            NavNames.map((element, index) => (
              <OneElement key={`menu${index}`} onClick={() => this.toParent(index)}>{element}</OneElement>
            ))
          }
        </MainWrapper>
      </>
    )
  }
};

export default MenuLinks;