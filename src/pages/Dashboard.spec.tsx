import { describe, expect, it } from "vitest";
import { render, screen, } from "@testing-library/react";

import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import { store } from "@/app/store";

describe("Dashboard", () => {
  it("should render", () => {
    expect.assertions(1);
    render(
      <div data-testid="root">
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
