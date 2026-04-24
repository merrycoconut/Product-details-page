import './ProductPrice.css'

export default function ProductPrice({productData}) {
    const list_price = productData.inventory[0].list_price;
    const sale_price = productData.inventory[0].sale_price;
    const onSale = list_price > sale_price;
    const discount_percentage = productData.inventory[0].discount_percentage;

    return (
        <div className='product-price'>
            { onSale ? 
                <>
                    <p>${sale_price} <s className='sale-price'>${list_price}</s></p>
                    <div className='discount-percentage'>{discount_percentage}% OFF</div>
                </> : 
                <p> ${list_price} </p>
            }

        </div>
    )
}