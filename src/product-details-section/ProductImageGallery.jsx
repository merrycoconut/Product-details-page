import './ProductImageGallery.css';

export default function ProductImageGallery ({ productData }) {
    const imgUrl = productData.images[0].image_url;    

    return (
        <div className="product-image-gallery">
            <div className='product-image-main-gallery'>
                <img className='product-image' src={imgUrl} alt="productimage" />
            </div>
            <div className='product-image-others'>
                <div className='product-image-other-item'>
                    <img className='product-image' src={imgUrl} alt="productimage" />
                </div>
                <div className='product-image-other-item'>
                    <img className='product-image' src={imgUrl} alt="productimage" />
                </div>
                <div className='product-image-other-item'>
                    <img className='product-image' src={imgUrl} alt="productimage" />
                </div>
                <div className='product-image-other-item'>
                    <img className='product-image' src={imgUrl} alt="productimage" />
                </div>

            </div>

        </div>
        
    )
} 