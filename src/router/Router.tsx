import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route
          path={route.path}
          element={<HeaderLayout>{route.children}</HeaderLayout>}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
