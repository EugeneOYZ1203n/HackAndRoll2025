import React from "react";
import { Grid, Box, Heading, Text } from "@chakra-ui/react";
import NewsPost from "./NewsPost";

const LandingPosts = ({data}) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"  // Create 3 equal-width columns
      gap={4}                            // Space between grid items
    >
      {/* 9 components arranged in a 3x3 grid */}
      {[...Array(9)].map((_, index) => (
        <Box key={index} p={4} bg="teal.100" borderRadius="md" boxShadow="md">
          <NewsPost articleData = {data[index]}/>
        </Box>
      ))}
    </Grid>
  );
};

export default LandingPosts;
