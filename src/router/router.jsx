import { Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function Router() {
  const cookies = new Cookies();
  const token = cookies.get("token");

  const renderLogin = () => {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  };

  const renderRoutes = () => {
    return (
      <Routes>
        <Route paht="/Home" element={<Home />} />
        <Route paht="*" element={<Home />} />
      </Routes>
    );
  };

  return token ? renderRoutes() : renderLogin();
}
