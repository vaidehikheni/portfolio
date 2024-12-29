import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CustomCursor />
      <footer className="footer">
        <div className="container">
          <p className="m-0 text-center">© 2023 copyright all right reserved</p>
        </div>
      </footer>
    </>
  );
}
