import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Products = () => {
  return (
    // すべてを囲むボックス
    <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -13 }}>
      {/* 注目商品 */}
      {/* ボックスの内側にGridを配置 */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        {/* グリッドアイテムを配置する */}
        {/* グリッドアイテムはflexなどを用いてグリッドアイテム内の位置を決める */}
        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            //レスポンシブ
            // xsの画面サイズで100%の画像サイズになる
            sx={{ width: { xs: "100%", lg: "20%" } }}
            component="img"
            src="https://source.unsplash.com/random"
          />
          <Box sx={{ pl: "10px", mt: { lg: 10, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter figure 2021
            </Typography>
            <Typography>New item</Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $200.00
            </Typography>
            <Button variant="outlined" size="medium">
              ADD TO CART
            </Button>
          </Box>
        </Grid>
        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            //レスポンシブ
            // xsの画面サイズで100%の画像サイズになる
            sx={{ width: { xs: "100%", lg: "20%" } }}
            component="img"
            src="https://source.unsplash.com/random"
          />
          <Box sx={{ pl: "10px", mt: { lg: 10, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter figure 2021
            </Typography>
            <Typography>New item</Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $200.00
            </Typography>
            <Button variant="outlined" size="medium">
              ADD TO CART
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* 商品リスト */}
    </Box>
  );
};

export default Products;
