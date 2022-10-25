import { makeVar } from "@apollo/client";
import {
  ICharacterFilters,
  ICharacterSort,
  IEpisodeFilters,
  IEpisodeSort,
} from "types";

export const activeCharacterFilterVar = makeVar<ICharacterFilters>({});
export const activeCharacterFilterNameVar = makeVar<string | null>(null); //debounce issue lead to this being its own var
export const activeCharacterSortVar = makeVar<ICharacterSort>({});

export const activeEpisodeFilterVar = makeVar<IEpisodeFilters>({});
export const activeEpisodeFilterNameVar = makeVar<string | null>(null); //debounce issue lead to this being its own var
export const activeEpisodeSortVar = makeVar<IEpisodeSort>({});
