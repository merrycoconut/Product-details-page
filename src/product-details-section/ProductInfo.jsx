export default function ProductInfo ({ productData }) {
    // Get the info later, construct the structure first
    const productName = productData.name;


    return (
        <div>
            <p className="product-name"> {productName} </p>
            <p> $76 </p>
            <p>4.1 ★★★★☆ <span>See all 62 reviews</span></p> 
            <p>
                The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.
            </p>
            <form>
                <fieldset>
                    <legend>Avaliable Colors</legend>
                    <label>
                        <input type="checkbox" name="color"value="red" />
                        Red
                    </label>
                    <label>
                        <input type="checkbox" name="size"value="green" />
                        Green
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Avaliable Sizes</legend>
                    <label>
                        <input type="checkbox" name="size"value="xs" />
                        XS
                    </label>
                    <label>
                        <input type="checkbox" name="size"value="s" />
                        S
                    </label>
                    <label>
                        <input type="checkbox" name="size"value="m" />
                        M
                    </label>
                    <label>
                        <input type="checkbox" name="size "value="l" />
                        L
                    </label>
                    <label>
                        <input type="checkbox" name="size "value="xl" />
                        XL
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Quantity</legend>
                    <input type="number"></input>
                </fieldset>
                <input type="submit" value="Add to Cart" />
            </form>

        </div>

        
    )
} 