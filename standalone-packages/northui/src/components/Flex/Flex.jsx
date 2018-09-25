import { Flex as BaseFlex } from '@rebass/grid';
import styled from 'styled-components';

const Flex = styled(BaseFlex)`
  ${props => props.theme.rtl && !props.flexDirection && 'flex-direction: row-reverse'}
`;

export default Flex;
