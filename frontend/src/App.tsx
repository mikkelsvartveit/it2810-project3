import { Box, Typography } from "@mui/material";
import { SearchSectionTabs } from "./components/searchSection/";

function App() {
  return (
    <Box margin={"5%"} alignContent={"center"}>
      <header>
        <Typography variant="h1" gutterBottom textAlign={"center"} id="title">
          Rick and Morty Explorer
        </Typography>
      </header>
      <main>
        <SearchSectionTabs />
      </main>
    </Box>
  );
}

export default App;
