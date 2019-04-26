import styled from 'styled-components';

import { colors } from '../../utils/colors';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.yellow};
  border-radius: 15px;
  border: 1px solid black;
`;

export default Box;