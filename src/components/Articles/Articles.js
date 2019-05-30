import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import media from '../../utils/media';
import { colors } from '../../utils/colors';

library.add(faAngleDown);

const MainWrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  display: grid;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}

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

  justify-self: center;

  :last-child {
    margin-bottom: 5vh;
  }

  ${media.tablet`
    margin-top: 3vh;
  `}
`;

const H1 = styled.h1`
  margin: 2% 0 0 2%;
  font-size: 1.4rem;

  ${media.tablet`
    font-size: 24px;
  `}
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

  transition: transform 0.5s;
`;

class Articles extends Component {
  constructor() {
    super();

    this.state = {
      ArticleState: [],
      icons: []
    };
  }

  componentDidMount() {
    this.getAndSetHeightArt();
  }

  getAndSetHeightArt = () => {
    const Art = [];
    const icons = [];

    for (let i = 0; i >= -1; i++) {
      if (document.querySelector(`.art${i}`) === null) {
        break;
      } else {
        Art[i] = document.querySelector(`.art${i}`);
        icons[i] = document.querySelector(`.ico${i}`);
        if (Art[i].offsetHeight > 160) {
          Art[i].style.height = '160px';
        } else {
          icons[i].style.display = 'none';
        }
      }
    }
    this.setState({ ArticleState: Art, icons });
  };

  changeArt = i => {
    const { ArticleState, icons } = this.state;
    console.log(icons);

    if (ArticleState[i].style.height === '160px') {
      ArticleState[i].style.height = 'auto';
      icons[i].style.transform = 'rotate(180deg)';
    } else {
      ArticleState[i].style.height = '160px';
      icons[i].style.transform = 'rotate(0deg)';
    }
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulCoRobimyArtykuly{
              edges{
                node{
                  id
                  title
                  more{
                    more
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulCoRobimyArtykuly: { edges } }) => (
          <>
            <MainWrapper>
              {edges.map((article, index) => (
                <ArticleWrapper
                  key={`art ${article.node.id}`}
                  className={`art${index}`}
                >
                  <H1>{article.node.title}</H1>
                  <P>{article.node.more.more}</P>
                  <I
                    icon="angle-down"
                    className={`ico${index}`}
                    onClick={() => this.changeArt(index)}
                  />
                </ArticleWrapper>
              ))}
            </MainWrapper>
          </>
        )}
      />
    );
  }
}

export default Articles;
