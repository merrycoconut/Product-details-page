import './ProductSummary.css'
import ProductPurchase from './ProductPurchase';
import ProductInfo from './ProductInfo';
import ProductPrice from './ProductPrice';

export default function ProductSummary ({ productData }) {
    // Get the info later, construct the structure first
    const productName = productData.name;
    const productRating = productData.rating;
    const productReviews = productData.reviews;
    const productDescription = productData.description;


    return (
        <div className='product-summary'>
            <p className="product-name"> {productName} </p>
            <ProductPrice productData={productData}/>
            <p className='product-rating'>{productRating} ★★★★☆ 
                <span className='product-rating-reviews'>See all {productReviews} reviews</span>
            </p> 
            <p className='product-description'> {productDescription} </p>
            <ProductPurchase productData={productData}/>
            <ProductInfo productData={productData}/>

        </div>

        
    )
} 