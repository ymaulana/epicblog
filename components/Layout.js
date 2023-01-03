import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-darkBlue min-h-screen text-tosca font-bold">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
