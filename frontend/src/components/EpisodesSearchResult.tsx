import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { IEpisode } from "types";
import PersonCard from "./PersonCard";
import { useGetEpisodes } from "../gql/queries";

export default function EpisodesSearchResult() {
  const { pageNr, setPageNr, data, loading } = useGetEpisodes();

  const [scrollData, setScrollData] = useState<IEpisode[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  // Handle new data from gql query
  useEffect(() => {
    if (!data) return;
    if (data.episodes.length === 0) {
      setHasMoreValue(false);

      // Edge case: if no results, empty scrollData
      // TODO: Should not be possible with correct impl of filter and task description
      if (pageNr === 1) {
        setScrollData([]);
      }
      return;
    }
    // if not a full page, set hasMore to false
    if (data.episodes.length < 20) {
      setHasMoreValue(false);
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
              {scrollData.map((episode) => (
                <Grid item key={episode.id}>
                  <PersonCard
                    name={episode.name}
                    image={""}
                    species={""}
                    status={""}
                    location={{ name: "" }}
                    created={episode.created}
                    episode={[episode]}
                    gender={""}
                    id={episode.id}
                    origin={{ name: "" }}
                    type={""}
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
