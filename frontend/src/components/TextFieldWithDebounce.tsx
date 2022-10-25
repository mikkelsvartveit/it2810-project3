import debounce from "lodash.debounce";
import { TextField } from "@mui/material";
import { useEffect, useMemo } from "react";

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
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={debouncedResults}
      />
    </>
  );
}
