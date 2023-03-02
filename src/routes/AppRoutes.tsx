import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { SignIn } from "../pages/SignIn";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
