import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { PreviewEpisode } from "./";

interface IEpisodeCardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  rating: number;
}

export function EpisodeCard({
  id,
  name,
  air_date,
  episode,
  rating,
}: IEpisodeCardProps) {
  const [inFocus, setInFocus] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 406, margin: 0 }}>
        <CardActionArea
          sx={{ maxWidth: 406, display: "flex", flexDirection: "row" }}
          onClick={() => setInFocus(true)}
        >
          <CardContent
            sx={{
              width: 406,
              height: 110,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">{name}</Typography>

            <Typography variant="body2" color="text.secondary">
              {episode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {air_date}
            </Typography>
            {rating ? (
              <Typography variant="body2" color="text.secondary">
                Rating: {rating}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
      {inFocus ? (
        <PreviewEpisode
          open={inFocus}
          handleClose={() => setInFocus(false)}
          id={id}
        />
      ) : null}
    </>
  );
}
