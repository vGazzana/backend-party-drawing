import AuthenticationRoutes from "./authentication.js";

const routes = [
  {
    prefix: "/auth",
    route: AuthenticationRoutes,
    public: ["/register", "/login"],
  },
];

function getAllRoutes() {
  return routes;
}

export { getAllRoutes };
