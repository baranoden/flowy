import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/index";
import Dashboard from "../views/pages/dashboard/Dashboard";
import Login from "../views/pages/auth/Login";
import ProtectedRoute from "../libs/protectedRoute";
import Register from "../views/pages/auth/Register";
import Logout from "../views/pages/auth/Logout";
import Admin from "../views/pages/admin/Admin";
import User from "../views/pages/user/User";
import PermissionRoute from "../libs/permissionRoute";
import General from "../views/pages/general/General";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/admin"
          element={
            <PermissionRoute permission="admin">
              <Admin />
            </PermissionRoute>
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/general" element={<General />} />
      </Route>
    </Routes>
  );
};

export default Router;
