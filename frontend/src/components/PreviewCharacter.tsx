import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { ICharacter } from "types";

import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";

export interface IPreviewCharacterProps extends ICharacter {
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
  created,
}: IPreviewCharacterProps) {
  const underlineColor =
    gender === "male" ? "#b7e4f9" : gender === "female" ? "#FB6467" : "#fafd7c";
  const episodeNum = episode[0].id;
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
          width: "50%",
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
            width: "100%",
            padding: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              textUnderlineOffset: 7,
              textDecoration: "underline",
              textDecorationColor: underlineColor,
            }}
          >
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" color="text.secondary">
            {status} {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {type === "" ? "none" : type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last seen: {location.name}
            <IconButton aria-label="eye">
              <PublicIcon />
            </IconButton>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            First appeared in: Episode {episodeNum}
            <IconButton aria-label="tv">
              <TvIcon />
            </IconButton>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created: {new Date(created).toDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Origin: <a href={origin.name}>{origin.name}</a>
          </Typography>
          <Button variant="contained" sx={{ marginTop: "10px" }}>
            Like!
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
}
