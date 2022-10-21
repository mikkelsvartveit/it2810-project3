import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import { PersonCard } from "./PersonCard";
import { useGetCharacters } from "../gql/queries";

export default function CharacterSearchResult() {
  const [pageNr, setPageNr] = useState(1);
  const { data, loading } = useGetCharacters(pageNr);

  const [scrollData, setScrollData] = useState<ICharacter[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  useEffect(() => {
    if (!data) return;
    if (pageNr === 1) {
      setScrollData(data.characters);
      return;
    }
    if (data.characters.length === 0) {
      setHasMoreValue(false);
      return;
    }
    setScrollData((s) => s.concat(data.characters));
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
            scrollThreshold={(scrollData.length - 20) / scrollData.length}
            loader={<LinearProgress />}
            style={{ overflow: "unset" }}
            endMessage={
              <h1 style={{ textAlign: "center" }}>No more results </h1>
            }
          >
            <Grid container spacing={3} justifyContent={"center"}>
              {scrollData.map((character) => (
                <Grid item key={character.id}>
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
