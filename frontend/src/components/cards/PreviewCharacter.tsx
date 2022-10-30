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
    const seasonNum = Number.parseInt(episode.split("E")[0].replace("S0", ""));
    const episodeNum = Number.parseInt(episode.split("E")[1]);
    return `Season ${seasonNum}, Episode ${episodeNum}`;
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

            <CardContent className="card-content">
              <Typography
                variant="h3"
                component="div"
                sx={{
                  marginBottom: "20px",
                  textUnderlineOffset: 10,
                  textDecoration: "underline",
                  textDecorationColor:
                    data.character.gender === "Male"
                      ? "#71B8D9"
                      : data.character.gender === "Female"
                      ? "#FB6467"
                      : "#E7DB25",
                }}
              >
                {data.character.name}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                <strong>
                  {data.character.status} {data.character.species}
                </strong>{" "}
                from <strong>{data.character.origin.name}</strong>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Gender: <strong>{data.character.gender}</strong>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Last seen: <strong>{data.character.location.name}</strong>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                First appeared in:{" "}
                <strong>
                  {getEpisodeFormated(data.character.episode[0].episode)}
                </strong>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ margin: "15px 0 5px 0" }}
              >
                Rating:
              </Typography>

              <Rating
                name="character-rating"
                value={data.character.rating}
                size="large"
                onChange={(event, rating) => {
                  if (rating) {
                    setCharacterRating({ variables: { rating } });
                  }
                }}
              />

              <Box width={"100%"}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ margin: "15px 0 5px 0" }}
                >
                  Featured in {data.character.episode.length}{" "}
                  {data.character.episode.length === 1 ? "episode" : "episodes"}
                  :
                </Typography>
                <Box width={"100%"}>
                  {data.character.episode.map((episode) => (
                    <Typography
                      key={episode.episode}
                      variant="body2"
                      color="text.secondary"
                    >
                      <strong>{episode.episode}:</strong> {episode.name}
                    </Typography>
                  ))}
                </Box>
              </Box>
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
