import './ProductInfo.css';
import { useActionState, useState } from 'react';

export default function ProductInfo ({productData}) {
    const productInfo = productData.info.map(i => {
        const [isHidden, setHidden] = useState(false);
        const description = i.description.map(d => <li key={d}>{d}</li>)

        return (
            <div className="product-info" key={i.title}>
                <div className="product-info-head" >
                    <p>{i.title}</p>
                    <button onClick={() => setHidden(!isHidden)}>{isHidden? "+" : "─"}</button>
                </div>
            
                <ul hidden={isHidden}> {description} </ul>
            </div>
        )
    })

    return (
        <div className="product-info-container"> {productInfo} </div>
    )
} 