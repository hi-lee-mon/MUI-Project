import { Grid, Rating, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";

export const ProductList = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 10 }}>
      <Grid item md={3}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{ width: "50%", height: "50%" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Red short for sports
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff6b00" }}>
          $90.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          $5.95 for shipping
        </Typography>
        {/* 評価 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography>4.9</Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{ width: "50%", height: "50%" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Red short for sports
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff6b00" }}>
          $90.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          $5.95 for shipping
        </Typography>
        {/* 評価 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography>4.9</Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{ width: "50%", height: "50%" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Red short for sports
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff6b00" }}>
          $90.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          $5.95 for shipping
        </Typography>
        {/* 評価 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography>4.9</Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{ width: "50%", height: "50%" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Red short for sports
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff6b00" }}>
          $90.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          $5.95 for shipping
        </Typography>
        {/* 評価 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography>4.9</Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{ width: "50%", height: "50%" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Red short for sports
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff6b00" }}>
          $90.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          $5.95 for shipping
        </Typography>
        {/* 評価 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography>4.9</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
