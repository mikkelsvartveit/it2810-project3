import { Box, Typography } from "@mui/material";
import SearchSectionTabs from "./components/SearchSectionTabs";

function App() {
  return (
    <Box marginLeft={"5%"} marginRight={"5%"} alignContent={"center"}>
      <SearchSectionTabs />

      <Typography variant="h2" gutterBottom textAlign={"center"}>
        Rick and Morty search boy
      </Typography>
    </Box>
  );
}

export default App;
