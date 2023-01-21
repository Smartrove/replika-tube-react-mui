import React, { useEffect } from "react";
import { useState, UseEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/youtubeOptions";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" mb={2} sx={{ color: "#fff" }}>
        Search result for:
        <span
          px={5}
          style={{ color: "#FC1503", marginLeft: "5px", marginRight: "5px" }}
        >
          {searchTerm}
        </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
