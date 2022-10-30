import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import { useGetCharacter } from "../../gql/queries";
import { useSetCharacterRating } from "../../gql/mutations";

export interface IPreviewCharacterProps {
  id: number;
  open: boolean;
  handleClose: () => void;
}

export function PreviewCharacter({
  open,
  handleClose,
  id,
}: IPreviewCharacterProps) {
  const { data } = useGetCharacter(id);
  const [setCharacterRating] = useSetCharacterRating(id);

  function getEpisodeFormated(episode: string) {
    const episodeNum = episode.split("E")[1];
    return `Episode ${Number.parseInt(episodeNum)}`;
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card className="preview-card">
        {data ? (
          <>
            <CardMedia
              component="img"
              image={data.character.image}
              alt={data.character.name}
              className="card-image"
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
                  textDecorationColor:
                    data.character.gender === "male"
                      ? "#b7e4f9"
                      : data.character.gender === "female"
                      ? "#FB6467"
                      : "#fafd7c",
                }}
              >
                {data.character.name}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
              >
                {data.character.status} {data.character.species} from{" "}
                {data.character.origin.name}
                <br></br>
                Gender - {data.character.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last seen: {data.character.location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                First appeared in:{" "}
                {getEpisodeFormated(data.character.episode[0].episode)}
                <IconButton aria-label="tv">
                  <TvIcon />
                </IconButton>
              </Typography>
              <Box width={"100%"}>
                <Typography variant="h5" color="text.secondary">
                  Episodes
                </Typography>
                <Box
                  sx={{ overflowY: "scroll" }}
                  maxHeight={100}
                  width={"100%"}
                >
                  {data.character.episode.map((episode) => (
                    <Typography variant="body2" color="text.secondary">
                      {episode.name}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Typography component="legend">Rating</Typography>
              <Rating
                name="character-rating"
                value={data.character.rating}
                onChange={(event, rating) => {
                  if (rating) {
                    setCharacterRating({ variables: { rating } });
                  }
                }}
              />
            </CardContent>
          </>
        ) : (
          <CardContent
            sx={{
              width: "100%",
              margin: "50px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </CardContent>
        )}
      </Card>
    </Modal>
  );
}
