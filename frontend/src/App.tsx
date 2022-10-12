import { Box, Typography } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import { Character } from "./types";

function App() {
  const dummyCharacters: Character[] = [
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      created: "2017-11-04T18:48:46.250Z",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/1",
      gender: "male",
      id: 1,
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      type: "",
    },
    {
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      created: "2017-11-04T18:50:21.651Z",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/2",
      gender: "male",
      id: 2,
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      type: "",
    },
    {
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      created: "2017-11-04T18:50:21.651Z",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/2",
      gender: "male",
      id: 2,
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      type: "",
    },
    {
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      created: "2017-11-04T18:50:21.651Z",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/2",
      gender: "male",
      id: 2,
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      type: "",
    },
    {
      name: "Summer Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      created: "2017-11-04T19:09:56.428Z",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/3",
      gender: "female",
      id: 3,
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      type: "",
    },
    {
      id: 388,
      name: "Zeep Xanflorp",
      status: "Alive",
      species: "Humanoid",
      type: "Microverse inhabitant",
      gender: "Male",
      origin: {
        name: "Rick's Battery Microverse",
        url: "https://rickandmortyapi.com/api/location/24",
      },
      location: {
        name: "Rick's Battery Microverse",
        url: "https://rickandmortyapi.com/api/location/24",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/17"],
      url: "https://rickandmortyapi.com/api/character/388",
      created: "2018-01-10T19:56:57.790Z",
    },
  ];

  return (
    <Box marginLeft={"10%"} marginRight={"10%"} alignContent={"center"}>
      <Typography variant="h2" gutterBottom textAlign={"center"}>
        Rick and Morty search boy
      </Typography>
      <SearchResult characters={dummyCharacters} />
    </Box>
  );
}

export default App;
