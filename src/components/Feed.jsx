import React, { useEffect } from "react";
import { useState, UseEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";

import { fetchFromAPI } from "../utils/youtubeOptions";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        flexDirection: {
          sm: "column",
          md: "row",
        },
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          height: {
            sm: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright (c) Smartrove Designs
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" mb={2} sx={{ color: "#fff" }}>
          {selectedCategory}
          <span px={5} style={{ color: "#FC1503", marginLeft: "5px" }}>
            videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
