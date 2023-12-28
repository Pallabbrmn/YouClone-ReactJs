import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

function Videos({ videos, direction }) {
  if (!videos?.length) return Loader;
  return (
    <Stack
      direction={direction || "row"}
      px={{ xs: 0, sm: 4 }}
      flexWrap="wrap"
      gap={5}
      justifyContent="start"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
