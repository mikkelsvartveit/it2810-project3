import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { IEpisode } from "types";
import { PersonCard } from "./PersonCard";
import { useGetEpisodes } from "../gql/queries";

export default function EpisodesSearchResult() {
  const [pageNr, setPageNr] = useState(1);
  const { data, loading } = useGetEpisodes(pageNr);

  const [scrollData, setScrollData] = useState<IEpisode[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  useEffect(() => {
    if (!data) return;
    console.log(pageNr);
    if (pageNr === 1) {
      setScrollData(data.episodes);
      return;
    }
    if (data.episodes.length === 0) {
      setHasMoreValue(false);
      return;
    }
    setScrollData((s) => s.concat(data.episodes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Function that is triggered when user scrolls towards the end of the list
  const loadScrollData = () => {
    console.log("huh");
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
            scrollThreshold={(scrollData.length - 20) / scrollData.length}
            loader={<LinearProgress />}
            style={{ overflow: "unset" }}
            endMessage={
              <h1 style={{ textAlign: "center" }}>No more results </h1>
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
