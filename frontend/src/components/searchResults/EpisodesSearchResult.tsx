import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetEpisodes } from "../../gql/queries";
import { EpisodeCard, IEpisodeCardProps } from "../cards/";

export function EpisodesSearchResult() {
  const {
    pageNr,
    setPageNr,
    isLastPage,
    setIsLastPage,
    data,
    loading,
    fetchMore,
  } = useGetEpisodes();

  const [scrollData, setScrollData] = useState<IEpisodeCardProps[]>([]);

  // Handle new data from gql query
  useEffect(() => {
    if (!data) return;
    if (data.episodes.length === 0) {
      setIsLastPage(true);
      setScrollData([]);
      return;
    }
    if (data.episodes.length < 18) {
      setIsLastPage(true);
    }

    setScrollData(data.episodes);
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
        if (fetchMoreResult.episodes.length < 18) {
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
        </>
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
