import Layout from "../components/Globals/Layout";

import { lazy } from "react";
import Services from "../pages/Services";

const Home = lazy(() => import("../pages/Home"));

const Rooms = lazy(() => import("../pages/Services"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Contactus = lazy(() => import("../pages/ContactUs"));



export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Home />,
  },

  {
    title: "services",
    url: "/services",
    page: <Layout page={<Services />} />,
  },
  {
    title: "AboutUs Page",
    url: "/about-us",
    page: <Layout page={<AboutUs />} />,
  },
  {
    title: "Contactus Page",
    url: "/contact-us",
    page: <Layout page={<Contactus />} />,
  },


];
