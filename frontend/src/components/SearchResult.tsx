import { Grid } from "@mui/material";
import * as React from "react";
import { Character } from "../types";
import { PersonCard } from "./PersonCard";

export interface ISearchResultProps {
  characters: Character[];
}

export default function SearchResult(props: ISearchResultProps) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {props.characters.map((character) => (
        <Grid item>
          <PersonCard
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            location={character.location}
            created={character.created}
            episode={character.episode}
            gender={character.gender}
            id={character.id}
            origin={character.origin}
            type={character.type}
            url={character.url}
          />
        </Grid>
      ))}
    </Grid>
  );
}
