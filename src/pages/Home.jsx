import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Service from "../components/Service";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import HomePagdData from "../data/HomePagdData.json";

export default function Home() {
  const { hero, socialBtns, brands, about, projects, service, experience, testimonial, contact } =
    HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns}/>
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
