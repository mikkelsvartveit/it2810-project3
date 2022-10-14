export declare interface Location {
  id: number; //	The id of the location.
  name: string; //	The name of the location.
  type: string; //	The type of the location.
  dimension: string; //	The dimension in which the location is located.
  residents: string[]; // (urls)	List of character who have been last seen in the location.
  url: string; // (url)	Link to the location's own endpoint.
  created: string; //	Time at which the location was created in the database.
}
