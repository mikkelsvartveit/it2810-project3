import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ICharacter } from "types";

import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";
import { useGetCharacter } from "../gql/queries";

export interface IPreviewCharacterProps extends ICharacter {
  open: boolean;
  handleClose: () => void;
}

export default function PreviewCharacter({
  open,
  handleClose,
  id,
}: IPreviewCharacterProps) {
  const { data } = useGetCharacter(id);

  const underlineColor =
    data?.character.gender === "male"
      ? "#b7e4f9"
      : data?.character.gender === "female"
      ? "#FB6467"
      : "#fafd7c";
  const episodeNum = data?.character.episode[0].id;

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
        {data?.character ? (
          <>
            <CardMedia
              component="img"
              image={data.character.image}
              alt={data.character.name}
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
                {data.character.name}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
              >
                {data.character.status} {data.character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last seen: {data.character.location.name}
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
                Origin:{" "}
                <a href={data.character.origin.name}>
                  {data.character.origin.name}
                </a>
              </Typography>
              ,
              <Button variant="contained" sx={{ marginTop: "10px" }}>
                Like!
              </Button>
            </CardContent>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
    </Modal>
  );
}
