import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  capitalize,
} from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import { PersonCard } from "./PersonCard";

export interface ISearchResultProps {
  characters: ICharacter[];
}

export default function SearchResult(props: ISearchResultProps) {
  const data = props.characters
  const [scrollData, setScrollData] = useState<ICharacter[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  // Function that is triggered when user scrolls towards the end of the list
  const loadScrollData = async () => {
    try {
      setScrollData(data.slice(0, scrollData.length + 3));
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function for checking if there are more cards to load
  const handleOnRowsScrollEnd = () => {
    if (scrollData) {
      if (scrollData.length < data.length) {
        setHasMoreValue(true);
        loadScrollData();
      } else {
        setHasMoreValue(false);
      }
    }
  };

  return (
    <>
      {scrollData ? (
        <>
          <InfiniteScroll
            dataLength={scrollData.length}
            next={handleOnRowsScrollEnd}
            hasMore={hasMoreValue}
            scrollThreshold={1}
            loader={<LinearProgress />}
            style={{ overflow: "unset" }}
            endMessage={<h1>The end, there are no more results </h1>}
          >
            <Grid container spacing={4}>
              {scrollData.map((character) => (
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
          </InfiniteScroll>
        </>
      ) : (
        <CircularProgress color={"success"} size={200} />
      )}
    </>
  );
}
