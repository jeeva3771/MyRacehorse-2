import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    name: "Buy",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Stable",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Updates",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Perks",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Reviews",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "FAQ",
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    name: "Account",
    path: "/home",
    element: <Home />,
  },
  {
    name: "My Horses",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Experiences",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Merchandise",
    path: "/sign-up",
    element: <SignUp />,
  },

  
];

export default routes;
