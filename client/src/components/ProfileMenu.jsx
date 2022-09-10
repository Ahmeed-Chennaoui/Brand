import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { isLink } from "../utils/isLink";

function ProfileMenu() {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const [anchorElement, setAnchorElement] = useState(null);
  const openAvatar = Boolean(anchorElement);
  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <IconButton
        // the aria part is made for accessibility
        aria-controls={openAvatar ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openAvatar ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt={currentUser.userName.toUpperCase()}
          src={
            currentUser.photo
              ? currentUser.photo
              : process.env.REACT_APP_SERVER_IMAGES + currentUser.picture
          }
          imgProps={{ crossOrigin: "anonymous" }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorElement}
        id="account-menu"
        open={openAvatar}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiMenuItem-root": {
              m: 0.75,
              typography: "body2",
              borderRadius: 0.75,
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {currentUser.userName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {currentUser.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />
        <MenuItem>Account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={() => setCurrentUser({})}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
