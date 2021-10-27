import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// ■Toolbar
// Toolbarの間には好きなものを置ける
// Toolbarの内側に置かれた要素にはマージンが与えられる
// elevation={0}を0にすることでAppBarの影を消すことができる。
// ■makeStyles
// 現在は非推奨。sx propsを利用する
// ■sx props
// themeにアクセスできるデザインをカスタムするためのショートカット。
// ■ヘッダーの作り方
// Toolbar配下をboxで構造化する。
// 一番親のBoxに対してflexboxを当てる。
// あとはその配下の要素に対してflexの機能を当てていく。
// 時々flexが効かないことがあるが、widthやheightが足りていないか確認すること。
// ■justifyContent
// 子要素の配置を変える？
// ■alignItems
// 縦の位置をそろえる。centerにすれば縦軸の真ん中に子要素を持っていける。主軸に注意
// ■disableElevation
// Buttonコンポーネントで利用している。高さを無くせる。

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  console.log(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          {/* logo */}
          <Box>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/* links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
              // Menuのid属性と一致させる
              aria-controls="basic-menu"
              // 必須
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* ドロップダウンアイテム */}
            <Menu
              // Typographyと一致させる
              id="basic-menu"
              // TypographyのHTML要素を入れることでMenuの位置を指定
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
            </Menu>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
            >
              Women
            </Typography>
            <Typography
              sx={{ mr: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/* button Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Button disableElevation variant="outlined">
              Account
            </Button> */}
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBagIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
