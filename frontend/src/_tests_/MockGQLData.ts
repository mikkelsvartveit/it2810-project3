import {
  GET_CHARACTER,
  GET_CHARACTERS,
  GET_EPISODE,
  GET_EPISODES,
} from "../gql/queries";
import { MockedProvider } from "@apollo/client/testing";

export const mockedFilteredCharacterQuery = {
  request: {
    query: GET_CHARACTERS,
    variables: {
      page: 1,
      filters: { name: "campaign" },
      sort: {},
    },
  },
  result: {
    data: {
      characters: [
        {
          name: "Chartest1",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
          id: "109",
          rating: null,
          episodeCount: 5,
        },
        {
          name: "Chartest2",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Post-Apocalyptic Earth",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/110.jpeg",
          id: "110",
          rating: null,
          episodeCount: 2,
        },
      ],
    },
  },
};

export const mockedFilteredEpisodeQuery = {
  request: {
    query: GET_EPISODES,
    variables: {
      page: 1,
      filters: { name: "testepisode" },
      sort: {},
    },
  },
  result: {
    data: {
      episodes: [
        {
          air_date: "September 27, 2015",
          episode: "S02E09",
          id: "20",
          name: "Test1",
          rating: null,
          characterCount: 2,
        },
        {
          air_date: "October 4, 2015",
          episode: "S02E10",
          id: "21",
          name: "The Wedding Squanchers",
          rating: null,
          characterCount: 2,
        },
        {
          air_date: "April 1, 2017",
          episode: "S03E01",
          id: "22",
          name: "Test2",
          rating: null,
          characterCount: 2,
        },
      ],
    },
  },
};

export const mockCharactersQuery = {
  request: {
    query: GET_CHARACTERS,
    variables: {
      page: 1,
      filters: {},
      sort: {},
    },
  },
  result: {
    data: {
      characters: [
        {
          name: "Duck With Muscles",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
          id: "109",
          rating: null,
          episodeCount: 5,
        },
        {
          name: "Eli",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Post-Apocalyptic Earth",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/110.jpeg",
          id: "110",
          rating: null,
          episodeCount: 2,
        },
        {
          name: "Eli's Girlfriend",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Post-Apocalyptic Earth",
          },
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/111.jpeg",
          id: "111",
          rating: null,
          episodeCount: 2,
        },
        {
          name: "Eric McMan",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Earth (C-137)",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/112.jpeg",
          id: "112",
          rating: null,
          episodeCount: 5,
        },
        {
          episodeCount: 6,
          name: "Eric Stoltz Mask Morty",
          status: "unknown",
          species: "Human",
          origin: {
            name: "Eric Stoltz Mask Earth",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
          id: "113",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Ethan",
          status: "unknown",
          species: "Human",
          origin: {
            name: "Earth (C-137)",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
          id: "114",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Ethan",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Earth (Replacement Dimension)",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/115.jpeg",
          id: "115",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Evil Beth Clone",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/116.jpeg",
          id: "116",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Evil Jerry Clone",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/117.jpeg",
          id: "117",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Evil Morty",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
          id: "118",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Evil Rick",
          status: "Dead",
          species: "Humanoid",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
          id: "119",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Evil Summer Clone",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/120.jpeg",
          id: "120",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Eyehole Man",
          status: "Alive",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/121.jpeg",
          id: "121",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Fart",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/122.jpeg",
          id: "122",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Fat Morty",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/123.jpeg",
          id: "123",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Father Bob",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Earth (Replacement Dimension)",
          },
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/124.jpeg",
          id: "124",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Flansian",
          status: "Alive",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "unknown",
          image: "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
          id: "125",
          rating: null,
        },
        {
          episodeCount: 6,
          name: "Fleeb",
          status: "unknown",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "unknown",
          image: "https://rickandmortyapi.com/api/character/avatar/126.jpeg",
          id: "126",
          rating: null,
        },
      ],
    },
  },
};

