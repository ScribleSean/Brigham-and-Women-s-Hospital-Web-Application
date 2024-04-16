import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useMemo } from "react";

// @ts-expect-error roles and children are fine
const ProtectedRoute = ({ roles, children }) => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Memoize the calculation of userRoles
  const userRoles = useMemo(() => {
    return user ? user["http://localhost:3000/roles"] : [];
  }, [user]);

  const isAllowed =
    isAuthenticated &&
    userRoles &&
    userRoles.every((role: string) => roles.includes(role));

  useEffect(() => {
    // If the user is not allowed, redirect them to the home page
    if (!isAllowed ||  (roles.size == 1 && !userRoles.includes("admin"))) {
      alert("You don't have access to this page");
      navigate("/");
    }
  }, [isAllowed, roles, userRoles, navigate]);

  // If the user is allowed, render the children
  return isAllowed ? children : null;
};

export default ProtectedRoute;
