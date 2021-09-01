import { render, cleanup } from '@testing-library/react';

import HintPin from './HintPin';

afterEach(cleanup);

describe('HintPin', () => {
    it("must render as expected", () => {
        const { container } = render(<HintPin />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("must change background to #000000 when value is correct", () => {
        const { container } = render(<HintPin value="correct" />);
        expect(container.firstChild).toHaveStyle("background-color: #000000");
    });

    it("must change background to #D9DADC when value is semicorrect", () => {
        const { container } = render(<HintPin value="semicorrect" />);
        expect(container.firstChild).toHaveStyle("background-color: #D9DADC");
    });

    it("must change background to transparent when value undefined or unknown", () => {
        let { container } = render(<HintPin />);
        expect(container.firstChild).toHaveStyle("background-color: transparent");
    });
});