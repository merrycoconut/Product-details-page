import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import { useState, useEffect } from 'react';
import './ProductDetail.css';


export default function ProductDetails () {
    const [productData, setProductData] = useState();

    async function pullJson() {
        // Get product data and Render
        let response = await fetch ("https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie");          
        let result = await response.json();
        setProductData(result);
    }

    useEffect(() => {
        pullJson();              
    }, []);

    return (
        <div className='product-detail'>
            { productData && (
                <>
                    <ProductImageGallery productData={productData} />
                    <ProductInfo productData={productData} />
                </>
            ) }  
        </div>
    )
}