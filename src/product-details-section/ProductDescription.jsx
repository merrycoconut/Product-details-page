import './ProductDescription.css';
import { useActionState, useState } from 'react';

export default function ProductDescription () {
    const [isHidden, setHidden] = useState(false);
    return (
        <div className="product-description">
            <div className="product-description-head" >
                <p>Features</p>
                <button onClick={() => setHidden(!isHidden)}>{isHidden? "+" : "─"}</button>
            </div>
            
            <ul hidden={isHidden}>
                <li>Designed for comfort and durability.</li>
                <li>Soft, breathable fabric ideal for travel and adventure.</li>
                <li>Large front pocket and adjustable hood.</li>
                <li>Minimalist design pairs well with any style.</li>
                <li>Made with eco-conscious materials</li>
            </ul>
        </div>

    )
} 