import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Female from "@mui/icons-material/Female";
import Male from "@mui/icons-material/Male";
import AdjustOutlined from "@mui/icons-material/AdjustOutlined";
import { PreviewCharacter } from "./";
import { Star } from "@mui/icons-material";

export interface ICharacterCardProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  episode: {
    id: number;
  }[];
  rating: number;
  episodeCount: number;
}
export function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  rating,
  episodeCount,
}: ICharacterCardProps) {
  const [inFocus, setInFocus] = useState(false);
  const GenderIcon =
    gender === "Male" ? Male : gender === "Female" ? Female : AdjustOutlined;

  const genderColor =
    gender === "Male" ? "#71B8D9" : gender === "Female" ? "#FB6467" : "#E7DB25";

  return (
    <>
      <Card sx={{ margin: 0 }} data-testid={"character-card-" + id }>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onClick={() => setInFocus(true)}
        >
          <Box sx={{ width: 135, height: 150 }}>
            <CardMedia
              component="img"
              image={image}
              alt={name}
              sx={{ width: 135, height: 150 }}
            />
          </Box>
          <CardContent
            sx={{
              height: 150,
              width: "100%",
              boxSizing: "border-box",
              padding: "10px 12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 40,
                  whiteSpace: "nowrap",
                }}
              >
                <GenderIcon style={{ color: genderColor }} />
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "6px",
                  }}
                >
                  {name}
                </span>
              </Typography>

              <Typography variant="subtitle2" color="text.secondary">
                {species} ({status}
                {status === "unknown" && " status"})
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  width: "100%",
                  marginTop: "4px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                From{" "}
                <strong>
                  {origin.name}
                  {origin.name === "unknown" && " planet"}
                </strong>
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
                In <strong>{episodeCount}</strong>
                {episodeCount === 1 ? " episode" : " episodes"}
              </Typography>
              {rating && (
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
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
                    data-testid={"ratin-on-character-card-" + id}
                  >
                    {rating} / 5
                  </span>
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <PreviewCharacter
        open={inFocus}
        handleClose={() => setInFocus(false)}
        id={id}
      />
    </>
  );
}
