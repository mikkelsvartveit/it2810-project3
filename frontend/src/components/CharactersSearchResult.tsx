import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "types";
import PersonCard from "./PersonCard";
import { useGetCharacters } from "../gql/queries";
import { useReactiveVar } from "@apollo/client";
import { activeFilterVar, activeSortVar, activeFilterNameVar } from "..";

export interface ISearchResultProps {
  characters: ICharacter[];
}

export default function SearchResult() {
  const filter = useReactiveVar(activeFilterVar);
  const name = useReactiveVar(activeFilterNameVar);
  const sort = useReactiveVar(activeSortVar);
  const [pageNr, setPageNr] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  const filters = name ? { ...filter, name } : filter;
  const { data, loading } = useGetCharacters(pageNr, filters, sort);

  const [scrollData, setScrollData] = useState<ICharacter[]>([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);

  useEffect(() => {
    if (!data) return;
    if (data.characters.length === 0) {
      setHasMoreValue(false);
      return;
    }
    if (pageNr > prevPage) {
      //console.log("pageNr: ", pageNr, "prevPage: ", prevPage);

      setScrollData((s) => s.concat(data.characters));
      setPrevPage(pageNr);
    } else {
      //if we change the filter, we need to reset the scrollData
      // currently this does not work properly TODO Stian
      setScrollData(data.characters);
      console.log("pageNr: ", pageNr, "prevPage: ", prevPage);
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
