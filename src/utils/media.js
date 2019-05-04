import { css } from 'styled-components';

export const sizes = {
  bigDesktop: 1600,
  desktop: 1150,
  tablet: 768,
  phone: 360,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc
}, {});