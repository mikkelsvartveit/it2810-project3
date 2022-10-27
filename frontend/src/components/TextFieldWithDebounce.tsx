import debounce from "lodash.debounce";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Search } from "@mui/icons-material";

export interface ITextFieldWithDebounceProps {
  label: string;
  callback: (value: string) => void;
}

export default function TextFieldWithDebounce({
  label,
  callback,
}: ITextFieldWithDebounceProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        id="outlined-basic"
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
        onChange={debouncedResults}
      />
    </FormControl>
  );
}
