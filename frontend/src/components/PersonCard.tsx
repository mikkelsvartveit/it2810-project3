import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ICharacter } from "types";
import PreviewCharacter from "./PreviewCharacter";
import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";
import { Female, Male, AdjustOutlined } from "@mui/icons-material";

export default function PersonCard({
  id,
  name,
  status,
  species,
  gender,
  location,
  image,
  episode,
}: ICharacter) {
  const GenderIcon =
    gender === "Male" ? Male : gender === "Female" ? Female : AdjustOutlined;

  const genderColor =
    gender === "Male" ? "#71B8D9" : gender === "Female" ? "#FB6467" : "#E7DB25";

  const episodeNum = episode[0].id;
  const [inFocus, setInFocus] = useState(false);

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
              {location.name}
              <Icon aria-label="eye">
                <PublicIcon />
              </Icon>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Episode {episodeNum}
              <Icon aria-label="tv">
                <TvIcon />
              </Icon>
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
