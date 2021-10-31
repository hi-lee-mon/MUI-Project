import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

/**
 * ■vh
 * vhとはビューポート基準で高さを指定するということ。
 * 100vhでビューポート全体を笑わす。
 * 80vhとすれば画面の8割を表す。
 * pxや%指定のように親の要素を考慮しなくてよい。
 * ■ビューポート
 * 見えている画面全体のこと
 *
 *
 *
 */

export const Header = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        background: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: " center",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "80vh", // flexが効かないときは高さがないか確認すること
          ml: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#f4a261", WebkitTextStroke: "0.5px #fff" }}
        >
          Find Your New Favorite
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#f4a261", WebkitTextStroke: "0.5px #fff" }}
        >
          Collection at Winter
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#f4a261", WebkitTextStroke: "0.5px #fff" }}
        >
          sale 2022
        </Typography>
      </Box>
    </Box>
  );
};
