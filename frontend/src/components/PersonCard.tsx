import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Character } from "../types";
import PreviewCharacter from "./PreviewCharacter";

export function PersonCard({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}: Character) {
  const underlineColor =
    gender == "male" ? "#b7e4f9" : gender == "female" ? "#FB6467" : "#fafd7c";
  const episodeNum = episode[0].split("/")[episode[0].split("/").length - 1];
  console.log(episodeNum);
  const [inFocus, setInFocus] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 426, margin: 0 }}>
        <CardActionArea
          sx={{ maxWidth: 426, display: "flex", flexDirection: "row" }}
          onClick={() => setInFocus(true)}
        >
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ width: 150, height: 150 }}
          />
          <CardContent
            sx={{
              width: 250,
              height: 124,
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                textUnderlineOffset: 7,
                textDecoration: "underline",
                textDecorationColor: underlineColor,
              }}
            >
              {name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {status} {species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last seen:
              <a href={location.url}>{location.name}</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              First appeared in:
              <a href={episode[0]}>Episode {episodeNum}</a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
