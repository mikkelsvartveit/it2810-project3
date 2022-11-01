import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { formatEpisodeAndSeason } from "../../utils/helpers";
import { useSetEpisodeRating } from "../../gql/mutations";
import { useGetEpisode } from "../../gql/queries";
import { PreviewCharacter } from "./PreviewCharacter";
import { ErrorAlert } from "./ErrorAlert";
import { ApolloError } from "@apollo/client";

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
  const { data, error: queryError, loading, refetch } = useGetEpisode(id);

  const [setEpisodeRating, { error: mutationError, reset }] =
    useSetEpisodeRating(id);

  // ID of the character to preview in modal. -1 hides the modal.
  const [characterPreviewId, setCharacterPreviewId] = useState(-1);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card className="preview-card">
        {data && data.episode ? (
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
                    <Tooltip
                      title={
                        <Typography fontSize={16}>{character.name}</Typography>
                      }
                      placement="top"
                      arrow
                    >
                      <CardMedia
                        component="img"
                        image={character.image}
                        alt={character.name}
                        onClick={() => setCharacterPreviewId(character.id)}
                        sx={{
                          borderRadius: "50%",
                          border: "3px solid white",
                          boxSizing: "border-box",
                          boxShadow: "0 0 5px 0px rgba(0,0,0,0.5)",
                          aspectRatio: "1 / 1",
                          transitionDuration: "0.1s",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(1.07)",
                          },
                        }}
                      />
                    </Tooltip>
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
              {mutationError ? (
                <ErrorAlert
                  error={mutationError}
                  handleRetry={reset}
                  buttonLabel={"Reset"}
                />
              ) : (
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
              )}
            </CardContent>

            {characterPreviewId !== -1 && (
              <PreviewCharacter
                open={characterPreviewId !== -1}
                handleClose={() => setCharacterPreviewId(-1)}
                id={characterPreviewId}
              />
            )}
          </>
        ) : (queryError || data?.episode == null) && !loading ? (
          <CardContent className="card-content">
            <ErrorAlert
              error={
                queryError ??
                new ApolloError({ errorMessage: "Episode not found" })
              }
              handleRetry={refetch}
            />
          </CardContent>
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
