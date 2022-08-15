import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Badge, Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
const notification = [
  {
    user: "Yaagoub Gamal Eldin Gibiaza",
    type: "Job proposal",
    time: "5 minutes ago",
    seen: false,
    id: 1,
  },
  {
    user: "Khaled Kashmiri",
    type: "Job proposal",
    time: "2 hours ago",
    seen: false,
    id: 2,
  },
  {
    user: "Khedher Karawita",
    type: "Job proposal",
    time: "5 days ago",
    seen: true,
    id: 3,
  },
  {
    user: "Ismail Ahmad kanabawi",
    type: "Job proposal",
    time: "5 days ago",
    seen: true,
    id: 4,
  },
  {
    user: "Othman Abdeljalil Chicha",
    type: "Job proposal",
    time: "5 days ago",
    seen: true,
    id: 5,
  },
  {
    user: "Mohmad Sonbol",
    type: "Job proposal",
    time: "5 days ago",
    seen: true,
  },
];

function NotificationMenu() {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const [notifications, setNotifications] = useState(notification);
  const unread = notifications.filter((notif) => !notif.seen).length;

  const handleOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClick = (targetNotification) => {
    setNotifications(
      notifications.map((el) => {
        if (el.id === targetNotification.id) {
          return { ...el, seen: true };
        }
        return el;
      })
    );
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({
        ...notif,
        seen: true,
      }))
    );
  };
  return (
    <>
      <IconButton
        color="primary"
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={unread} color="error" overlap="circular">
          <Icon
            icon={open ? "eva:bell-fill" : "eva:bell-outline"}
            width={32}
            height={32}
          />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorElement}
        id="account-menu"
        open={open}
        onClose={handleClose}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            maxHeight: "70vh",
            overflow: "auto",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiMenuItem-root": {
              m: 0.75,
              typography: "body2",
              borderRadius: 3,
              display: "block",
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          sx={{
            display: "flex",
            px: 2.5,
            alignItems: "center",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ my: 1.5 }}>
            <Typography variant="subtitle2" noWrap>
              Notifications
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              You have {unread} unseen requests
            </Typography>
          </Box>

          <Tooltip title=" Mark all as read">
            <IconButton
              color="primary"
              sx={{ width: 40, height: 40 }}
              onClick={handleMarkAllAsRead}
              disabled={unread === 0}
            >
              <Icon icon="eva:done-all-fill" width={20} height={20} />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />
        {React.Children.toArray(
          notifications.map((notif) => (
            <MenuItem
              sx={{ backgroundColor: !notif.seen ? "action.selected" : "" }}
              onClick={() => handleClick(notif)}
            >
              <Box display="flex" alignItems="center">
                <Avatar />
                <Typography display="block" variant="body1">
                  {notif.user}
                </Typography>
              </Box>
              <Typography variant="subtitle1">{notif.type}</Typography>
              <Typography variant="caption">{notif.time}</Typography>
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
}

export default NotificationMenu;
