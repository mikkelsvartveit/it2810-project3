import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, values: readonly string[], theme: Theme) {
  return {
    fontWeight:
      values.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface IMultipleSelectChipProps {
  label: string;
  options: string[];
  callback: (values: string[] | undefined) => void;
}

export function MultipleSelectChip({
  label,
  options,
  callback,
}: IMultipleSelectChipProps) {
  const theme = useTheme();
  const [values, setValues] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (value.length > 0) {
      callback(typeof value === "string" ? value.split(",") : value);
    } else {
      callback(undefined);
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ height: 23 }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, values, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
