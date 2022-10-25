import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import MultipleSelectChip from "./MultipleSelectChip";
import TextFieldWithDebounce from "./TextFieldWithDebounce";
import { activeFilterVar, activeFilterNameVar, activeSortVar } from "..";
import { useReactiveVar } from "@apollo/client";
import SortSelect from "./SortSelect";

export interface ICharacterSearchSectionProps {}

export default function CharacterSearchSection(
  props: ICharacterSearchSectionProps
) {
  const currentFilter = useReactiveVar(activeFilterVar);

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <MultipleSelectChip
          label={"Status"}
          options={["Alive", "Dead", "unknown"]}
          callback={(status) => {
            activeFilterVar({ ...currentFilter, status });
          }}
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
          callback={(species) => {
            activeFilterVar({ ...currentFilter, species });
          }}
        />
      </Grid>
      <Grid item xs>
        <MultipleSelectChip
          label="Gender"
          options={["Male", "Female", "unknown"]}
          callback={(gender) => {
            activeFilterVar({ ...currentFilter, gender });
          }}
        />
      </Grid>
      <Grid item xs>
        <TextFieldWithDebounce label="Name" callback={activeFilterNameVar} />
      </Grid>
      <Grid item xs>
        <SortSelect callback={activeSortVar} />
      </Grid>
    </Grid>
  );
}
