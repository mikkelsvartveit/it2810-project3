import { Tabs, Tab, Box } from "@mui/material";
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

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export function SearchSectionTabs() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={(e, value) => setValue(value)}
          aria-label="basic tabs example"
        >
          <Tab
            label="Characters"
            sx={{ fontWeight: 600 }}
            data-testid="CharactersTab"
          />
          <Tab
            label="Episodes"
            sx={{ fontWeight: 600 }}
            data-testid="EpisodesTab"
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CharacterSearchSection />
        <CharactersSearchResult />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <EpisodeSearchSection />
        <EpisodesSearchResult />
      </TabPanel>
    </>
  );
}
