import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {

  React.useEffect(function(){
    const script = document.createElement("script");
    script.src = "/js/carousel.js";
    script.async = false;
    document.body.appendChild(script);
  })
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrived/>
      <Client/>
      <AsideMenu/>
      <Footer/>
    </>
  );
}

export default App;
