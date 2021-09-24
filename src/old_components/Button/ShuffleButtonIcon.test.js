import { render, cleanup } from "@testing-library/react";

import ShuffleButtonIcon from "./ShuffleButtonIcon";

afterEach(cleanup);

describe("ShuffleButtonIcon", () => {
  it("must render as expected", () => {
    const { container } = render(<ShuffleButtonIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
