import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';

import BasePin from './BasePin';

afterEach(cleanup);

describe('BasePin', () => {
    it("must render as expected", () => {
        const { container } = render(<BasePin />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("must change background color based on prop", () => {
        const { container } = render(<BasePin color="red" />);
        expect(container.firstChild).toHaveStyle("background-color: red");
    });
});