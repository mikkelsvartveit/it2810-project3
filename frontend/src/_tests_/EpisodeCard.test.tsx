import { render, screen } from "@testing-library/react";
import { EpisodeCard } from "../components/cards";
import { mockEpisodesQuery } from "./MockGQLData";
import "@testing-library/jest-dom";
import { IEpisode } from "types";

const sampleEpisode = mockEpisodesQuery.result.data.episodes[0];

test("renders person card", async () => {
  render(<EpisodeCard {...(sampleEpisode as unknown as IEpisode)} />);
  expect(
    await screen.findByText(sampleEpisode.name, { exact: false })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(
      sampleEpisode.episode
        .replace("S", "Season ")
        .replace("E", ", Episode ")
        .replaceAll(" 0", " "),
      { exact: false }
    )
  ).toBeInTheDocument();
  expect(
    await screen.findByText(sampleEpisode.air_date, { exact: false })
  ).toBeInTheDocument();
});
