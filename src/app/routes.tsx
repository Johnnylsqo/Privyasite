import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/perfil/:id",
    Component: ProfilePage,
  },
  {
    path: "/busca",
    Component: SearchResultsPage,
  },
  {
    path: "/profile/:id",
    Component: ProfilePage,
  },
]);