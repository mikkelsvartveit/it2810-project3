import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { CustomMockedProvider } from "./MockGQLData";
import { EpisodesSearchResult } from "../components/searchResults";
import { mockEpisodesQuery } from "./MockGQLData";

const mockEpisodes = mockEpisodesQuery.result.data.episodes;

test("Renders episodes from gql query", async () => {
  render(
    <CustomMockedProvider>
      <EpisodesSearchResult />
    </CustomMockedProvider>
  );

  await waitForElementToBeRemoved(() => screen.queryByTestId("ESearchLoader"));

  mockEpisodes.forEach(async (episode) => {
    expect(
      await screen.findByText(episode.name, { exact: false })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(episode.air_date, { exact: false })
    ).toBeInTheDocument();
  });
  expect(await screen.findByText("No more results")).toBeInTheDocument();
}, 10000);
