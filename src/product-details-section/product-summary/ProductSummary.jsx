import "./ProductSummary.css";
import ProductPurchase from "./ProductPurchase";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

export default function ProductSummary({
  productData,
  selectedColor,
  onSelectedColorChange,
}) {
  // Get the info later, construct the structure first
  const productName = productData.name;
  const productRating = productData.rating;
  const productReviews = productData.reviews;
  const productDescription = productData.description;

  const reviewContext = productReviews
    ? `See all ${productReviews} review`
    : "No reviews yet. Be the first";

  return (
    <div className="product-summary">
      <p className="product-name"> {productName} </p>
      <ProductPrice productData={productData} />
      <div>
        <p className="product-rating">
          {productRating} ★★★★☆
          <span className="product-rating-reviews"> {reviewContext} </span>
        </p>
      </div>
      <p className="product-description"> {productDescription} </p>
      <ProductPurchase
        productData={productData}
        selectedColor={selectedColor}
        onSelectedColorChange={onSelectedColorChange}
      />
      <ProductInfo productData={productData} />
    </div>
  );
}
