import "./ProductImageGallery.css";
import { useState } from "react";
import type { ProductData } from "../../utils/productSpecificationContents";

type ProductImageGalleryProps = {
  productData: ProductData;
  selectedColor: number;
};

export default function ProductImageGallery({
  productData,
  selectedColor,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  type ImgObj = { color: string; image_url: string };

  const imgUrls: string[] = productData.images
    .filter((img: ImgObj) => img.color === productData.colors[selectedColor])
    .map((targetImg: ImgObj) => targetImg.image_url);

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

type ThumbnailProps = {
  imgUrls: string[];
  onThumbnailClick: React.Dispatch<React.SetStateAction<number>>;
};

function Thumbnail({ imgUrls, onThumbnailClick }: ThumbnailProps) {
  return (
    <div className="product-image-thumbnail-container">
      {imgUrls.map((imgUrl, index) => {
        return (
          <img
            key={imgUrl as React.Key}
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