export const mockEpisodesQuery = {
  request: {
    query: GET_EPISODES,
    variables: {
      page: 1,
      filters: {},
      sort: {},
    },
  },
  result: {
    data: {
      episodes: [
        {
          characterCount: 4,
          air_date: "April 1, 2017",
          episode: "S03E01",
          id: "22",
          name: "The Rickshank Rickdemption",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "July 30, 2017",
          episode: "S03E02",
          id: "23",
          name: "Rickmancing the Stone",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "August 6, 2017",
          episode: "S03E03",
          id: "24",
          name: "Pickle Rick",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "August 13, 2017",
          episode: "S03E04",
          id: "25",
          name: "Vindicators 3: The Return of Worldender",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "August 20, 2017",
          episode: "S03E05",
          id: "26",
          name: "The Whirly Dirly Conspiracy",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "August 27, 2017",
          episode: "S03E06",
          id: "27",
          name: "Rest and Ricklaxation",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "September 10, 2017",
          episode: "S03E07",
          id: "28",
          name: "The Ricklantis Mixup",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "September 17, 2017",
          episode: "S03E08",
          id: "29",
          name: "Morty's Mind Blowers",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "September 24, 2017",
          episode: "S03E09",
          id: "30",
          name: "The ABC's of Beth",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "October 1, 2017",
          episode: "S03E10",
          id: "31",
          name: "The Rickchurian Mortydate",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "November 10, 2019",
          episode: "S04E01",
          id: "32",
          name: "Edge of Tomorty: Rick, Die, Rickpeat",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "November 17, 2019",
          episode: "S04E02",
          id: "33",
          name: "The Old Man and the Seat",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "November 24, 2019",
          episode: "S04E03",
          id: "34",
          name: "One Crew Over the Crewcoo's Morty",
          rating: null,
        },
        {
          characterCount: 4,
          air_date: "December 8, 2019",
          episode: "S04E04",
          id: "35",
          name: "Claw and Hoarder: Special Ricktim's Morty",
          rating: null,
        },
      ],
    },
  },
};

export const mockSingleCharacterQuery = {
  request: {
    query: GET_CHARACTER,
    variables: {
      id: "109",
    },
  },
  result: {
    data: {
      character: {
        name: "Duck With Muscles",
        status: "Dead",
        species: "Alien",
        type: "Parasite",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
        episode: [
          {
            id: "15",
            name: "Total Rickall",
            episode: "S02E04",
          },
        ],
        origin: {
          name: "unknown",
        },
        location: {
          name: "Earth (Replacement Dimension)",
        },
        rating: null,
      },
    },
  },
};

export const mockSingleEpisodeQuery = {
  request: {
    query: GET_EPISODE,
    variables: {
      id: "31",
    },
  },
  result: {
    data: {
      episode: {
        air_date: "October 1, 2017",
        created: "2017-11-10T12:56:36.929Z",
        episode: "S03E10",
        id: "31",
        name: "The Rickchurian Mortydate",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          },
          {
            id: "2",
            name: "Morty Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          },
          {
            id: "3",
            name: "Summer Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
          },
          {
            id: "4",
            name: "Beth Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
          },
          {
            id: "5",
            name: "Jerry Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
          },
          {
            id: "244",
            name: "Mr. Poopybutthole",
            image: "https://rickandmortyapi.com/api/character/avatar/244.jpeg",
          },
          {
            id: "247",
            name: "Amy Poopybutthole",
            image: "https://rickandmortyapi.com/api/character/avatar/247.jpeg",
          },
          {
            id: "269",
            name: "Presidentress of The Mega Gargantuans",
            image: "https://rickandmortyapi.com/api/character/avatar/269.jpeg",
          },
          {
            id: "335",
            name: "Steve",
            image: "https://rickandmortyapi.com/api/character/avatar/335.jpeg",
          },
          {
            id: "347",
            name: "President Curtis",
            image: "https://rickandmortyapi.com/api/character/avatar/347.jpeg",
          },
          {
            id: "493",
            name: "Secretary of the Interior",
            image: "https://rickandmortyapi.com/api/character/avatar/493.jpeg",
          },
        ],
        rating: null,
      },
    },
  },
};

export const mockGQLData = [
  mockEpisodesQuery,
  mockCharactersQuery,
  mockedFilteredCharacterQuery,
  mockedFilteredEpisodeQuery,
  mockSingleCharacterQuery,
  mockSingleEpisodeQuery,
];

export class CustomMockedProvider extends MockedProvider {
  static defaultProps = {
    mocks: mockGQLData,
    addTypename: false,
  };
}
