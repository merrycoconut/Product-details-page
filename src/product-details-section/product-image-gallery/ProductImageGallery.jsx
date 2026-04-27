import './ProductImageGallery.css';
import { useState } from 'react';

export default function ProductImageGallery ({ productData, selectedColor }) {    
    const [isActive, setActive] = useState(0);    

    const targetImgs = productData.images.filter(img => img.color === productData.colors[selectedColor]);
    const imgUrls = targetImgs.map(targetImg => targetImg.image_url);


    function Thumbnail ({ isActive }) {
        const thumbnails = imgUrls.map((imgUrl, index) => {
            return (
                    <img 
                        key={imgUrl} 
                        className='product-image thumbnail-item' 
                        src={imgUrl} 
                        alt="product image" 
                        onClick={() => setActive(index)} 
                    />
            )
        });

        return (
            <div className='product-image-thumbnail-container'>
                {thumbnails}
            </div>
        )
    }

    return (
        <div className="product-image-gallery">
            <div className='product-image-main-gallery'> 
                <img className='product-image' src={imgUrls[isActive]} alt="productimage" />
            </div>
            <Thumbnail isActive={isActive} />
        </div>
        
    )
} 