import debounce from "lodash.debounce";
import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export interface ITextFieldWithDebounceProps {}

export default function TextFieldWithDebounce(
  props: ITextFieldWithDebounceProps
) {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={debouncedResults}
      />
      Debounced value: {value}
    </>
  );
}
