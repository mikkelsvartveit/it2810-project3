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
    return `Season ${Number.parseInt(seasonNum)} Episode ${Number.parseInt(
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
      <Card className="preview-card" sx={{ flexDirection: "column" }}>
        {data ? (
          <>
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
              <Typography variant="h3" component="div">
                {data.episode.name}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
              >
                {formatEpisodeAndSeason(data.episode.episode)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Released {data.episode.air_date}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                Characters:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "2%",
                  width: "100%",
                  justifyContent: "flex-start",
                  overflowY: "scroll",
                  maxHeight: "40vh",
                }}
              >
                {data.episode.characters.map((character) => (
                  <CardMedia
                    key={character.id}
                    component="img"
                    image={character.image}
                    alt={character.name}
                    sx={{ width: "14%", borderRadius: "50%" }}
                  />
                ))}
              </Box>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="episode-rating"
                value={data.episode.rating}
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
