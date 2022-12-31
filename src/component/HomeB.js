import React from 'react';
import Rekomendasi from "./Rekomen";
import Apa from "./Apa";
import Review from './Review';
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomeB = () => {
  return (
    <div>
      <Header />
      <Rekomendasi />
      <Apa />
      <Review />
    </div>
  );
}
export default HomeB;