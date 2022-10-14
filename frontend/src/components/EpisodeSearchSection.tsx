import { FormControl, Grid, MenuItem, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import TextFieldWithDebounce from "./TextFieldWithDebounce";

export interface IEpisodeSearchSectionProps {}

export default function EpisodeSearchSection(
  props: IEpisodeSearchSectionProps
) {
  const [seasonValue, setSeasonValue] = useState("");
  const [episodeValue, setEpisodeValue] = useState("");
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <FormControl fullWidth>
          <InputLabel id="season-label">Season</InputLabel>
          <Select
            labelId="season-label"
            id="season-select"
            value={seasonValue}
            label="Season"
            onChange={(e) => setSeasonValue(e.target.value)}
          >
            <MenuItem value="">
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
        <FormControl fullWidth>
          <InputLabel id="episode-label">Episode</InputLabel>
          <Select
            labelId="episode-label"
            id="episode-select"
            value={episodeValue}
            label="episode"
            onChange={(e) => setEpisodeValue(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"S01"}>Episode 1</MenuItem>
            <MenuItem value={"S02"}>Episode 2</MenuItem>
            <MenuItem value={"S03"}>Episode 3</MenuItem>
            <MenuItem value={"S04"}>Episode 4</MenuItem>
            <MenuItem value={"S05"}>Episode 5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs>
        <TextFieldWithDebounce />
      </Grid>
    </Grid>
  );
}
