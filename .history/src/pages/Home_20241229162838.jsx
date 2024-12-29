import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import HomePagdData from '../data/HomePagdData.json';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} />
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
