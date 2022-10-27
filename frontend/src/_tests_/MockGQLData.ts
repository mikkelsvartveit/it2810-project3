import { GET_CHARACTERS, GET_EPISODES } from "../gql/queries";
import { MockedProvider } from "@apollo/client/testing";

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
              gender: "unknown",
              id: "35",
              name: "Bepisian",
              image: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
              location: {
                name: "Bepis 9",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "62",
              name: "Canklanker Thom",
              image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
              location: {
                name: "unknown",
              },
              species: "Alien",
              status: "Dead",
            },
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
              id: "127",
              name: "Frank Palicky",
              image:
                "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "144",
              name: "Glenn",
              image:
                "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
              location: {
                name: "Interdimensional Customs",
              },
              species: "Alien",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "158",
              name: "Hookah Alien",
              image:
                "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
              location: {
                name: "Interdimensional Customs",
              },
              species: "Alien",
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
            {
              gender: "Female",
              id: "179",
              name: "Jessica",
              image:
                "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "181",
              name: "Jessica's Friend",
              image:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
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
            {
              gender: "Male",
              id: "394",
              name: "Davin",
              image:
                "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "395",
              name: "Greebybobe",
              image:
                "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
              location: {
                name: "Worldender's lair",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "435",
              name: "Pripudlian",
              image:
                "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Alien",
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
            {
              gender: "Female",
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "46",
              name: "Bill",
              image: "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
              location: {
                name: "unknown",
              },
              species: "Animal",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "63",
              name: "Centaur",
              image: "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "80",
              name: "Creepy Little Girl",
              image: "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Human",
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
            {
              gender: "Female",
              id: "221",
              name: "Melissa",
              image:
                "https://rickandmortyapi.com/api/character/avatar/221.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
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
              id: "246",
              name: "Mrs. Pancakes",
              image:
                "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "304",
              name: "Scary Brandon",
              image:
                "https://rickandmortyapi.com/api/character/avatar/304.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "305",
              name: "Scary Glenn",
              image:
                "https://rickandmortyapi.com/api/character/avatar/305.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "306",
              name: "Scary Terry",
              image:
                "https://rickandmortyapi.com/api/character/avatar/306.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
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
            {
              gender: "Male",
              id: "396",
              name: "Scary Teacher",
              image:
                "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
              location: {
                name: "Mr. Goldenfold's dream",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "397",
              name: "Fido",
              image:
                "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
              location: {
                name: "Snuffles' Dream",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "398",
              name: "Accountant dog",
              image:
                "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
              location: {
                name: "Snuffles' Dream",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "405",
              name: "Trunkphobic suspenders guy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
          ],
        },
        {
          air_date: "December 16, 2013",
          created: "2017-11-10T12:56:34.022Z",
          episode: "S01E03",
          id: "3",
          name: "Anatomy Park",
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
              id: "12",
              name: "Alexander",
              image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Female",
              id: "17",
              name: "Annie",
              image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "45",
              name: "Bill",
              image: "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "96",
              name: "Tuberculosis",
              image: "https://rickandmortyapi.com/api/character/avatar/96.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "97",
              name: "Gonorrhea",
              image: "https://rickandmortyapi.com/api/character/avatar/97.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "98",
              name: "Hepatitis A",
              image: "https://rickandmortyapi.com/api/character/avatar/98.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "99",
              name: "Hepatitis C",
              image: "https://rickandmortyapi.com/api/character/avatar/99.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "100",
              name: "Bubonic Plague",
              image:
                "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "unknown",
              id: "101",
              name: "E. Coli",
              image:
                "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Disease",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "108",
              name: "Dr. Xenon Bloom",
              image:
                "https://rickandmortyapi.com/api/character/avatar/108.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Humanoid",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "112",
              name: "Eric McMan",
              image:
                "https://rickandmortyapi.com/api/character/avatar/112.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "114",
              name: "Ethan",
              image:
                "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "169",
              name: "Jacob",
              image:
                "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
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
            {
              gender: "Female",
              id: "186",
              name: "Joyce Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/186.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "201",
              name: "Leonard Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/201.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "268",
              name: "Poncho",
              image:
                "https://rickandmortyapi.com/api/character/avatar/268.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "300",
              name: "Roger",
              image:
                "https://rickandmortyapi.com/api/character/avatar/300.jpeg",
              location: {
                name: "Anatomy Park",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "302",
              name: "Ruben",
              image:
                "https://rickandmortyapi.com/api/character/avatar/302.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
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
            {
              gender: "Male",
              id: "356",
              name: "Tom Randolph",
              image:
                "https://rickandmortyapi.com/api/character/avatar/356.jpeg",
              location: {
                name: "Earth (C-137)",
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
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "87",
              name: "Cynthia",
              image: "https://rickandmortyapi.com/api/character/avatar/87.jpeg",
              location: {
                name: "Zigerion's Base",
              },
              species: "Alien",
              status: "Dead",
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
            {
              gender: "Female",
              id: "179",
              name: "Jessica",
              image:
                "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "181",
              name: "Jessica's Friend",
              image:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "191",
              name: "Kevin",
              image:
                "https://rickandmortyapi.com/api/character/avatar/191.jpeg",
              location: {
                name: "Zigerion's Base",
              },
              species: "Alien",
              status: "Dead",
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
              gender: "Male",
              id: "241",
              name: "Mr. Marklovitz",
              image:
                "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "270",
              name: "Prince Nebulon",
              image:
                "https://rickandmortyapi.com/api/character/avatar/270.jpeg",
              location: {
                name: "Zigerion's Base",
              },
              species: "Alien",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "337",
              name: "Stu",
              image:
                "https://rickandmortyapi.com/api/character/avatar/337.jpeg",
              location: {
                name: "Zigerion's Base",
              },
              species: "Alien",
              status: "Dead",
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
              gender: "Female",
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "41",
              name: "Big Boobed Waitress",
              image: "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
              location: {
                name: "Fantasy World",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "89",
              name: "Dale",
              image: "https://rickandmortyapi.com/api/character/avatar/89.jpeg",
              location: {
                name: "Giant's Town",
              },
              species: "Mythological Creature",
              status: "Dead",
            },
            {
              gender: "Female",
              id: "116",
              name: "Evil Beth Clone",
              image:
                "https://rickandmortyapi.com/api/character/avatar/116.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "117",
              name: "Evil Jerry Clone",
              image:
                "https://rickandmortyapi.com/api/character/avatar/117.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Female",
              id: "120",
              name: "Evil Summer Clone",
              image:
                "https://rickandmortyapi.com/api/character/avatar/120.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Dead",
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
            {
              gender: "Male",
              id: "193",
              name: "King Jellybean",
              image:
                "https://rickandmortyapi.com/api/character/avatar/193.jpeg",
              location: {
                name: "Fantasy World",
              },
              species: "Mythological Creature",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "238",
              name: "Mr. Booby Buyer",
              image:
                "https://rickandmortyapi.com/api/character/avatar/238.jpeg",
              location: {
                name: "Fantasy World",
              },
              species: "Mythological Creature",
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
            {
              gender: "Female",
              id: "303",
              name: "Samantha",
              image:
                "https://rickandmortyapi.com/api/character/avatar/303.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "326",
              name: "Slippery Stair",
              image:
                "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Genderless",
              id: "333",
              name: "Stair Goblin",
              image:
                "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
              location: {
                name: "Fantasy World",
              },
              species: "Mythological Creature",
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
            {
              gender: "Female",
              id: "343",
              name: "Tammy Guetermann",
              image:
                "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "399",
              name: "Tiny-persons advocacy group lawyer",
              image:
                "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
              location: {
                name: "Giant's Town",
              },
              species: "Mythological Creature",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "400",
              name: "Giant Judge",
              image:
                "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
              location: {
                name: "Giant's Town",
              },
              species: "Mythological Creature",
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
              gender: "Female",
              id: "38",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "58",
              name: "Brad",
              image: "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "82",
              name: "Cronenberg Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "83",
              name: "Cronenberg Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "unknown",
            },
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
            {
              gender: "Female",
              id: "179",
              name: "Jessica",
              image:
                "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "181",
              name: "Jessica's Friend",
              image:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "216",
              name: "MC Haps",
              image:
                "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "234",
              name: "Morty Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/234.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Dead",
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
              gender: "Female",
              id: "251",
              name: "Nancy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
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
              gender: "Male",
              id: "293",
              name: "Rick Sanchez",
              image:
                "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Dead",
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
            {
              gender: "Female",
              id: "343",
              name: "Tammy Guetermann",
              image:
                "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "394",
              name: "Davin",
              image:
                "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "Dead",
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
              id: "59",
              name: "Brad Anderson",
              image: "https://rickandmortyapi.com/api/character/avatar/59.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Female",
              id: "151",
              name: "Gwendolyn",
              image:
                "https://rickandmortyapi.com/api/character/avatar/151.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Robot",
              status: "unknown",
            },
            {
              gender: "Female",
              id: "168",
              name: "Jackie",
              image:
                "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
              location: {
                name: "Gazorpazorp",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "211",
              name: "Ma-Sha",
              image:
                "https://rickandmortyapi.com/api/character/avatar/211.jpeg",
              location: {
                name: "Gazorpazorp",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "230",
              name: "Morty Jr.",
              image:
                "https://rickandmortyapi.com/api/character/avatar/230.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
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
              id: "20",
              name: "Ants in my Eyes Johnson",
              image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "28",
              name: "Attila Starwar",
              image: "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "29",
              name: "Baby Legs",
              image: "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "34",
              name: "Benjamin",
              image: "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Poopybutthole",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "37",
              name: "Beth Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
              location: {
                name: "Earth (C-500A)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "54",
              name: "Bobby Moynihan",
              image: "https://rickandmortyapi.com/api/character/avatar/54.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "88",
              name: "Cynthia",
              image: "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "91",
              name: "David Letterman",
              image: "https://rickandmortyapi.com/api/character/avatar/91.jpeg",
              location: {
                name: "Earth (C-500A)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "129",
              name: "Fulgora",
              image:
                "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "134",
              name: "Garmanarnar",
              image:
                "https://rickandmortyapi.com/api/character/avatar/134.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "136",
              name: "Gazorpazorpfield",
              image:
                "https://rickandmortyapi.com/api/character/avatar/136.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "145",
              name: "Glenn",
              image:
                "https://rickandmortyapi.com/api/character/avatar/145.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "153",
              name: "Hamster In Butt",
              image:
                "https://rickandmortyapi.com/api/character/avatar/153.jpeg",
              location: {
                name: "Hamster in Butt World",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Genderless",
              id: "157",
              name: "Hole in the Wall Where the Men Can See it All",
              image:
                "https://rickandmortyapi.com/api/character/avatar/157.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "unknown",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "176",
              name: "Celebrity Jerry",
              image:
                "https://rickandmortyapi.com/api/character/avatar/176.jpeg",
              location: {
                name: "Earth (C-500A)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "183",
              name: "Johnny Depp",
              image:
                "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
              location: {
                name: "Earth (C-500A)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "184",
              name: "Jon",
              image:
                "https://rickandmortyapi.com/api/character/avatar/184.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "195",
              name: "Kristen Stewart",
              image:
                "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
              location: {
                name: "Earth (C-500A)",
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
            {
              gender: "Male",
              id: "214",
              name: "Man Painted Silver Who Makes Robot Noises",
              image:
                "https://rickandmortyapi.com/api/character/avatar/214.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "222",
              name: "Michael Denny and the Denny Singers",
              image:
                "https://rickandmortyapi.com/api/character/avatar/222.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "250",
              name: "Mrs. Sullivan",
              image:
                "https://rickandmortyapi.com/api/character/avatar/250.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Genderless",
              id: "266",
              name: "Piece of Toast",
              image:
                "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "unknown",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "277",
              name: "Real Fake Doors Salesman",
              image:
                "https://rickandmortyapi.com/api/character/avatar/277.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "279",
              name: "Regular Legs",
              image:
                "https://rickandmortyapi.com/api/character/avatar/279.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "314",
              name: "Shmlamantha Shmlicelli",
              image:
                "https://rickandmortyapi.com/api/character/avatar/314.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "315",
              name: "Shmlangela Shmlobinson-Shmlower",
              image:
                "https://rickandmortyapi.com/api/character/avatar/315.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "316",
              name: "Shmlona Shmlobinson",
              image:
                "https://rickandmortyapi.com/api/character/avatar/316.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "317",
              name: "Shmlonathan Shmlower",
              image:
                "https://rickandmortyapi.com/api/character/avatar/317.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "318",
              name: "Shmlony Shmlicelli",
              image:
                "https://rickandmortyapi.com/api/character/avatar/318.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "351",
              name: "Three Unknown Things",
              image:
                "https://rickandmortyapi.com/api/character/avatar/351.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "358",
              name: "Tophat Jones",
              image:
                "https://rickandmortyapi.com/api/character/avatar/358.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Mythological Creature",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "367",
              name: "Trunk Man",
              image:
                "https://rickandmortyapi.com/api/character/avatar/367.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "370",
              name: "Two Guys with Handlebar Mustaches",
              image:
                "https://rickandmortyapi.com/api/character/avatar/370.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "373",
              name: "Unmuscular Michael",
              image:
                "https://rickandmortyapi.com/api/character/avatar/373.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "402",
              name: "Guy from The Bachelor",
              image:
                "https://rickandmortyapi.com/api/character/avatar/402.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "403",
              name: "Corn detective",
              image:
                "https://rickandmortyapi.com/api/character/avatar/403.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Humanoid",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "404",
              name: "Michael Jackson",
              image:
                "https://rickandmortyapi.com/api/character/avatar/404.jpeg",
              location: {
                name: "Earth (Phone Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "405",
              name: "Trunkphobic suspenders guy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "406",
              name: "Spiderweb teddy bear",
              image:
                "https://rickandmortyapi.com/api/character/avatar/406.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Animal",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "407",
              name: "Regular Tyrion Lannister",
              image:
                "https://rickandmortyapi.com/api/character/avatar/407.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "408",
              name: "Quick Mystery Presenter",
              image:
                "https://rickandmortyapi.com/api/character/avatar/408.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "409",
              name: "Mr. Sneezy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/409.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "410",
              name: "Two Brothers",
              image:
                "https://rickandmortyapi.com/api/character/avatar/410.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "411",
              name: "Alien Mexican Armada",
              image:
                "https://rickandmortyapi.com/api/character/avatar/411.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Alien",
              status: "unknown",
            },
            {
              gender: "unknown",
              id: "412",
              name: "Giant Cat Monster",
              image:
                "https://rickandmortyapi.com/api/character/avatar/412.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Animal",
              status: "unknown",
            },
            {
              gender: "Female",
              id: "413",
              name: "Old Women",
              image:
                "https://rickandmortyapi.com/api/character/avatar/413.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "414",
              name: "Trunkphobic guy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/414.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "415",
              name: "Pro trunk people marriage guy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/415.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "416",
              name: "Muscular Mannie",
              image:
                "https://rickandmortyapi.com/api/character/avatar/416.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "417",
              name: "Baby Legs Chief",
              image:
                "https://rickandmortyapi.com/api/character/avatar/417.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "418",
              name: "Mrs. Sullivan's Boyfriend",
              image:
                "https://rickandmortyapi.com/api/character/avatar/418.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
              species: "Human",
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
              gender: "Female",
              id: "88",
              name: "Cynthia",
              image: "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "192",
              name: "King Flippy Nips",
              image:
                "https://rickandmortyapi.com/api/character/avatar/192.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "240",
              name: "Mr. Goldenfold",
              image:
                "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "243",
              name: "Mr. Needful",
              image:
                "https://rickandmortyapi.com/api/character/avatar/243.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "251",
              name: "Nancy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "272",
              name: "Principal Vagina",
              image:
                "https://rickandmortyapi.com/api/character/avatar/272.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "307",
              name: "Scroopy Noopers",
              image:
                "https://rickandmortyapi.com/api/character/avatar/307.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "419",
              name: "Plutonian Hostess",
              image:
                "https://rickandmortyapi.com/api/character/avatar/419.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "420",
              name: "Plutonian Host",
              image:
                "https://rickandmortyapi.com/api/character/avatar/420.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "421",
              name: "Rich Plutonian",
              image:
                "https://rickandmortyapi.com/api/character/avatar/421.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "422",
              name: "Rich Plutonian",
              image:
                "https://rickandmortyapi.com/api/character/avatar/422.jpeg",
              location: {
                name: "Pluto",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Genderless",
              id: "826",
              name: "Butter Robot",
              image:
                "https://rickandmortyapi.com/api/character/avatar/826.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Robot",
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
              id: "15",
              name: "Alien Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Alien",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "18",
              name: "Antenna Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "19",
              name: "Antenna Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
              location: {
                name: "unknown",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "21",
              name: "Aqua Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "22",
              name: "Aqua Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "27",
              name: "Artist Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "39",
              name: "Beth Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "53",
              name: "Blue Shirt Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "77",
              name: "Cowboy Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "78",
              name: "Cowboy Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "unknown",
              id: "79",
              name: "Crab Spider",
              image: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
              location: {
                name: "Hideout Planet",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "82",
              name: "Cronenberg Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "83",
              name: "Cronenberg Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
              location: {
                name: "Earth (C-137)",
              },
              species: "Cronenberg",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "84",
              name: "Cult Leader Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
              location: {
                name: "Hideout Planet",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "85",
              name: "Cyclops Morty",
              image: "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "86",
              name: "Cyclops Rick",
              image: "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "103",
              name: "Doofus Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "113",
              name: "Eric Stoltz Mask Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "118",
              name: "Evil Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "119",
              name: "Evil Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "152",
              name: "Hammerhead Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Humanoid",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "164",
              name: "Insurance Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "177",
              name: "Jerry Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "209",
              name: "Long Sleeved Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/209.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "215",
              name: "Maximums Rickimus",
              image:
                "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
              location: {
                name: "Rick's Memories",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "232",
              name: "Morty Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
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
              id: "274",
              name: "Quantum Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
              location: {
                name: "Rick's Memories",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "290",
              name: "Rick Sanchez",
              image:
                "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "294",
              name: "Ricktiminus Sancheziminius",
              image:
                "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
              location: {
                name: "Rick's Memories",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "295",
              name: "Riq IV",
              image:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "298",
              name: "Robot Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/298.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Robot",
              status: "unknown",
            },
            {
              gender: "Male",
              id: "299",
              name: "Robot Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/299.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Robot",
              status: "unknown",
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
              gender: "Male",
              id: "330",
              name: "Solicitor Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Female",
              id: "339",
              name: "Summer Smith",
              image:
                "https://rickandmortyapi.com/api/character/avatar/339.jpeg",
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "349",
              name: "The Scientist Formerly Known as Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/349.jpeg",
              location: {
                name: "unknown",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "359",
              name: "Tortured Morty",
              image:
                "https://rickandmortyapi.com/api/character/avatar/359.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              species: "Human",
              status: "unknown",
            },
            {
              gender: "Female",
              id: "381",
              name: "Woman Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
              location: {
                name: "unknown",
              },
              species: "Alien",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "389",
              name: "Zeta Alpha Rick",
              image:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
              location: {
                name: "Rick's Memories",
              },
              species: "Human",
              status: "Dead",
            },
            {
              gender: "Male",
              id: "405",
              name: "Trunkphobic suspenders guy",
              image:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "424",
              name: "Pizza-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/424.jpeg",
              location: {
                name: "Earth (Pizza Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "425",
              name: "Pizza-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/425.jpeg",
              location: {
                name: "Earth (Pizza Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
            },
            {
              gender: "Female",
              id: "426",
              name: "Greasy Grandma",
              image:
                "https://rickandmortyapi.com/api/character/avatar/426.jpeg",
              location: {
                name: "Greasy Grandma World",
              },
              species: "Human",
              status: "Alive",
            },
            {
              gender: "Male",
              id: "427",
              name: "Phone-person",
              image:
                "https://rickandmortyapi.com/api/character/avatar/427.jpeg",
              location: {
                name: "Earth (Phone Dimension)",
              },
              species: "Humanoid",
              status: "Alive",
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

export const mockGQLData = [mockEpisodesQuery, mockCharactersQuery];

export class CustomMockedProvider extends MockedProvider {
  static defaultProps = {
    mocks: mockGQLData,
    addTypename: false,
  };
}
