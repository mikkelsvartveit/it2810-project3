import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import { CharacterCard } from "../cards/";
import { useGetCharacters } from "../../gql/queries";

export function CharactersSearchResult() {
  const { pageNr, setPageNr, isLastPage, setIsLastPage, data, loading } =
    useGetCharacters();

  const [scrollData, setScrollData] = useState<ICharacter[]>([]);

  useEffect(() => {
    if (!data) return;
    if (data.characters.length === 0) {
      setIsLastPage(true);

      // Edge case: if no results, empty scrollData
      // TODO: Should not be possible with correct impl of filter and task description
      if (pageNr === 1) {
        setScrollData([]);
      }
      return;
    }

    // if not a full page, set isLastPage to true
    if (data.characters.length < 18) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
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
            hasMore={!isLastPage}
            scrollThreshold={0.9}
            loader={<LinearProgress />}
            style={{ overflow: "unset" }}
            endMessage={
              <h3 style={{ textAlign: "center", marginTop: 40 }}>
                {scrollData.length === 0 ? "No results" : "No more results"}
              </h3>
            }
          >
            <Grid container spacing={3}>
              {scrollData.map((character) => (
                <Grid item xs={12} md={6} lg={4} key={character.id}>
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    species={character.species}
                    episode={character.episode}
                    gender={character.gender}
                    origin={character.origin}
                    rating={character.rating}
                    episodeCount={character.episodeCount}
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
