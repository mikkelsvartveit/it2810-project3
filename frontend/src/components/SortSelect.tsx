import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ICharacterSort } from "types";

export interface ISortSelectProps {
  callback: (sort: ICharacterSort) => void;
}

export default function SortSelect({ callback }: ISortSelectProps) {
  const [sort, setSort] = useState("none");
  const [swtichChecked, setSwitchChecked] = useState(true);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Age"
          onChange={(e) => {
            setSort(e.target.value);
            if (e.target.value !== "none") {
              const newSort: ICharacterSort = {};
              newSort[e.target.value] = swtichChecked ? "asc" : "desc";
              callback(newSort);
            }
          }}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"rating"}>Rating</MenuItem>
        </Select>
      </FormControl>
      {sort !== "none" && (
        <FormGroup>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Ascending</Typography>
            <Switch
              checked={swtichChecked}
              onChange={(_, checked) => {
                setSwitchChecked(checked);
                const newSort: ICharacterSort = {};
                newSort[sort] = checked ? "asc" : "desc";
                callback(newSort);
              }}
            />
            <Typography>Descending</Typography>
          </Stack>
        </FormGroup>
      )}
    </>
  );
}
