// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';

function App() {

  const images = [
    "https://picsum.photos/id/234/1000/500",
    "https://picsum.photos/id/235/1000/500",
    "https://picsum.photos/id/236/1000/500",
    "https://picsum.photos/id/237/1000/500"
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
