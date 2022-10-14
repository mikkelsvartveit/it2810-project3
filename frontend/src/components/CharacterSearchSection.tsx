import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Switch,
} from "@mui/material";
import TextFieldWithDebounce from "./TextFieldWithDebounce";

export interface ICharacterSearchSectionProps {}

export default function CharacterSearchSection(
  props: ICharacterSearchSectionProps
) {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <FormLabel>Alive</FormLabel>
        <Switch defaultChecked />
      </Grid>

      <Grid item xs>
        <FormControl>
          <FormLabel id="species-label">Species</FormLabel>
          <FormGroup aria-labelledby="species-label">
            <FormControlLabel
              value="Human"
              control={<Checkbox />}
              label="Human"
            />
            <FormControlLabel
              value="Alien"
              control={<Checkbox />}
              label="Alien"
            />
            <FormControlLabel
              value="Humanoid"
              control={<Checkbox />}
              label="Humanoid"
            />
            <FormControlLabel
              value=""
              control={<Checkbox />}
              label="None OfThe Above"
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs>
        <FormControl>
          <FormLabel id="gender-label">Gender</FormLabel>
          <FormGroup aria-labelledby="gender-label">
            <FormControlLabel
              value="Female"
              control={<Checkbox />}
              label="Female"
            />
            <FormControlLabel
              value="Male"
              control={<Checkbox />}
              label="Male"
            />
            <FormControlLabel
              value="unknown"
              control={<Checkbox />}
              label="Unknown"
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs>
        <TextFieldWithDebounce />
      </Grid>
    </Grid>
  );
}
