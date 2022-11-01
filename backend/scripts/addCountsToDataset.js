const addCountsToDataset = async () => {
  const fs = require("fs");
  const dataset = JSON.parse(fs.readFileSync("../dataset.json"));

  dataset.characters.forEach((character) => {
    character.episodeCount = character.episode.length;
  });
  dataset.episodes.forEach((episode) => {
    episode.characterCount = episode.characters.length;
  });

  fs.writeFileSync("../dataset.json", JSON.stringify(dataset, null, 2));
};

addCountsToDataset();
