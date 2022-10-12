export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  id: number; //	The id of the location.
  name: string; //	The name of the location.
  type: string; //	The type of the location.
  dimension: string; //	The dimension in which the location is located.
  residents: string[]; // (urls)	List of character who have been last seen in the location.
  url: string; // (url)	Link to the location's own endpoint.
  created: string; //	Time at which the location was created in the database.
}

export interface Episode {
  id: number; //	The id of the episode.
  name: string; //	The name of the episode.
  air_date: string; //	The air date of the episode.
  episode: string; //	The code of the episode.
  characters: string[]; // (urls)	List of characters who have been seen in the episode.
  url: string; // (url)	Link to the episode's own endpoint.
  created: string; //	Time at which the episode was created in the database
}
