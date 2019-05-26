import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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
  width: 90%;
  justify-content: space-around;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);

  ${media.bigDesktop`
    grid-template-columns: repeat(auto-fill, 500px);
  `}
`;

const OneArticle = styled.div`
  min-height: 43vh;
  width: 90%;
  justify-self: center;
  border: solid 2px ${colors.yellow};
  border-radius: 3px;
  position: relative;
  left: 0%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Img = styled.div`
  flex-shrink: 0;
  width: 92%;
  margin: 4% 4%;
  height: 22vmin;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const H1 = styled.h1`
  margin: 0 0 0 5%;
  font-size: 1.4rem;

  ${media.desktop`
    font-size: 1.8rem;
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
    font-size: 1.5rem;
  `}

  ${media.bigDesktop`
    font-size: 1.8rem;
  `}
`;

class ArticlesDesktop extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            inf {
              coRobimyArtykulies {
                id
                tytul
                wiecej
                obrazek {
                  url
                }
              }
            }
          }
        `}
        render={({ inf: { coRobimyArtykulies } }) => (
          <>
            <MainWrapper>
              <WrapperArticle>
                {coRobimyArtykulies.map(element => (
                  <OneArticle key={element.id}>
                    <Img bgImage={element.obrazek.url} />
                    <H1>{element.tytul}</H1>
                    <P>{element.wiecej}</P>
                  </OneArticle>
                ))}
              </WrapperArticle>
            </MainWrapper>
          </>
        )}
      />
    );
  }
}

export default ArticlesDesktop;
