import ProductImageGallery from './product-image-gallery/ProductImageGallery';
import ProductSummary from './product-summary/ProductSummary';
import { useState, useEffect } from 'react';
import './ProductDetail.css';


export default function ProductDetails () {
    const [productData, setProductData] = useState();
    const [selectedColor, setSelectedColor] = useState(0);


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
                    <ProductImageGallery productData={productData} selectedColor={selectedColor} />
                    <ProductSummary productData={productData} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                </>
            ) }  
        </div>
    )
}