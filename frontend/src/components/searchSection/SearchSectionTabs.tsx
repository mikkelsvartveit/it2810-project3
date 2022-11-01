import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { CharacterSearchSection, EpisodeSearchSection } from "./";
import { CharactersSearchResult, EpisodesSearchResult } from "../searchResults";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return value === index ? (
    <main
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </main>
  ) : null;
}

export function SearchSectionTabs() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Tabs
        component="nav"
        value={value}
        onChange={(e, value) => setValue(value)}
        aria-label="basic tabs example"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          component="a"
          label="Characters"
          sx={{ fontWeight: 600 }}
          data-testid="CharactersTab"
        />

        <Tab
          component="a"
          label="Episodes"
          sx={{ fontWeight: 600 }}
          data-testid="EpisodesTab"
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CharacterSearchSection />

        <section>
          <CharactersSearchResult />
        </section>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <EpisodeSearchSection />

        <section>
          <EpisodesSearchResult />
        </section>
      </TabPanel>
    </>
  );
}
