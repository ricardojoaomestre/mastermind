import styled from 'styled-components';
import Pin from './Pin';
import { IoCheckmarkOutline } from 'react-icons/io5';

const PinIcon = styled(IoCheckmarkOutline)`
    width: 20px;
    height: 20px;
    stroke: #FFFFFF;
`;

const SelectablePin =  ({selected, ...otherProps}) => (
    <Pin {...otherProps} >
        {selected && <PinIcon />}
    </Pin>
);

export default SelectablePin;