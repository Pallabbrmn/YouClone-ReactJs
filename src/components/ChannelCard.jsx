import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/contstants";

function ChannelCard({ channel, marginTop, marginLeft }) {
  return (
    <Box
      sx={{
        width: {
          md: "380px",
          xs: "100%",
          boxShadow: "none",
          borderRadius: "10px",
        },
        height: "290px",
        marginTop,
        marginLeft,
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        to={`channel/${channel?.id?.channelId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt="profile-picture"
            sx={{
              borderRadius: "20%",
              height: "200px",
              width: "200px",
              ml: "21%",
              mb: "10px",
            }}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
