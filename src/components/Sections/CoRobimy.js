import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts'; 
import media from '../../utils/media';
import Articles from '../Articles/Articles';
import ArticlesDesktop from '../Articles/ArticlesDesktop';

const MainWrapper = styled.div`
  width: 100%;
`;

const H1 = styled.div`
  color: ${colors.yellow};
  font-size: ${({theme}) => theme.size.x};
  font-weight: ${fonts.bold};
  margin: 8vh 4% 1%;

  ${media.desktop`
    font-weight: ${fonts.bold};
    margin-left: 4%;
    font-size: 3rem;
  `}

  ${media.bigDesktop`
    font-size: 4rem;
  `}
`;

const P = styled.p`
  font-weight: ${fonts.regular};
  width: 92%;
  margin: 0 4%;
  font-size: 2rem;

  ${media.bigDesktop`
    font-size: 2.8rem;
  `}
`;

const CoRobimy = () => (
  <StaticQuery
    query={graphql`
      query{
        allContentfulCoRobimy {
          edges {
            node {
              title
              moreTitle{
                moreTitle
              }
            }
          }
        }
      }
    `}
    
    render={({allContentfulCoRobimy: { edges }}) => (
      <>
        <MainWrapper className={'sec2'}>
          <H1>{edges[0].node.title}</H1>
          <P>{edges[0].node.moreTitle.moreTitle}</P>
          <Articles/>
          <ArticlesDesktop/>
        </MainWrapper>
      </>
    )}
  />
)

export default CoRobimy;

