import { describe, expect, it } from "vitest";
import { render, screen, } from "@testing-library/react";

import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "@/app/store";

describe("Home", () => {
  it("should render", () => {
    expect.assertions(1);
    render(
      <div data-testid="root">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
