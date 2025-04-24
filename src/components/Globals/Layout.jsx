import React from "react";

import Footer from "./Footer";
import HomeNavbar from "../Home/HomeNavbar";

const Layout = ({ page }) => {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <HomeNavbar/>
      <div className="w-full">{page}</div>
      <Footer />
    </div>
  );
};

export default Layout;
