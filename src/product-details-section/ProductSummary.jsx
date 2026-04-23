import ProductPurchase from './ProductPurchase';
import ProductDescription from './ProductDescription';
import './ProductSummary.css'

export default function ProductSummary ({ productData }) {
    // Get the info later, construct the structure first
    const productName = productData.name;


    return (
        <div className='product-summary'>
            <p className="product-name"> {productName} </p>
            <p> $76 </p>
            <p>4.1 ★★★★☆ <span>See all 62 reviews</span></p> 
            <p>
                The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.
            </p>

            <ProductPurchase />
            <ProductDescription />

        </div>

        
    )
} 