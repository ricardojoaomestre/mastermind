import { render, cleanup } from "@testing-library/react";

import RefreshButtonIcon from "./RefreshButtonIcon";

afterEach(cleanup);

describe("RefreshButtonIcon", () => {
  it("must render as expected", () => {
    const { container } = render(<RefreshButtonIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
