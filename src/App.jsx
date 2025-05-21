import React from "react";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AddPersonForm from "./components/AddPersonForm";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-row">
        <div className="basis-1/6"></div>
        <div className="basis-1/3">
          <ProfileCard />
        </div>
        <div className="basis-2/3">
          <AddPersonForm />
        </div>
        <div className="basis-1/6"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
