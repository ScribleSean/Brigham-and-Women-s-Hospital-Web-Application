import styles from "../styles/Banner.module.css";
import { Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Popover } from "@mui/material";
import React from "react";

interface UserInfo {
  bannerState: string;
  name?: string;
  role?: string;
  email?: string;
}

function RightSide(props: UserInfo) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (props.bannerState === "loggedIn") {
    return (
      <div className={`${styles.userInfo}`}>
        <div>
          <p className={`${styles.greeting}`}>Hello, {props.name}</p>
          <p className={`${styles.role}`}>Logged in as {props.role}</p>
        </div>
        <IconButton onClick={handleClick}>
          <PersonIcon
            sx={{
              fontSize: "3rem",
              mx: "0.5vw",
              color: "#012d5a",
              "&:hover": {
                color: "#1665c0",
              },
            }}
          />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <div className={`${styles.popover}`}>
            <p className={`${styles.email}`}>{props.email}</p>
            <Button
              variant={"contained"}
              sx={{
                m: "0.5vw",
                width: "60%",
                backgroundColor: "#012d5a",
                color: "white",
              }}
            >
              Logout
            </Button>
          </div>
        </Popover>
      </div>
    );
  } else if (props.bannerState === "loggedOut") {
    return (
      <Button
        variant={"outlined"}
        sx={{
          mx: "0.5vw",
        }}
      >
        Staff Login
      </Button>
    );
  } else if (props.bannerState === "loginPage") {
    return (
      <Button
        variant={"outlined"}
        sx={{
          mx: "0.5vw",
        }}
      >
        Back to Home
      </Button>
    );
  }
}

function Banner(props: UserInfo) {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`${styles.logoAndTitle}`}>
          <img src="/logo.png" alt="logo" className={`${styles.logo}`} />
          <h5 className={`${styles.title}`}>Brigham & Women's Hospital</h5>
        </div>
        <RightSide
          bannerState={props.bannerState}
          name={props.name}
          role={props.role}
          email={props.email}
        />
      </div>
    </>
  );
}

export default Banner;
