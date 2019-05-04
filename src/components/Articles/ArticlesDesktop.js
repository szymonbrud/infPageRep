import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";

import { colors } from '../../utils/colors';

import media from '../../utils/media';

const MainWrapper = styled.div`
  min-height: 70vh;
  min-width: 100%;
  display: none;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    display: flex;
  `}
`;

const WrapperArticle = styled.div`
  margin-top: 10vh;
  width: 100%;
  justify-content: space-around;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const OneArticle = styled.div`
  width: 22%;
  min-height: 10vh;
  max-height: 60vh;
  border: solid 2px ${colors.yellow};
  border-radius: 3px;
  flex-shrink: 0;
  position: relative;
  left: 0%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  overflow: hidden;
`;

const Img = styled.div`
  flex-shrink: 0;
  width: 92%;
  margin: 4% 4%;
  height: 20vmin;
  background-image: url(${({bgImage}) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const H1 = styled.h1`
  margin: 0 0 0 5%;
  font-size: 1.1rem;

  ${media.desktop`
    font-size: 1.5rem;
  `}

  ${media.bigDesktop`
    font-size: 2rem;
  `}
`;

const P = styled.p`
  font-size: 1rem;
  margin: 5% 0 0 5%;
  width: 90%;
  padding-bottom: 10%;

  ${media.desktop`
    font-size: 1.2rem;
  `}

  ${media.bigDesktop`
    font-size: 1.8rem;
  `}
`;


class ArticlesDesktop extends Component{
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
                obrazek {
                  status
                  updatedAt
                  createdAt
                  id
                  handle
                  fileName
                  height
                  width
                  size
                  mimeType
                  url
                }
              }
            }
          }
        `}
        
        render={({inf : {coRobimyArtykulies}}) => (
          <>
            <MainWrapper>
              <WrapperArticle>
                {
                  coRobimyArtykulies.map((element, index) => (
                    <OneArticle key={element.tytul}>
                      <Img bgImage={coRobimyArtykulies[0].obrazek.url}></Img>
                      <H1>{element.tytul}</H1>
                      <P>{element.wiecej}</P>
                    </OneArticle>
                  ))
                }
                
              </WrapperArticle>
            </MainWrapper>
          </>
        )}
      />
    )
  }
}


export default ArticlesDesktop;