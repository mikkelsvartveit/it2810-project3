import { render } from "@testing-library/react";
import App from "../App";
import { CustomMockedProvider } from "./MockGQLData";

test("Renders application without errors", () => {
  render(
    <CustomMockedProvider>
      <App />
    </CustomMockedProvider>
  );
  expect(true).toBe(true);
});
