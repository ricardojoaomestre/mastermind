import { render, cleanup } from '@testing-library/react';

import Pin from './Pin';

afterEach(cleanup);

describe('Pin', () => {
    it("must render as expected", () => {
        const { container } = render(<Pin />);
        expect(container.firstChild).toMatchSnapshot();
    });
});