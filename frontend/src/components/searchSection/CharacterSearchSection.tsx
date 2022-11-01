import { Grid } from "@mui/material";
import {
  activeCharacterFilterVar,
  activeCharacterFilterNameVar,
  activeCharacterSortVar,
} from "../../gql/cache";
import { useReactiveVar } from "@apollo/client";
import {
  MultipleSelectChip,
  SortSelect,
  TextFieldWithDebounce,
} from "../formFields";
import { ICharacterSort } from "types";

const initsort = (filters: ICharacterSort) => {
  let entries = Object.entries({ ...filters });
  if (entries.length > 0) return entries[0][0] + "_" + entries[0][1];
  return null;
};

export function CharacterSearchSection() {
  const currentFilter = useReactiveVar(activeCharacterFilterVar);
  const currFilterName = useReactiveVar(activeCharacterFilterNameVar);
  const currentSort = useReactiveVar(activeCharacterSortVar);

  const sortOptions = [
    { value: "default", label: "Default order" },
    { value: "name_asc", label: "Name (A to Z)" },
    { value: "name_desc", label: "Name (Z to A)" },
    { value: "rating_desc", label: "Rating (High to Low)" },
    { value: "rating_asc", label: "Rating (Low to High)" },
    { value: "episodeCount_desc", label: "Featured episodes (Many to Few)" },
    { value: "episodeCount_asc", label: "Featured episodes (Few to Many)" },
  ];

  const defaultSort = "default";

  return (
    <Grid
      component="form"
      container
      spacing={3}
      sx={{ marginTop: 1, marginBottom: 4 }}
    >
      <Grid item xs={12}>
        <TextFieldWithDebounce
          label="Character name"
          callback={activeCharacterFilterNameVar}
          initalValue={currFilterName}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <MultipleSelectChip
          label={"Status"}
          options={["Alive", "Dead", "unknown"]}
          initialValues={currentFilter?.status ? [...currentFilter.status] : []}
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
          initialValues={
            currentFilter.species ? [...currentFilter.species] : []
          }
          callback={(species) => {
            activeCharacterFilterVar({ ...currentFilter, species });
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <MultipleSelectChip
          initialValues={currentFilter.gender ? [...currentFilter.gender] : []}
          label="Gender"
          options={["Male", "Female", "unknown"]}
          callback={(gender) => {
            activeCharacterFilterVar({ ...currentFilter, gender });
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <SortSelect
          initalValue={initsort(currentSort)}
          options={sortOptions}
          defaultOption={defaultSort}
          callback={activeCharacterSortVar}
        />
      </Grid>
    </Grid>
  );
}
