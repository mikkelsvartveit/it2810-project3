import { InMemoryCache, makeVar } from "@apollo/client";
import {
  ICharacterFilters,
  ICharacterSort,
  IEpisodeFilters,
  IEpisodeSort,
} from "types";

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ["pageSize", "filters", "sort"],
          merge(prev, newData, { args }) {
            // Merge previous cached data with new recieved from pagination
            if (args == null) {
              args = { page: 1 };
            }
            const merged = prev ? prev.slice(0) : [];
            for (let i = 0; i < newData.length; ++i) {
              merged[args.page + i - 1] = newData[i];
            }
            return merged;
          },
        },

        episodes: {
          keyArgs: ["pageSize", "filters", "sort"],
          merge(prev, newData, { args }) {
            // Merge previous cached data with new recieved from pagination
            if (args == null) {
              args = { page: 1 };
            }
            const merged = prev ? prev.slice(0) : [];
            for (let i = 0; i < newData.length; ++i) {
              merged[args.page + i] = newData[i];
            }
            return merged;
          },
        },
      },
    },
  },
});

export const activeCharacterFilterVar = makeVar<ICharacterFilters>({});
export const activeCharacterFilterNameVar = makeVar<string | null>(null); // debounce issue lead to this being its own var
export const activeCharacterSortVar = makeVar<ICharacterSort>({});

export const activeEpisodeFilterVar = makeVar<IEpisodeFilters>({});
export const activeEpisodeFilterNameVar = makeVar<string | null>(null); // debounce issue lead to this being its own var
export const activeEpisodeSortVar = makeVar<IEpisodeSort>({});
