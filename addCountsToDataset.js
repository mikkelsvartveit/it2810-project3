const addCountsToDataset = async () => {
  const fs = require("fs");
  const dataset = JSON.parse(fs.readFileSync("backend/dataset.json"));

  dataset.characters.forEach((character) => {
    character.episodeCount = character.episode.length;
  });
  dataset.episodes.forEach((episode) => {
    episode.characterCount = episode.characters.length;
  });

  fs.writeFileSync("backend/dataset.json", JSON.stringify(dataset, null, 2));
};

addCountsToDataset();
