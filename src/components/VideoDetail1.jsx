import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Loader } from "./";

const VideoDetail1 = () => {
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

  if (!videoDetail?.snippet) return Loader;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack direction={{ xs: "column", md: "row", pl: { sx: 0, md: 4 } }}>
        <Box flex={1}>
          <Box
            sx={{
              width: { sx: "90%", md: "100%" },
              maxHeight: { xs: "30vh", sm: "350px", md: "500px" },

              position: "sticky",
              top: "86px",
              p: 2,
            }}
          >
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              color="#fff"
              px={2}
              py={1}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/channel/${channelId}`}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography sx={{ fontSize: "13px" }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={1}
          mt={{ sx: 4 }}
          py={{ sm: 1, md: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail1;
