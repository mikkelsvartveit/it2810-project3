import { Box, Typography } from "@mui/material";
import SearchResult from "./components/SearchResult";
import SearchSectionTabs from "./components/SearchSectionTabs";
import { useGetCharacters } from "./gql/queries";

function App() {
  const { data } = useGetCharacters(1);

  return (
    <Box marginLeft={"5%"} marginRight={"5%"} alignContent={"center"}>
      <SearchSectionTabs />

      <Typography variant="h2" gutterBottom textAlign={"center"}>
        Rick and Morty search boy
      </Typography>

      {data && <SearchResult characters={data.characters} />}
    </Box>
  );
}

export default App;
