import React from 'react';

import './styles/global.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Content from './containers/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}

export default App;
