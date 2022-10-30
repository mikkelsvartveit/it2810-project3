import { useReactiveVar } from "@apollo/client";
import {
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  activeEpisodeFilterNameVar,
  activeEpisodeFilterVar,
  activeEpisodeSortVar,
} from "../../gql/cache";
import { SortSelect, TextFieldWithDebounce } from "../formFields";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface IEpisodeSearchSectionProps {}

export function EpisodeSearchSection(props: IEpisodeSearchSectionProps) {
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const [seasonFilterValue, setseasonFilterValue] = useState("");
  const [dates, setDates] = useState([null, null]);

  const sortOptions = [
    { value: "default", label: "Default order" },
    { value: "name_asc", label: "Name (A to Z)" },
    { value: "name_desc", label: "Name (Z to A)" },
    { value: "rating_desc", label: "Rating (High to Low)" },
    { value: "rating_asc", label: "Rating (Low to High)" },
    { value: "characterCount_desc", label: "Featured characters (Many to Few)" },
    { value: "characterCount_asc", label: "Featured characters (Few to Many)" },
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

      <Grid item xs={6} sm={3}>
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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={6} sm={3}>
          <DesktopDatePicker
            label="Start date"
            inputFormat="DD/MM/YYYY"
            value={dates[0]}
            onChange={(newValue) => {
              setDates([newValue, dates[1]]);
              const newFilter = { ...episodeFilter };
              newFilter.start_date = newValue ? newValue : undefined;
              activeEpisodeFilterVar(newFilter);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <DesktopDatePicker
            label="End date"
            inputFormat="DD/MM/YYYY"
            value={dates[1]}
            onChange={(newValue) => {
              setDates([dates[0], newValue]);
              const newFilter = { ...episodeFilter };
              newFilter.end_date = newValue ? newValue : undefined;
              activeEpisodeFilterVar(newFilter);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
      </LocalizationProvider>

      <Grid item xs={6} sm={3}>
        <SortSelect
          options={sortOptions}
          defaultOption={defaultSort}
          callback={activeEpisodeSortVar}
        />
      </Grid>
    </Grid>
  );
}
