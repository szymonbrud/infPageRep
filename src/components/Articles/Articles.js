import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";


import { colors } from '../../utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import media from '../../utils/media';

library.add(faAngleDown);

const MainWrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    display: none;
  `}
`;

const ArticleWrapper = styled.div`
  position: relative;
  margin-top: 5vh;
  width: 90%;
  border: 1px solid ${colors.yellow};
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  max-height: 20vh;
  transition: max-height .5s;

  :last-child{
    margin-bottom: 5vh;
  }
`;

const H1 = styled.h1`
  margin: 2% 0 0 2%;
  font-size: 1.4rem;
`; 

const P = styled.p`
  margin: 2% 2%;
`;


const I = styled(FontAwesomeIcon)`
  background: #fff;
  color: ${colors.yellow};
  font-weight: 500;
  font-size: 2.5rem;
  position: absolute;
  bottom: 0;
  right: 3%;
  padding-left: 1%;

  transition: transform .5s .2s;
`;

class Articles extends Component{

  constructor(){
    super();

    this.state = {
      obj: [],
      icons: [],
    }
  }

  zmien = (i) => {
    let zmienna = [];
    zmienna = this.state.obj;
    zmienna[i] = document.querySelector(`.art${i}`);
    this.setState({obj: zmienna});

    let icoZmienna = [];
    icoZmienna = this.state.icons;
    icoZmienna[i] = document.querySelector(`.ico${i}`);
    this.setState({icons: icoZmienna});

    if(zmienna[i].style.maxHeight === '100vh'){
      zmienna[i].style.maxHeight = 20 + 'vh';
      icoZmienna[i].style.transform = "rotate(0deg)";
    } else {
      zmienna[i].style.maxHeight = 100 + 'vh';
      icoZmienna[i].style.transform = "rotate(180deg)";
    }  
  }

  render(){
    return(
    <StaticQuery
        query={graphql`
          query{
            inf{
              coRobimyArtykulies{
                id
                tytul
                wiecej
              }
            }
          }
        `}
        
        render={({inf : {coRobimyArtykulies}}) => (
          <>
            <MainWrapper>
              {
                coRobimyArtykulies.map((article, index) => (
                  <ArticleWrapper key={`art ${index}`} className={`art${index}`}>
                    <H1>{article.tytul}</H1>
                    <P>{article.wiecej}</P>
                    <I icon="angle-down" className={`ico${index}`} onClick={() => this.zmien(index)}></I>
                  </ArticleWrapper>
                ))
              }
            </MainWrapper>
          </>
        )}
      />
    )
  }
}

export default Articles;