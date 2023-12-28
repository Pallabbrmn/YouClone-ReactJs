import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/contstants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  // console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: {
          md: "380px",
          xs: "100%",
          boxShadow: "none",
          borderRadius: "10px",
          backgroundColor: "black",
          overflow: "hidden",
        },
        height: {
          md: "270px",
          xs: "250px",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          className="thumbnail"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 380, height: 190 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#343434",
          height: "100px",
          p: { xs: 1 },
          pt: { xs: 2 },
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
        >
          <Typography
            marginTop={-1}
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            lineHeight={1.5}
          >
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 50) ||
              demoChannelTitle.slice(0, 50)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
