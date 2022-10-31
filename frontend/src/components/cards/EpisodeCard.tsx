import { Star } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { PreviewEpisode } from "./";

export interface IEpisodeCardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  rating: number;
  characterCount: number;
}

export function EpisodeCard({
  id,
  name,
  air_date,
  episode,
  rating,
  characterCount,
}: IEpisodeCardProps) {
  const [inFocus, setInFocus] = useState(false);
  return (
    <>
      <Card sx={{ margin: 0 }}>
        <CardActionArea onClick={() => setInFocus(true)}>
          <CardContent
            sx={{
              height: 150,
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 15px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ marginTop: "5px" }}
              >
                <strong>
                  {episode
                    .replace("S", "Season ")
                    .replace("E", ", Episode ")
                    .replaceAll(" 0", " ")}
                </strong>
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {air_date}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                <strong>{characterCount}</strong>
                {characterCount === 1 ? " character" : " characters"} in the
                episode
              </Typography>
              {rating && (
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Star style={{ color: "#faaf00" }} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginLeft: 4,
                      marginTop: 4,
                    }}
                  >
                    {rating} / 5
                  </span>
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <PreviewEpisode
        open={inFocus}
        handleClose={() => setInFocus(false)}
        id={id}
      />
    </>
  );
}
