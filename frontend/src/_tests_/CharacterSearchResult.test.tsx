import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { CustomMockedProvider } from "./MockGQLData";
import { CharactersSearchResult } from "../components/searchResults";
import { mockCharactersQuery } from "./MockGQLData";

const mockCharacters = mockCharactersQuery.result.data.characters;

test("Renders characters from gql query", async () => {
  render(
    <CustomMockedProvider>
      <CharactersSearchResult />
    </CustomMockedProvider>
  );

  await waitForElementToBeRemoved(() => screen.queryByTestId("CSearchLoader"));

  mockCharacters.forEach(async (character) => {
    expect(
      (await screen.findAllByText(character.name, { exact: false }))[0]
    ).toBeInTheDocument();
  });
}, 10000);
