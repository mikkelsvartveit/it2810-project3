import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { CharacterCard, ICharacterCardProps } from "../cards/";
import { useGetCharacters } from "../../gql/queries";

export function CharactersSearchResult() {
  const {
    pageNr,
    setPageNr,
    isLastPage,
    setIsLastPage,
    data,
    loading,
    fetchMore,
  } = useGetCharacters();

  const [scrollData, setScrollData] = useState<ICharacterCardProps[]>([]);

  useEffect(() => {
    if (!data) return;
    if (data.characters.length === 0) {
      setIsLastPage(true);
      setScrollData([]);
      return;
    }
    if (data.characters.length < 18) {
      setIsLastPage(true);
    }

    setScrollData(data.characters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Function that is triggered when user scrolls towards the end of the list
  const loadScrollData = () => {
    if (!data || loading) return;
    fetchMore({
      variables: {
        page: pageNr + 1,
      },
      // Update the query with new data
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setIsLastPage(true);
          return prev;
        }
        if (fetchMoreResult.characters.length < 18) {
          setIsLastPage(true);
        }
        // Extends prev data with new data
        return Object.assign({}, prev, {
          characters: [...prev.characters, ...fetchMoreResult.characters],
        });
      },
    });
    setPageNr((pageNr) => pageNr + 1);
  };

  return (
    <>
      {(pageNr > 1 && scrollData) || (!loading && scrollData) ? (
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            data-testid="CSearchLoader"
            color={"primary"}
            size={75}
          />
        </Box>
      )}
    </>
  );
}
