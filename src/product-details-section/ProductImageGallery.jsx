export default function ProductImageGallery ({ productData }) {
    const imgUrl = productData.images[0].image_url;    

    return (
        <div>
            <img src={imgUrl} alt="productimage" height="500"></img>
        </div>
        
    )
} 