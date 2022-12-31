import React from 'react';
import Rekomendasi from "./Rekomen";
import Apa from "./Apa";
import Review from './Review';
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Rekomendasi />
      <Apa />
      <Review />
    </div>
  );
}
export default Home;