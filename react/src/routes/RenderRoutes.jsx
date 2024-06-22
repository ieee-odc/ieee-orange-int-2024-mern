import { Route } from "react-router-dom";

export const renderRouter = (routes) => {
  return routes.map((route) => (
    <Route
      path={route.path}
      element={
        <>
          {route.head && route.head}
          {route.element}
        </>
      }
    />
  ));
};
