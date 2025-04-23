import React from 'react';
import '../styles/gallery.css';
import { galleryImages } from '../data/galleryImages';
import GallerySlider from '../components/GallerySlider';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="section-title">Photo Gallery</h2>

      <GallerySlider images={galleryImages} />
    </div>
  );
}

export default Gallery;
