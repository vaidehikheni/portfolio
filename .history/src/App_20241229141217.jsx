import { useState } from "react";
import "./main.scss";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <div>
        <h1>Welcome to Vite + React + SCSS</h1>
      </div>
    </>
  );
}

export default App;
