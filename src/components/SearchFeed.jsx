import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?.part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
        justifyContent: "center",
        marginLeft: { sx: 0, md: "7.5%" },
        p: { sx: 1, md: 2 },
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", ml: { sx: 0, sm: 0, md: 4 } }}
      >
        Search Results for:<span style={{ color: "red" }}> {searchTerm} </span>
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
