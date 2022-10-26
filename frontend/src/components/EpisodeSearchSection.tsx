import { useReactiveVar } from "@apollo/client";
import { FormControl, Grid, MenuItem, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import TextFieldWithDebounce from "./TextFieldWithDebounce";
import {
  activeEpisodeFilterNameVar,
  activeEpisodeFilterVar,
} from "../gql/cache";

export interface IEpisodeSearchSectionProps {}

export default function EpisodeSearchSection(
  props: IEpisodeSearchSectionProps
) {
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const [seasonFilterValue, setseasonFilterValue] = useState("");

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <FormControl fullWidth>
          <InputLabel id="season-label">Season</InputLabel>
          <Select
            labelId="season-label"
            id="season-select"
            value={seasonFilterValue}
            label="Season"
            onChange={(e) => {
              setseasonFilterValue(e.target.value);
              const newFilter = { ...episodeFilter };
              if (e.target.value !== "none") {
                newFilter.season = e.target.value;
                activeEpisodeFilterVar(newFilter);
              } else {
                newFilter.season = undefined;
                activeEpisodeFilterVar(newFilter);
              }
            }}
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"S01"}>Season 1</MenuItem>
            <MenuItem value={"S02"}>Season 2</MenuItem>
            <MenuItem value={"S03"}>Season 3</MenuItem>
            <MenuItem value={"S04"}>Season 4</MenuItem>
            <MenuItem value={"S05"}>Season 5</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs>
        <TextFieldWithDebounce
          label="Name"
          callback={activeEpisodeFilterNameVar}
        />
      </Grid>
    </Grid>
  );
}
