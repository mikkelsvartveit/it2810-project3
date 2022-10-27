import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CustomMockedProvider } from "./MockGQLData";
import CharactersSearchResult from "../components/CharactersSearchResult";
import { mockCharactersQuery } from "./MockGQLData";

const mockCharacters = mockCharactersQuery.result.data.characters;

test("Renders characters from gql query", async () => {
  render(
    <CustomMockedProvider>
      <CharactersSearchResult />
    </CustomMockedProvider>
  );

  expect(
    await screen.findByText(
      mockCharacters[0].name,
      { exact: false },
      { timeout: 10000 }
    )
  ).toBeInTheDocument();

  mockCharacters.forEach(async (character) => {
    expect(
      (await screen.findAllByText(character.name, { exact: false }))[0]
    ).toBeInTheDocument();
  });
}, 10000);
