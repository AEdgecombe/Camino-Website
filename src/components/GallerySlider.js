import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/gallery.css';

function GallerySlider({ images }) {
  return (
    <div className="gallery-slider">
      <ImageGallery items={images} showThumbnails={true} />
    </div>
  );
}

export default GallerySlider;