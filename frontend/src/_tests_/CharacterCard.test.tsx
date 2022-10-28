import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../components/cards";
import { mockCharactersQuery } from "./MockGQLData";
import "@testing-library/jest-dom";
import { ICharacter } from "types";

const samplePerson = mockCharactersQuery.result.data.characters[0];

test("renders person card", async () => {
  render(<CharacterCard {...(samplePerson as unknown as ICharacter)} />);
  expect(
    await screen.findByText(samplePerson.name, { exact: false })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(samplePerson.status, { exact: false })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(samplePerson.species, { exact: false })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(samplePerson.origin.name, { exact: false })
  ).toBeInTheDocument();
});
