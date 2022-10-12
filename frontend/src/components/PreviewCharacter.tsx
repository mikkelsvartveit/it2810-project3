import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  SxProps,
  Typography,
} from "@mui/material";

import * as React from "react";
import { Character } from "../types";

export interface IPreviewCharacterProps extends Character {
  open: boolean;
  handleClose: () => void;
}

export default function PreviewCharacter({
  open,
  handleClose,
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
}: IPreviewCharacterProps) {
  const underlineColor =
    gender === "male" ? "#b7e4f9" : gender === "female" ? "#FB6467" : "#fafd7c";
  const episodeNum = episode[0].split("/")[episode[0].split("/").length - 1];
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: "50%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ width: "100%" }}
        />
        <CardContent
          sx={{
            width: "70%",
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
          <Typography gutterBottom variant="body2" color="text.secondary">
            {status} {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last seen: <a href={location.url}>{location.name}</a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            First appeared in: <a href={episode[0]}>Episode {episodeNum}</a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created: {new Date(created).toDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Origin: <a href={origin.url}>{origin.name}</a>
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}
