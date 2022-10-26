import { Grid } from "@mui/material";
import MultipleSelectChip from "./MultipleSelectChip";
import TextFieldWithDebounce from "./TextFieldWithDebounce";
import {
  activeCharacterFilterVar,
  activeCharacterFilterNameVar,
  activeCharacterSortVar,
} from "../gql/cache";
import { useReactiveVar } from "@apollo/client";
import SortSelect from "./SortSelect";

export interface ICharacterSearchSectionProps {}

export default function CharacterSearchSection(
  props: ICharacterSearchSectionProps
) {
  const currentFilter = useReactiveVar(activeCharacterFilterVar);

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <MultipleSelectChip
          label={"Status"}
          options={["Alive", "Dead", "unknown"]}
          callback={(status) => {
            activeCharacterFilterVar({ ...currentFilter, status });
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
            activeCharacterFilterVar({ ...currentFilter, species });
          }}
        />
      </Grid>
      <Grid item xs>
        <MultipleSelectChip
          label="Gender"
          options={["Male", "Female", "unknown"]}
          callback={(gender) => {
            activeCharacterFilterVar({ ...currentFilter, gender });
          }}
        />
      </Grid>
      <Grid item xs>
        <TextFieldWithDebounce
          label="Name"
          callback={activeCharacterFilterNameVar}
        />
      </Grid>
      <Grid item xs>
        <SortSelect callback={activeCharacterSortVar} />
      </Grid>
    </Grid>
  );
}
