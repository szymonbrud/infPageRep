import { css } from 'styled-components';

export const sizes = {
  desktopBig2: 1920,
  desktopBig: 1600,
  desktop: 1150,
  tablet: 768,
  phone: 576,
  phoneMedium: 500,
  minPhone2: 400,
  minPhone: 360,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc
}, {});