import React from 'react';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Teams from './components/Teams/Teams';
import Project from './components/Projects/Project';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Teams />
      <Project />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
