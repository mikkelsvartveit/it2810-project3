import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import { ImportExport } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ICharacterSort } from "types";

export interface ISortSelectProps {
  options: { label: string; value: string }[];
  defaultOption: string;
  callback: (sort: ICharacterSort) => void;
}

export default function SortSelect({
  options,
  defaultOption,
  callback,
}: ISortSelectProps) {
  const [sort, setSort] = useState(defaultOption);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort results by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={sort}
          label="Sort results by"
          onChange={(e) => {
            setSort(e.target.value);
            if (e.target.value !== "none") {
              const newSort: ICharacterSort = {};
              const [key, order] = e.target.value.split("_");
              newSort[key] = order as "asc" | "desc";
              callback(newSort);
            }
          }}
          renderValue={(value) => {
            return (
              <Box sx={{ display: "flex", gap: 1 }}>
                <SvgIcon sx={{ color: "gray" }}>
                  <ImportExport />
                </SvgIcon>
                {options.find((option) => option.value === value)?.label}
              </Box>
            );
          }}
        >
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
