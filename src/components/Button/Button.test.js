import { render, cleanup } from "@testing-library/react";

import Button from "./Button";

afterEach(cleanup);

describe("Button", () => {
  it("must render as expected", () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
