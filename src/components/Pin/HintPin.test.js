import { render, cleanup } from "@testing-library/react";

import HintPin from "./HintPin";

afterEach(cleanup);

describe("HintPin", () => {
  it("must render as expected", () => {
    const { container } = render(<HintPin />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
