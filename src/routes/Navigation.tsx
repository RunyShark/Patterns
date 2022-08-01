import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import {
  RegisterPages,
  ForkmikBasicPage,
  ForkmikYupPage,
} from "../index/index";

import logo from "../logo.svg";
//import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink
                to="/register-page"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikBasic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikYup
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RegisterPages />} />
          <Route path="lazy2" element={<ForkmikBasicPage />} />
          <Route path="lazy3" element={<ForkmikYupPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
