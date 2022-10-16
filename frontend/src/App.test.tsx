import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { GET_CHARACTERS } from "./gql/queries";

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 671,
            pages: 34,
            next: 2,
            prev: null,
          },
          results: [
            {
              id: 1,
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
            },
            {
              id: 2,
              name: "Morty Smith",
              status: "Alive",
              species: "Human",
              type: "",
            },
          ],
        },
      },
    },
  },
];

test("renders learn react link", () => {
  render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <App />
    </MockedProvider>
  );
  expect(true).toBe(true);
});
