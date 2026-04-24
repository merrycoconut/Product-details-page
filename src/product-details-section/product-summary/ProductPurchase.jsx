import './ProductPurchase.css';
import { useState } from 'react';


export default function ProductPurchase ({productData}) {
    const [quantity, setQuantity] = useState(1);

    function handleMinus () {
        if (quantity > 1) {
            event.preventDefault();
            setQuantity(quantity - 1)
        } 
    }

    const colorOptions = productData.colors.map( 
        c => <input style={{backgroundColor: c}} type="radio" name="color"value={c} />
    );

    const sizeOptions = productData.sizes.map(size => {
        return (<>
            <input type="radio" name="size" value={size} id={size} />
            <label className='selection-size-item' htmlFor={size} > {size.toUpperCase()} </label>
        </>) 
    } );


    return (
        <div>
            <form className='product-purchase'>
                <fieldset>
                    <legend className='selection-label'>Avaliable Colors</legend>
                    <div className='selection-color'> {colorOptions} </div>
                </fieldset>
                <fieldset className='selection-size'>
                    <legend className='selection-label' >Avaliable Sizes</legend>
                    {sizeOptions}
                </fieldset>
                <fieldset>
                    <label className='selection-label' id='quantity' >Quantity</label>
                    <div className='quantity-modifier'>
                        <button onClick={handleMinus}>─</button>
                        <p>{quantity}</p>
                        <button onClick={
                            () => {
                                event.preventDefault();
                                setQuantity(quantity + 1);
                            }
                        }>+</button>
                    </div>
                    
                </fieldset>
                <div className='cart'>
                    <input type="submit" value="Add to Cart" />
                </div>

            </form>
        </div>
    )
}