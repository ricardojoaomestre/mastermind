import styled from 'styled-components';
import BasePin from './BasePin';

const StyledPinSmall = styled(BasePin)`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`;

const PinSmall =  (props) => <StyledPinSmall {...props} />;

export default PinSmall;