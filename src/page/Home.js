// src/pages/Home.js
import React from 'react';
import Header from '../component/Header';
import Body from '../component/Body_home';

const Home = () => {
  return (
    <div className="w-[1920px] h-[1080px] mx-auto bg-[#fff]">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
