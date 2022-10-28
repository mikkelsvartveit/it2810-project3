import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-test-renderer";
import App from "../App";
import {
  CustomMockedProvider,
  mockCharactersQuery,
  mockEpisodesQuery,
} from "./MockGQLData";

const mockEpisodes = mockEpisodesQuery.result.data.episodes;
const mockCharacters = mockCharactersQuery.result.data.characters;

describe("Basic full app tests", () => {
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

    await waitForElementToBeRemoved(() => screen.getByTestId("CSearchLoader"));
    expect(await screen.findByText(mockCharacters[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mockEpisodes[0].name)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("EpisodesTab"));
    await waitForElementToBeRemoved(() => screen.getByTestId("ESearchLoader"));
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
    const inputField = (await screen.findByTestId("SearchField")).querySelector(
      "input"
    ) as HTMLInputElement;
    act(() => {
      fireEvent.change(inputField, {
        target: { value: "campaign" },
      });
    });

    expect(
      await screen.findByText("Campaign1 Manager Morty", { exact: false })
    ).toBeInTheDocument();
    expect(screen.queryByText(mockCharacters[0].name)).not.toBeInTheDocument();
    expect(
      await screen.findByText("Campaign2 Thom", { exact: false })
    ).toBeInTheDocument();
  });

  test("Searches for episodes", async () => {
    render(
      <CustomMockedProvider>
        <App />
      </CustomMockedProvider>
    );
    fireEvent.click(screen.getByTestId("EpisodesTab"));
    await waitForElementToBeRemoved(() => screen.getByTestId("ESearchLoader"));

    const inputField = (await screen.findByTestId("SearchField")).querySelector(
      "input"
    ) as HTMLInputElement;
    act(() => {
      fireEvent.change(inputField, {
        target: { value: "testepisode" },
      });
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
