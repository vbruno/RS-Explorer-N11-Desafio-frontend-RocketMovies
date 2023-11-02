import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/authHook";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      {useAuth().user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
