import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuHide from "./Components/MenuHide/MenuHide";
import NavbarLay from "./Components/NavBar/Navbar";
import "remixicon/fonts/remixicon.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AddPlace from "./Components/Modals/AddPlace/AddPlace";
import Register from "./Components/Register/Register";

const App = () => {
  const menu_active = useSelector((state) => state.layouts.menu);
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.loginStatus ? (
        <>
          <MenuHide />
          <main
            className={`d-flex restContainer ${
              menu_active ? "show_active" : ""
            }`}
          >
            <NavbarLay />
            <div className="ground">
              <div className="title">
                <h2>
                  به سیستم مدریت هوشمند <span>EMACO</span> خوش آمدید.
                </h2>
              </div>
              <HeroSection />
            </div>
          </main>
        </>
      ) : (
        <Register />
      )}
    </>
  );
};

export default App;
