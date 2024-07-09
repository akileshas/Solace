import React from 'react';
import Navbar from '../../components/navbar/navbar';

import Footer from '../../components/footer/footer';
import './home.css';

function Home() {
  return (
    <>
      <Navbar />
      <section id="home-page">
        <div className="home-page-cont">
          <h1>Home Page</h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;