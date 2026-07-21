import { useUser } from "@clerk/react";
import { Navigate, Outlet } from "react-router-dom";

import Loading from "../pages/Loading";

const ProtectedRoute = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <Loading />;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />

};

export default ProtectedRoute;
