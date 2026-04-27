import './ProductPurchase.css';
import { useState } from 'react';


export default function ProductPurchase ({productData, selectedColor, setSelectedColor }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(0);

    function handleMinus () {
        if (quantity > 1) {
            event.preventDefault();
            setQuantity(quantity - 1)
        } 
    }

    const colorOptions = productData.colors.map( 
        (c, index) => <input key={c} style={{backgroundColor: c}} type="radio" name="color"value={c} checked={index === selectedColor} onChange={() => setSelectedColor(index)} />
    );

    const sizeOptions = productData.sizes.map((size, index) => {
        const isChecked = index === selectedSize;

        return (
            <div  
                className={isChecked ? 
                    'selection-size-item selection-size-item-checked' : 
                    'selection-size-item' } 
                key={size} 
            >
                <input  
                    type="radio" 
                    name="size" 
                    value={size} 
                    id={size} 
                    checked={isChecked}
                    onChange={() => setSelectedSize(index)}
                />
                <label  htmlFor={size} > {size.toUpperCase()} </label>
            </div>
        ) 
    } );


    return (
        <div>
            <form className='product-purchase'>
                <fieldset>
                    <legend className='selection-label'>Avaliable Colors</legend>
                    <div className='selection-color-options'> {colorOptions} </div>
                </fieldset>
                <fieldset className='selection-size'>
                    <legend className='selection-label' >Avaliable Sizes</legend>
                    <div className='selection-size-options'>
                        {sizeOptions}
                    </div>
                    
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