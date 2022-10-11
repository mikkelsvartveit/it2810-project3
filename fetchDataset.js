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

  const allCharacters = [];
  let pageCounter = 1;
  let totalPages;

  do {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character" + "?page=" + pageCounter
    );
    const data = await response.json();
    allCharacters.push(...data.results);
    totalPages = data.info.pages;
    pageCounter++;
  } while (pageCounter <= totalPages);

  const fs = require("fs");
  fs.writeFileSync("backend/dataset.json", JSON.stringify(allCharacters, null, 2));
};

fetchRickAndMortyApi();
