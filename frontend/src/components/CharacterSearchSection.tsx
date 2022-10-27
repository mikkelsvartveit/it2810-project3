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

  const sortOptions = [
    { value: "default", label: "Default order" },
    { value: "name_asc", label: "Name (A to Z)" },
    { value: "name_desc", label: "Name (Z to A)" },
    { value: "rating_desc", label: "Rating (High to Low)" },
    { value: "rating_asc", label: "Rating (Low to High)" },
  ];

  const defaultSort = "default";

  return (
    <Grid container spacing={3} sx={{ marginTop: 1, marginBottom: 4 }}>
      <Grid item xs={12}>
        <TextFieldWithDebounce
          label="Character name"
          callback={activeCharacterFilterNameVar}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <MultipleSelectChip
          label={"Status"}
          options={["Alive", "Dead", "unknown"]}
          callback={(status) => {
            activeCharacterFilterVar({ ...currentFilter, status });
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
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

      <Grid item xs={12} sm={6} lg={3}>
        <MultipleSelectChip
          label="Gender"
          options={["Male", "Female", "unknown"]}
          callback={(gender) => {
            activeCharacterFilterVar({ ...currentFilter, gender });
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <SortSelect
          options={sortOptions}
          defaultOption={defaultSort}
          callback={activeCharacterSortVar}
        />
      </Grid>
    </Grid>
  );
}
