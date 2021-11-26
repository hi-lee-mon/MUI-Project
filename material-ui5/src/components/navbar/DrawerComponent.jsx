import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

// ■Drawer
// open:boolean
// anchorで表示か所を変更
// ■ListItem
// buttonでボタン化できる。

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>men</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Women</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};
