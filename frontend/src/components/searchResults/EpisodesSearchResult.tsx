import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { IEpisode } from "types";
import { useGetEpisodes } from "../../gql/queries";
import { EpisodeCard } from "../cards/";

export function EpisodesSearchResult() {
  const { pageNr, setPageNr, isLastPage, setIsLastPage, data, loading } =
    useGetEpisodes();

  const [scrollData, setScrollData] = useState<IEpisode[]>([]);

  // Handle new data from gql query
  useEffect(() => {
    if (!data) return;
    if (data.episodes.length === 0) {
      setIsLastPage(true);

      // Edge case: if no results, empty scrollData
      // TODO: Should not be possible with correct impl of filter and task description
      if (pageNr === 1) {
        setScrollData([]);
      }
      return;
    }

    // if not a full page, set isLastPage to false
    if (data.episodes.length < 18) {
      setIsLastPage(true);
    }

    if (pageNr > 1) {
      setScrollData((s) => s.concat([...data.episodes]));
    } else {
      setScrollData([...data.episodes]);
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
        <CircularProgress color={"success"} size={200} />
      )}
    </>
  );
}
