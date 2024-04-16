import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      variant={"contained"}
      sx={{
        m: "0.5vw",
        width: "60%",
        backgroundColor: "#012d5a",
        color: "white",
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
