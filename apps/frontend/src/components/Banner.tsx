import styles from "../styles/Banner.module.css";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Popover } from "@mui/material";
import React from "react";
import LoginButton from "./LoginButton.tsx";
import LogoutButton from "./LogoutButton.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface UserInfo {
  name?: string;
  role?: string;
  email?: string;
}

function RightSide(props: UserInfo) {
  const { isAuthenticated, user } = useAuth0();
  const userRoles = user ? user["http://localhost:3000/roles"] : [];
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

  if (isAuthenticated && user) {
    return (
      <div className={`${styles.userInfo}`}>
        <div>
          <p className={`${styles.greeting}`}>Hello, {user.name}</p>
          <p className={`${styles.role}`}>
            Logged in as {userRoles[0]} at {user.email}
          </p>
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
            <LogoutButton />
          </div>
        </Popover>
      </div>
    );
  } else {
    return <LoginButton />;
    // } else if (props.bannerState === "loginPage") {
    //   return (
    //     <Button
    //       variant={"outlined"}
    //       sx={{
    //         mx: "0.5vw",
    //       }}
    //     >
    //       Back to Home
    //     </Button>
    //   );
  }
}

function Banner(props: UserInfo) {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`${styles.logoAndTitle}`}>
          <img src="/logo.png" alt="logo" className={`${styles.logo}`} />
          <h5 className={`${styles.title}`}>Brigham & Women's Hospital</h5>
          <IconButton
            sx={{
              color: "#012d5a",
              "&:hover": {
                color: "#1665c0",
              },
              ml: "8px",
            }}
          >
            <InfoOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#012d5a",
              "&:hover": {
                color: "#1665c0",
              },
            }}
          >
            <CopyrightIcon />
          </IconButton>
        </div>
        <RightSide name={props.name} role={props.role} email={props.email} />
      </div>
    </>
  );
}

export default Banner;
