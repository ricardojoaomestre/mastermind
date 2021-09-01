import styled from 'styled-components';
import BasePin from './BasePin';

const StyledPin = styled(BasePin)`
    width: 42px;
    height: 42px;
    border-radius: 21px;
`;

const Pin =  (props) => <StyledPin {...props} />;

export default Pin;