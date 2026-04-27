import './ProductSummary.css'
import ProductPurchase from './ProductPurchase';
import ProductInfo from './ProductInfo';
import ProductPrice from './ProductPrice';

export default function ProductSummary ({ productData, selectedColor, setSelectedColor }) {
    // Get the info later, construct the structure first
    const productName = productData.name;
    const productRating = productData.rating;
    const productReviews = productData.reviews;
    const productDescription = productData.description;

    function ProductRating() {
        // To Do: Display dynamic stars

        const reviewContext = productReviews ? `See all ${productReviews} review` : "No reviews yet. Be the first"
        
        return (
            <>
                <p className='product-rating'> {productRating} ★★★★☆ 
                    <span className='product-rating-reviews'> {reviewContext} </span>
                </p> 
            </>
        )
    }


    return (
        <div className='product-summary'>
            <p className="product-name"> {productName} </p>
            <ProductPrice productData={productData}/>
            <ProductRating />
            <p className='product-description'> {productDescription} </p>
            <ProductPurchase productData={productData} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            <ProductInfo productData={productData}/>

        </div>

        
    )
} 