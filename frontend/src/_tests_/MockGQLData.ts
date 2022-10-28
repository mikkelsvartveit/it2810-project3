import { GET_CHARACTERS, GET_EPISODES } from "../gql/queries";
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
          name: "Campaign1 Manager Morty",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
          id: "61",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Campaign2 Thom",
          status: "Dead",
          species: "Human",
          origin: {
            name: "Gromflom Prime",
          },
          gender: "Male",
          episode: [
            {
              air_date: "December 2, 2013",
              name: "Pilot",
              episode: "S01E01",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
          id: "62",
          location: {
            name: "unknown",
          },
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
          air_date: "December 2, 2013",
          created: "2017-11-10T12:56:33.798Z",
          episode: "S01E01",
          id: "1",
          name: "Test1",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "December 9, 2013",
          created: "2017-11-10T12:56:33.916Z",
          episode: "S01E02",
          id: "2",
          name: "Test2",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
          ],
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
          name: "Campaign Manager Morty",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
          id: "61",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Canklanker Thom",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "Gromflom Prime",
          },
          gender: "Male",
          episode: [
            {
              air_date: "December 2, 2013",
              name: "Pilot",
              episode: "S01E01",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
          id: "62",
          location: {
            name: "unknown",
          },
        },
        {
          name: "Centaur",
          status: "Alive",
          species: "Mythological Creature",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "December 9, 2013",
              name: "Lawnmower Dog",
              episode: "S01E02",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
          id: "63",
          location: {
            name: "Mr. Goldenfold's dream",
          },
        },
        {
          name: "Chris",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "unknown",
          episode: [
            {
              air_date: "July 26, 2015",
              name: "A Rickle in Time",
              episode: "S02E01",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/64.jpeg",
          id: "64",
          location: {
            name: "Earth (Replacement Dimension)",
          },
        },
        {
          name: "Chris",
          status: "Alive",
          species: "Humanoid",
          origin: {
            name: "Rick's Battery Microverse",
          },
          gender: "Male",
          episode: [
            {
              air_date: "August 30, 2015",
              name: "The Ricks Must Be Crazy",
              episode: "S02E06",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/65.jpeg",
          id: "65",
          location: {
            name: "Rick's Battery Microverse",
          },
        },
        {
          name: "Coach Feratu (Balik Alistane)",
          status: "Dead",
          species: "Mythological Creature",
          origin: {
            name: "Earth (Replacement Dimension)",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 13, 2015",
              name: "Big Trouble in Little Sanchez",
              episode: "S02E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/66.jpeg",
          id: "66",
          location: {
            name: "Earth (Replacement Dimension)",
          },
        },
        {
          name: "Collector",
          status: "Alive",
          species: "Alien",
          origin: {
            name: "The Menagerie",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 17, 2017",
              name: "Morty's Mind Blowers",
              episode: "S03E08",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/67.jpeg",
          id: "67",
          location: {
            name: "The Menagerie",
          },
        },
        {
          name: "Colossus",
          status: "Dead",
          species: "Human",
          origin: {
            name: "Post-Apocalyptic Earth",
          },
          gender: "Male",
          episode: [
            {
              air_date: "July 30, 2017",
              name: "Rickmancing the Stone",
              episode: "S03E02",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/68.jpeg",
          id: "68",
          location: {
            name: "Post-Apocalyptic Earth",
          },
        },
        {
          name: "Commander Rick",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "April 1, 2017",
              name: "The Rickshank Rickdemption",
              episode: "S03E01",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
          id: "69",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Concerto",
          status: "Dead",
          species: "Humanoid",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "August 6, 2017",
              name: "Pickle Rick",
              episode: "S03E03",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/70.jpeg",
          id: "70",
          location: {
            name: "unknown",
          },
        },
        {
          name: "Conroy",
          status: "Dead",
          species: "Robot",
          origin: {
            name: "Earth (Replacement Dimension)",
          },
          gender: "unknown",
          episode: [
            {
              air_date: "April 1, 2017",
              name: "The Rickshank Rickdemption",
              episode: "S03E01",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
          id: "71",
          location: {
            name: "Earth (C-137)",
          },
        },
        {
          name: "Cool Rick",
          status: "Alive",
          species: "Human",
          origin: {
            name: "Earth (K-83)",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
          id: "72",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Cop Morty",
          status: "Dead",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/73.jpeg",
          id: "73",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Cop Rick",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
          id: "74",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Courier Flap",
          status: "Alive",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "unknown",
          episode: [
            {
              air_date: "October 4, 2015",
              name: "The Wedding Squanchers",
              episode: "S02E10",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/75.jpeg",
          id: "75",
          location: {
            name: "Planet Squanch",
          },
        },
        {
          name: "Cousin Nicky",
          status: "Dead",
          species: "Alien",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "August 16, 2015",
              name: "Total Rickall",
              episode: "S02E04",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/76.jpeg",
          id: "76",
          location: {
            name: "Earth (Replacement Dimension)",
          },
        },
        {
          name: "Cowboy Morty",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "April 7, 2014",
              name: "Close Rick-counters of the Rick Kind",
              episode: "S01E10",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
          id: "77",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Cowboy Rick",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Male",
          episode: [
            {
              air_date: "April 7, 2014",
              name: "Close Rick-counters of the Rick Kind",
              episode: "S01E10",
            },
            {
              air_date: "September 10, 2017",
              name: "The Ricklantis Mixup",
              episode: "S03E07",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
          id: "78",
          location: {
            name: "Citadel of Ricks",
          },
        },
        {
          name: "Crab Spider",
          status: "Alive",
          species: "Alien",
          origin: {
            name: "Hideout Planet",
          },
          gender: "unknown",
          episode: [
            {
              air_date: "April 7, 2014",
              name: "Close Rick-counters of the Rick Kind",
              episode: "S01E10",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
          id: "79",
          location: {
            name: "Hideout Planet",
          },
        },
        {
          name: "Creepy Little Girl",
          status: "Alive",
          species: "Human",
          origin: {
            name: "unknown",
          },
          gender: "Female",
          episode: [
            {
              air_date: "December 9, 2013",
              name: "Lawnmower Dog",
              episode: "S01E02",
            },
          ],
          image: "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
          id: "80",
          location: {
            name: "Mr. Goldenfold's dream",
          },
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
          air_date: "December 2, 2013",
          created: "2017-11-10T12:56:33.798Z",
          episode: "S01E01",
          id: "1",
          name: "Pilot",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "239",
              name: "Mr. Goldenfold",
              image:
                "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "249",
              name: "Mrs. Sanchez",
              image:
                "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
              location: {
                name: "unknown",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "271",
              name: "Principal Vagina",
              image:
                "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "338",
              name: "Summer Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "December 9, 2013",
          created: "2017-11-10T12:56:33.916Z",
          episode: "S01E02",
          id: "2",
          name: "Lawnmower Dog",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "January 13, 2014",
          created: "2017-11-10T12:56:34.129Z",
          episode: "S01E04",
          id: "4",
          name: "M. Night Shaym-Aliens!",
          characters: [
            {
              gender: "Female",
              id: "338",
              name: "Summer Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "January 20, 2014",
          created: "2017-11-10T12:56:34.236Z",
          episode: "S01E05",
          id: "5",
          name: "Meeseeks and Destroy",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },

            {
              gender: "Male",
              id: "242",
              name: "Mr. Meeseeks",
              image:
                "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
              location: {
                name: "Earth (Fascist Dimension)",
              },
              species: "Humanoid",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "271",
              name: "Principal Vagina",
              image:
                "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "January 27, 2014",
          created: "2017-11-10T12:56:34.339Z",
          episode: "S01E06",
          id: "6",
          name: "Rick Potion #9",
          characters: [
            {
              gender: "Male",
              id: "92",
              name: "Davin",
              image: "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "155",
              name: "Harold",
              image:
                "https://rickandmortyapi.com/api/character/avatar/155.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "175",
              name: "Jerry Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "March 10, 2014",
          created: "2017-11-10T12:56:34.441Z",
          episode: "S01E07",
          id: "7",
          name: "Raising Gazorpazorp",
          characters: [
            {
              gender: "Male",
              id: "258",
              name: "Pawnshop Clerk",
              image:
                "https://rickandmortyapi.com/api/character/avatar/258.jpeg",
              location: {
                name: "Pawn Shop Planet",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "329",
              name: "Snuffles (Snowball)",
              image:
                "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
              location: {
                name: "unknown",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "376",
              name: "Veronica Ann Bennet",
              image:
                "https://rickandmortyapi.com/api/character/avatar/376.jpeg",
              location: {
                name: "Gazorpazorp",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "401",
              name: "Morty Jr's interviewer",
              image:
                "https://rickandmortyapi.com/api/character/avatar/401.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "March 17, 2014",
          created: "2017-11-10T12:56:34.543Z",
          episode: "S01E08",
          id: "8",
          name: "Rixty Minutes",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "207",
              name: "Loggins",
              image:
                "https://rickandmortyapi.com/api/character/avatar/207.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "March 24, 2014",
          created: "2017-11-10T12:56:34.645Z",
          episode: "S01E09",
          id: "9",
          name: "Something Ricked This Way Comes",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "3",
              name: "Summer Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "4",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "April 7, 2014",
          created: "2017-11-10T12:56:34.747Z",
          episode: "S01E10",
          id: "10",
          name: "Close Rick-counters of the Rick Kind",
          characters: [
            {
              gender: "Male",
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "3",
              name: "Summer Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "4",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "5",
              name: "Jerry Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "7",
              name: "Abradolf Lincler",
              image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
              location: {
                name: "Testicle Monster Dimension",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "14",
              name: "Alien Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Alien",
              status: "unknown",
            },

            {
              gender: "Male",
              id: "428",
              name: "Phone-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/428.jpeg",
              location: {
                name: "Earth (Phone Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "429",
              name: "Chair-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/429.jpeg",
              location: {
                name: "Earth (Chair Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "430",
              name: "Chair-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/430.jpeg",
              location: {
                name: "Earth (Chair Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "431",
              name: "Chair-homeless",
              image:
                "https://rickandmortyapi.com/api/character/avatar/431.jpeg",
              location: {
                name: "Earth (Chair Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "432",
              name: "Chair-waiter",
              image:
                "https://rickandmortyapi.com/api/character/avatar/432.jpeg",
              location: {
                name: "Earth (Chair Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "433",
              name: "Doopidoo",
              image:
                "https://rickandmortyapi.com/api/character/avatar/433.jpeg",
              location: {
                name: "unknown",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "434",
              name: "Super Weird Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/434.jpeg",
              location: {
                name: "unknown",
              },
              species: "Human",
              status: "unknown",
            },
          ],
        },
      ],
    },
  },
};

export const mockGQLData = [
  mockEpisodesQuery,
  mockCharactersQuery,
  mockedFilteredCharacterQuery,
  mockedFilteredEpisodeQuery,
];

export class CustomMockedProvider extends MockedProvider {
  static defaultProps = {
    mocks: mockGQLData,
    addTypename: false,
  };
}
