import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Videos } from "./";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { likeCount, viewCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "85px",
              pl: { xs: "5px", md: "20px" },
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant={{ xs: "h6", md: "h4" }}
              fontWeight="bold"
              p={{ xs: 0, md: 1 }}
              mt={{ xs: 1 }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              p={1}
              mt={{ xs: 1, md: -1 }}
              sx={{ color: "#fff" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`channel/${channelId}`}
              >
                <Typography
                  variant={{ xs: "h6", md: "h6" }}
                  color="#fff"
                  sx={{ alignItems: "center" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: { xs: "15px" }, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction={{ xs: "column", md: "row" }}
                gap={{ xs: 1, md: 4 }}
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  sx={{
                    opacity: "0.7",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ThumbUpIcon />
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: "0.7",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <RemoveRedEyeIcon />
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={{ xs: 1, md: 2 }}
          py={{ md: 1, xs: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
