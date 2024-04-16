import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// @ts-expect-error roles and children are fine
const ProtectedRoute = ({ roles, children }) => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Check if the user is authenticated and if their role is allowed
  const userRoles = user ? user["http://localhost:3000/roles"] : [];
  const isAllowed =
    isAuthenticated &&
    userRoles &&
    userRoles.some((role: string) => roles.includes(role));

  // If the user is not allowed, redirect them to the home page
  if (!isAllowed) {
    navigate("/");
    return null;
  }

  // If the user is allowed, render the children
  return children;
};

export default ProtectedRoute;
