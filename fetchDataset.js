const fetchCharacters = async () => {
  const allCharacters = [];
  let pageCounter = 1;
  let totalPages;

  do {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character" + "?page=" + pageCounter
    );
    const data = await response.json();
    data.results.forEach((character) => {
      character.episode = character.episode.map((e) =>
        Number(e.split("/").pop())
      );
    });
    allCharacters.push(...data.results);
    totalPages = data.info.pages;
    pageCounter++;
  } while (pageCounter <= totalPages);

  return allCharacters;
};

const fetchEpisodes = async () => {
  const allEpisodes = [];
  let pageCounter = 1;
  let totalPages;

  do {
    const response = await fetch(
      "https://rickandmortyapi.com/api/episode" + "?page=" + pageCounter
    );
    const data = await response.json();
    data.results.forEach((episode) => {
      episode.characters = episode.characters.map((c) =>
        Number(c.split("/").pop())
      );
    });
    allEpisodes.push(...data.results);
    totalPages = data.info.pages;
    pageCounter++;
  } while (pageCounter <= totalPages);

  return allEpisodes;
};

const fetchRickAndMortyApi = async () => {
  // Check that Node version is 17.5 or newer
  const nodeVersion = process.versions.node;
  const [major, minor] = nodeVersion.split(".");
  if (major < 17 || (major === 17 && minor < 5)) {
    console.error(
      "This script requires Node version 17.5 or newer due to usage of the Fetch API"
    );

    return;
  }

  const dataset = {
    characters: await fetchCharacters(),
    episodes: await fetchEpisodes(),
  };

  const fs = require("fs");
  fs.writeFileSync("backend/dataset.json", JSON.stringify(dataset, null, 2));
};

fetchRickAndMortyApi();
