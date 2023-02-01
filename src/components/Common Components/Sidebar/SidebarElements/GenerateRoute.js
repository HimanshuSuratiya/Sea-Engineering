import { Route } from "react-router-dom";
import PageWrapper from "../../../layout/PageWrapper";
import SidebarElements from "./SidebarElements";

const GenerateRoute = routes => {
  return routes.map((route, index) =>
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && GenerateRoute(route.child)}
      </Route>
    )
  )
}

export const SidebarList = GenerateRoute(SidebarElements)