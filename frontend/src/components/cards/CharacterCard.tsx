import {
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

interface ICharacterCardProps {
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
}
export function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  episode,
}: ICharacterCardProps) {
  const [inFocus, setInFocus] = useState(false);
  const GenderIcon =
    gender === "Male" ? Male : gender === "Female" ? Female : AdjustOutlined;

  const genderColor =
    gender === "Male" ? "#71B8D9" : gender === "Female" ? "#FB6467" : "#E7DB25";

  const episodeNum = episode[0].id;

  return (
    <>
      <Card sx={{ margin: 0 }}>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onClick={() => setInFocus(true)}
        >
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ width: 140, height: 160 }}
          />
          <CardContent
            sx={{
              height: 134,
              padding: "13px",
              overflow: "hidden",
            }}
          >
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
              {status} {species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              From {origin.name}
              {origin.name === "unknown" && " planet"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {inFocus ? (
        <PreviewCharacter
          open={inFocus}
          handleClose={() => setInFocus(false)}
          id={id}
        />
      ) : null}
    </>
  );
}
