import React from "react";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
};

export default App;
