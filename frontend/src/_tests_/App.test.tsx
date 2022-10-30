import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import {
  CustomMockedProvider,
  mockCharactersQuery,
  mockEpisodesQuery,
} from "./MockGQLData";

const mockEpisodes = mockEpisodesQuery.result.data.episodes;
const mockCharacters = mockCharactersQuery.result.data.characters;

describe("Full app functionality", () => {
  test("Renders application without errors", () => {
    render(
      <CustomMockedProvider>
        <App />
      </CustomMockedProvider>
    );
    expect(true).toBe(true);
  });

  test("Tabs switches between characters and episodes-list", async () => {
    render(
      <CustomMockedProvider>
        <App />
      </CustomMockedProvider>
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("CSearchLoader")
    );
    expect(await screen.findByText(mockCharacters[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mockEpisodes[0].name)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("EpisodesTab"));
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("ESearchLoader")
    );
    expect(await screen.findByText(mockEpisodes[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mockCharacters[0].name)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("CharactersTab"));
    expect(await screen.findByText(mockCharacters[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mockEpisodes[0].name)).not.toBeInTheDocument();
  });

  test("Searches for characters", async () => {
    render(
      <CustomMockedProvider>
        <App />
      </CustomMockedProvider>
    );

    // eslint-disable-next-line
    const inputField = (await screen.findByTestId("SearchField")).querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(inputField, {
      target: { value: "campaign" },
    });

    expect(
      await screen.findByText("Chartest1", { exact: false })
    ).toBeInTheDocument();
    expect(screen.queryByText(mockCharacters[0].name)).not.toBeInTheDocument();
    expect(
      await screen.findByText("Chartest2", { exact: false })
    ).toBeInTheDocument();
  });

  test("Searches for episodes", async () => {
    render(
      <CustomMockedProvider>
        <App />
      </CustomMockedProvider>
    );
    fireEvent.click(screen.getByTestId("EpisodesTab"));
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("ESearchLoader")
    );

    // eslint-disable-next-line
    const inputField = (await screen.findByTestId("SearchField")).querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(inputField, {
      target: { value: "testepisode" },
    });

    expect(
      await screen.findByText("Test1", { exact: false })
    ).toBeInTheDocument();
    expect(screen.queryByText(mockEpisodes[0].name)).not.toBeInTheDocument();
    expect(
      await screen.findByText("Test2", { exact: false })
    ).toBeInTheDocument();
  });
});
