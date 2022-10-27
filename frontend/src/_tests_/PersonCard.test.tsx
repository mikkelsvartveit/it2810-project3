import { render, screen } from "@testing-library/react";
import PersonCard from "../components/PersonCard";
import { mockCharactersQuery } from "./MockGQLData";
import "@testing-library/jest-dom";
import { ICharacter } from "types";

const samplePerson = mockCharactersQuery.result.data.characters[0];

test("renders person card", async () => {
  render(<PersonCard {...(samplePerson as unknown as ICharacter)} />);
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
    await screen.findByText(samplePerson.location.name, { exact: false })
  ).toBeInTheDocument();
});
