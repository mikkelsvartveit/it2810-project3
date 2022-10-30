import debounce from "lodash.debounce";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Search } from "@mui/icons-material";

export interface ITextFieldWithDebounceProps {
  label: string;
  callback: (value: string) => void;
  initalValue: string | null;
}

export function TextFieldWithDebounce({
  initalValue,
  label,
  callback,
}: ITextFieldWithDebounceProps) {
  const [currValue, setCurrValue] = useState(initalValue ?? "");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    callback(event.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <FormControl fullWidth>
      <TextField
        value={currValue}
        id="outlined-basic"
        data-testid="SearchField"
        label={label}
        placeholder="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          debouncedResults(e);
          setCurrValue(e.target.value);
        }}
      />
    </FormControl>
  );
}
