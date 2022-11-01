import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetEpisodes } from "../../gql/queries";
import { EpisodeCard, IEpisodeCardProps } from "../cards/";

const PAGE_SIZE = 18;

export function EpisodesSearchResult() {
  const {
    pageNr,
    setPageNr,
    isLastPage,
    setIsLastPage,
    data,
    loading,
    fetchMore,
  } = useGetEpisodes(PAGE_SIZE);

  const [scrollData, setScrollData] = useState<IEpisodeCardProps[]>([]);

  // Handle new data from GraphQL query
  useEffect(() => {
    if (!data) return;
    if (data.episodes.length === 0) {
      setIsLastPage(true);
      setScrollData([]);
      return;
    }
    if (data.episodes.length < PAGE_SIZE) {
      setIsLastPage(true);
    }

    setScrollData(data.episodes);
  }, [data, setIsLastPage]);

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

        if (fetchMoreResult.episodes.length < PAGE_SIZE) {
          setIsLastPage(true);
        }

        // Extends prev data with new data
        return Object.assign({}, prev, {
          episodes: [...prev.episodes, ...fetchMoreResult.episodes],
        });
      },
    });

    setPageNr((pageNr) => pageNr + 1);
  };

  return (
    <>
      {(pageNr > 1 && scrollData) || (!loading && scrollData) ? (
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
            {scrollData.map((episode) => (
              <Grid item xs={12} md={6} lg={4} key={episode.id}>
                <EpisodeCard
                  id={episode.id}
                  name={episode.name}
                  air_date={episode.air_date}
                  episode={episode.episode}
                  rating={episode.rating}
                  characterCount={episode.characterCount}
                />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            data-testid="ESearchLoader"
            color={"primary"}
            size={75}
          />
        </Box>
      )}
    </>
  );
}
