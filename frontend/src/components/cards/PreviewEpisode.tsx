import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSetEpisodeRating } from "../../gql/mutations";
import { useGetEpisode } from "../../gql/queries";

export interface IPreviewEpisodeProps {
  id: number;
  open: boolean;
  handleClose: () => void;
}

export function PreviewEpisode({
  open,
  handleClose,
  id,
}: IPreviewEpisodeProps) {
  const { data } = useGetEpisode(id);
  const [setEpisodeRating] = useSetEpisodeRating(id);

  function formatEpisodeAndSeason(episode: string) {
    const episodeNum = episode.split("E")[1];
    const seasonNum = episode.split("E")[0].split("S")[1];
    return `Season ${Number.parseInt(seasonNum)}, Episode ${Number.parseInt(
      episodeNum
    )}`;
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
            <CardContent className="card-character-icons">
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "5px 0 15px 0",
                }}
              >
                {data.episode.characters.length} characters in episode:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {data.episode.characters.map((character) => (
                  <Box
                    key={character.id}
                    sx={{
                      width: "25%",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      padding: "2%",
                    }}
                  >
                    <CardMedia
                      key={character.id}
                      component="img"
                      image={character.image}
                      alt={character.name}
                      sx={{
                        borderRadius: "50%",
                        border: "3px solid white",
                        boxSizing: "border-box",
                        boxShadow: "0 0 5px 0px rgba(0,0,0,0.5)",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>

            <CardContent className="card-content">
              <Typography variant="h3">{data.episode.name}</Typography>

              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
                sx={{ margin: "10px 0", fontSize: "20px" }}
              >
                {formatEpisodeAndSeason(data.episode.episode)}
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Released: <strong>{data.episode.air_date}</strong>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ margin: "20px 0 5px 0" }}
              >
                Rating:
              </Typography>

              <Rating
                name="episode-rating"
                value={data.episode.rating}
                size="large"
                onChange={(event, rating) => {
                  if (rating) {
                    setEpisodeRating({ variables: { rating } });
                  }
                }}
              />
            </CardContent>
          </>
        ) : (
          <CardContent
            sx={{
              width: "100%",
              boxSizing: "border-box",
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
