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
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IEpisodeSort } from "types";

const initsort = (filters: IEpisodeSort) => {
  let entries = Object.entries({ ...filters });
  if (entries.length > 0) return entries[0][0] + "_" + entries[0][1];
  return null;
};

export function EpisodeSearchSection() {
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const episodeFilterName = useReactiveVar(activeEpisodeFilterNameVar);
  const currSort = useReactiveVar(activeEpisodeSortVar);
  const [seasonFilterValue, setseasonFilterValue] = useState(
    { ...episodeFilter }.season ?? ""
  );
  const [dates, setDates] = useState<Array<null | string>>([null, null]);

  const sortOptions = [
    { value: "default", label: "Default order" },
    { value: "name_asc", label: "Name (A to Z)" },
    { value: "name_desc", label: "Name (Z to A)" },
    { value: "rating_desc", label: "Rating (High to Low)" },
    { value: "rating_asc", label: "Rating (Low to High)" },
    { value: "characterCount_desc", label: "No. characters (Ascending)" },
    { value: "characterCount_asc", label: "No. characters (Few to Many)" },
  ];

  const defaultSort = "default";

  return (
    <Grid
      component="form"
      container
      spacing={3}
      sx={{ marginTop: 1, marginBottom: 4 }}
    >
      <Grid item xs={12}>
        <TextFieldWithDebounce
          label="Episode name"
          callback={activeEpisodeFilterNameVar}
          initalValue={episodeFilterName}
        />
      </Grid>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={12} sm={6} lg={3}>
          <DesktopDatePicker
            className="desktop-date-picker"
            label="Start date"
            inputFormat="DD/MM/YYYY"
            value={dates[0]}
            maxDate={dates[1] ?? new Date().toISOString()}
            onChange={(newValue) => {
              console.log(newValue);
              setDates([newValue, dates[1]]);
              const newFilter = { ...episodeFilter };
              newFilter.start_date = newValue ? newValue : undefined;
              activeEpisodeFilterVar(newFilter);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />

          <MobileDatePicker
            className="mobile-date-picker"
            label="Start date"
            inputFormat="DD/MM/YYYY"
            value={dates[0]}
            maxDate={dates[1] ?? new Date().toISOString()}
            onChange={(newValue) => {
              setDates([newValue, dates[1]]);
              const newFilter = { ...episodeFilter };
              newFilter.start_date = newValue ? newValue : undefined;
              activeEpisodeFilterVar(newFilter);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <DesktopDatePicker
            className="desktop-date-picker"
            label="End date"
            inputFormat="DD/MM/YYYY"
            value={dates[1]}
            minDate={dates[0]}
            maxDate={new Date().toISOString()}
            onChange={(newValue) => {
              setDates([dates[0], newValue]);
              const newFilter = { ...episodeFilter };
              newFilter.end_date = newValue ? newValue : undefined;
              activeEpisodeFilterVar(newFilter);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />

          <MobileDatePicker
            className="mobile-date-picker"
            label="End date"
            inputFormat="DD/MM/YYYY"
            value={dates[1]}
            minDate={dates[0]}
            maxDate={new Date().toISOString()}
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

      <Grid item xs={12} sm={6} lg={3}>
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

      <Grid item xs={12} sm={6} lg={3}>
        <SortSelect
          initalValue={initsort(currSort)}
          options={sortOptions}
          defaultOption={defaultSort}
          callback={activeEpisodeSortVar}
        />
      </Grid>
    </Grid>
  );
}
