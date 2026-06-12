import "./ProductImageGallery.css";
import { useState } from "react";

export default function ProductImageGallery({ productData, selectedColor }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const imgUrls = productData.images
    .filter((img) => img.color === productData.colors[selectedColor])
    .map((targetImg) => targetImg.image_url);

  return (
    <div className="product-image-gallery">
      <div className="product-image-main-gallery">
        <img
          className="product-image"
          src={imgUrls[activeIndex]}
          alt="productimage"
        />
      </div>
      <Thumbnail imgUrls={imgUrls} onThumbnailClick={setActiveIndex} />
    </div>
  );
}

function Thumbnail({ imgUrls, onThumbnailClick }) {
  return (
    <div className="product-image-thumbnail-container">
      {imgUrls.map((imgUrl, index) => {
        return (
          <img
            key={imgUrl}
            className="product-image thumbnail-item"
            src={imgUrl}
            alt="product image"
            onClick={() => onThumbnailClick(index)}
          />
        );
      })}
    </div>
  );
}
