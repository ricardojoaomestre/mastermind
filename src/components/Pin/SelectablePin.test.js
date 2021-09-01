import { render, cleanup } from '@testing-library/react';

import SelectablePin from './SelectablePin';
import { IoCheckmarkOutline } from 'react-icons/io5';
afterEach(cleanup);

describe('SelectablePin', () => {
    it("must render as expected", () => {
        const { container } = render(<SelectablePin />);
        expect(container.firstChild).toMatchSnapshot();
    });

    xit("must display an icon when selected", () => {   
    });
});