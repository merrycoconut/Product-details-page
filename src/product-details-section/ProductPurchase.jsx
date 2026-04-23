import './ProductPurchase.css';

export default function ProductPurchase () {
    return (
        <div>
            <form className='product-purchase'>
                <fieldset>
                    <legend className='selection-label'>Avaliable Colors</legend>
                    <div className='selection-color'>                        
                        <input style={{backgroundColor: "red"}} type="radio" name="color"value="red" />
                        <input style={{backgroundColor: "green"}} type="radio" name="color"value="green" />
                    </div>
                </fieldset>
                <fieldset className='selection-size'>
                    <legend className='selection-label' >Avaliable Sizes</legend>
                    
                    <input type="radio" name="size" value="xs" id="xs" />
                    <label className='selection-size-item' htmlFor="xs" > XS </label>
                    
                    <input type="radio" name="size" value="s" id="s" />
                    <label className='selection-size-item' htmlFor="s" > S </label>
                    
                    <input type="radio" name="size" value="m" id="m" />
                    <label className='selection-size-item' htmlFor="m" > M </label>
                    
                    <input type="radio" name="size" value="l" id="l" />
                    <label className='selection-size-item' htmlFor="l" > L </label>
                </fieldset>
                <fieldset>
                    <legend className='selection-label' >Quantity</legend>
                    <input type="number" />
                </fieldset>
                <div className='cart'>
                    <input type="submit" value="Add to Cart" />
                </div>

            </form>
        </div>
    )
}