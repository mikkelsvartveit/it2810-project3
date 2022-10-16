import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ICharacter } from "types";
import PreviewCharacter from "./PreviewCharacter";
import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";

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
  created,
}: ICharacter) {
  const underlineColor =
    gender === "Male" ? "#b7e4f9" : gender === "Female" ? "#FB6467" : "#fafd7c";
  const episodeNum = episode[0].id;
  const [inFocus, setInFocus] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 406, margin: 0 }}>
        <CardActionArea
          sx={{ maxWidth: 406, display: "flex", flexDirection: "row" }}
          onClick={() => setInFocus(true)}
        >
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ width: 140, height: 160 }}
          />
          <CardContent
            sx={{
              width: 250,
              height: 134,
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
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
            <Typography variant="subtitle2" color="text.secondary">
              {status} {species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {location.name}
              <IconButton aria-label="eye">
                <PublicIcon />
              </IconButton>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Episode {episodeNum}
              <IconButton aria-label="tv">
                <TvIcon />
              </IconButton>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PreviewCharacter
        open={inFocus}
        handleClose={() => setInFocus(false)}
        id={id}
        name={name}
        status={status}
        species={species}
        type={type}
        gender={gender}
        origin={origin}
        location={location}
        image={image}
        episode={episode}
        created={created}
      />
    </>
  );
}
