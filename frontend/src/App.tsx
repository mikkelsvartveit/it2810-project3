import { Typography } from "@mui/material";
import { SearchSectionTabs } from "./components/searchSection/";

function App() {
  return (
    <>
      <Typography variant="h1" gutterBottom textAlign={"center"} id="title">
        Rick and Morty Explorer
      </Typography>

      <SearchSectionTabs />
    </>
  );
}

export default App;
