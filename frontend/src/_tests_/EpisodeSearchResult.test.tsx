import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CustomMockedProvider } from "./MockGQLData";
import EpisodesSearchResult from "../components/EpisodesSearchResult";
import { mockEpisodesQuery } from "./MockGQLData";

const mockEpisodes = mockEpisodesQuery.result.data.episodes;

test("Renders episodes from gql query", async () => {
  render(
    <CustomMockedProvider>
      <EpisodesSearchResult />
    </CustomMockedProvider>
  );

  expect(
    await screen.findByText(
      mockEpisodes[0].name,
      { exact: false },
      { timeout: 10000 }
    )
  ).toBeInTheDocument();

  mockEpisodes.forEach(async (episode) => {
    expect(
      await screen.findByText(episode.name, { exact: false })
    ).toBeInTheDocument();
  });
  expect(await screen.findByText("No more results")).toBeInTheDocument();
}, 10000);
