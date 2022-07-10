import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  { path: "/home", children: <Home /> },
  { path: "/home/user_management", children: <UserManagement /> },
  { path: "/home/setting", children: <Setting /> },
];
