import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-darkBlue font-bold text-tosca">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
