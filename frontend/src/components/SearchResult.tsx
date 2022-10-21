import { useState } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import PersonCard from "./PersonCard";
import { useGetCharacters } from "../gql/queries";

export interface ISearchResultProps {
  characters: ICharacter[];
}

export default function SearchResult() {
  const [pageNr] = useState(1);
  const { data, loading } = useGetCharacters(pageNr);

  const [scrollData, setScrollData] = useState<ICharacter[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  // Function that is triggered when user scrolls towards the end of the list
  const loadScrollData = async () => {
    if (!data || loading) return;
    try {
      // Todo change to append when pagination is implemented
      setScrollData(data.characters.slice(0, scrollData.length + 10));
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function for checking if there are more cards to load
  const handleOnRowsScrollEnd = () => {
    if (scrollData && data) {
      if (scrollData.length < data.characters.length) {
        setHasMoreValue(true);
        loadScrollData();
      } else {
        setHasMoreValue(false);
      }
    }
  };

  return (
    <>
      {scrollData && !loading ? (
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
