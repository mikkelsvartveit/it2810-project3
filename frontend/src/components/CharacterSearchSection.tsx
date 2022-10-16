import { Grid } from "@mui/material";
import MultipleSelectChip from "./MultipleSelectChip";
import TextFieldWithDebounce from "./TextFieldWithDebounce";

export interface ICharacterSearchSectionProps {}

export default function CharacterSearchSection(
  props: ICharacterSearchSectionProps
) {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <MultipleSelectChip
          label={"Status"}
          options={["Alive", "Dead", "unknown"]}
        />
      </Grid>

      <Grid item xs>
        <MultipleSelectChip
          label={"Species"}
          options={[
            "Human",
            "Alien",
            "Humanoid",
            "Mythological Creature",
            "Animal",
            "Robot",
            "Disease",
            "Poopybutthole",
            "Cronenberg",
            "unknown",
          ]}
        />
      </Grid>
      <Grid item xs>
        <MultipleSelectChip
          label="Gender"
          options={["Male", "Female", "unknown"]}
        />
      </Grid>
      <Grid item xs>
        <TextFieldWithDebounce />
      </Grid>
    </Grid>
  );
}
