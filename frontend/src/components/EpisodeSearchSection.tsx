import { useReactiveVar } from "@apollo/client";
import { FormControl, Grid, MenuItem, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import TextFieldWithDebounce from "./TextFieldWithDebounce";
import {
  activeEpisodeFilterNameVar,
  activeEpisodeFilterVar,
  activeEpisodeSortVar,
} from "../gql/cache";
import SortSelect from "./SortSelect";

export interface IEpisodeSearchSectionProps {}

export default function EpisodeSearchSection(
  props: IEpisodeSearchSectionProps
) {
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const [seasonFilterValue, setseasonFilterValue] = useState("");

  const sortOptions = [
    { value: "default", label: "Default order" },
    { value: "name_asc", label: "Name (A to Z)" },
    { value: "name_desc", label: "Name (Z to A)" },
    { value: "rating_desc", label: "Rating (High to Low)" },
    { value: "rating_asc", label: "Rating (Low to High)" },
  ];

  const defaultSort = "default";

  return (
    <Grid container spacing={3} sx={{ marginTop: 1, marginBottom: 4 }}>
      <Grid item xs={12}>
        <TextFieldWithDebounce
          label="Episode name"
          callback={activeEpisodeFilterNameVar}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
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
            <MenuItem value="none">Any season</MenuItem>
            <MenuItem value={"S01"}>Season 1</MenuItem>
            <MenuItem value={"S02"}>Season 2</MenuItem>
            <MenuItem value={"S03"}>Season 3</MenuItem>
            <MenuItem value={"S04"}>Season 4</MenuItem>
            <MenuItem value={"S05"}>Season 5</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <SortSelect
          options={sortOptions}
          defaultOption={defaultSort}
          callback={activeEpisodeSortVar}
        />
      </Grid>
    </Grid>
  );
}
