import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import PersonCard from "./PersonCard";
import { useGetCharacters } from "../gql/queries";

export default function SearchResult() {
  const { pageNr, setPageNr, data, loading } = useGetCharacters();

  const [scrollData, setScrollData] = useState<ICharacter[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  useEffect(() => {
    if (!data) return;
    if (data.characters.length === 0) {
      setHasMoreValue(false);

      // Edge case: if no results, empty scrollData
      // TODO: Should not be possible with correct impl of filter and task description
      if (pageNr === 1) {
        setScrollData([]);
      }
      return;
    }
    // if not a full page, set hasMore to false
    if (data.characters.length < 18) {
      setHasMoreValue(false);
    }
    if (pageNr > 1) {
      setScrollData((s) => s.concat(data.characters));
    } else {
      setScrollData(data.characters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Function that is triggered when user scrolls towards the end of the list
  const loadScrollData = () => {
    if (!data || loading) return;
    setPageNr((pageNr) => pageNr + 1);
  };

  return (
    <>
      {scrollData ? (
        <>
          <InfiniteScroll
            dataLength={scrollData.length}
            next={loadScrollData}
            hasMore={hasMoreValue}
            scrollThreshold={0.9}
            loader={<LinearProgress />}
            style={{ overflow: "unset" }}
            endMessage={
              <h1 style={{ textAlign: "center" }}>
                {scrollData.length === 0 ? "No results" : "No more results"}
              </h1>
            }
          >
            <Grid container spacing={3} justifyContent={"center"}>
              {scrollData.map((character) => (
                <Grid item xs={12} md={6} lg={4} key={character.id}>
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
                    rating={character.rating}
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
