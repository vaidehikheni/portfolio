import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './main'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, AOS!</h1>
      <p data-aos="fade-left" data-aos-delay="200">
        This paragraph will fade in from the left with a delay.
      </p>
    </div>
  );
}

export default App;