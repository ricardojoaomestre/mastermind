import { render, cleanup } from '@testing-library/react';

import PinSmall from './PinSmall';

afterEach(cleanup);

describe('PinSmall', () => {
    it("must render as expected", () => {
        const { container } = render(<PinSmall />);
        expect(container.firstChild).toMatchSnapshot();
    });
});