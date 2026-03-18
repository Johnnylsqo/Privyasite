import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import TermsPage from "./pages/TermsPage";
import PlansPage from "./pages/PlansPage";

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
  {
    path: "/termos",
    Component: TermsPage,
  },
  {
    path: "/planos",
    Component: PlansPage,
  },
]);