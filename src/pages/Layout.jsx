import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}
