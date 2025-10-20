import { createBrowserRouter } from "react-router";
import About from "../components/page/About";
import Contact from "../components/page/Contact";
import Gallery from "../components/page/Gallery";
import Home from "../components/page/Home";
import Prices from "../components/page/Prices";
import Services from "../components/service/Services";
import Hero from "../features/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "",
        Component: Hero,
        index: true,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "prices",
        Component: Prices,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export { router };
