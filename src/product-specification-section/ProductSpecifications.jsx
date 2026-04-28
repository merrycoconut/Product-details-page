import './ProductSpecifications.css';
import ProductTabs from './ProductTabs';
import { RiRecycleLine, RiPaintLine, RiPlantLine, RiWaterFlashLine, RiTShirt2Line, RiHandHeartLine, RiWindyLine, RiColorFilterLine, RiStackLine, RiScales2Line, RiShieldStarLine, RiPriceTag2Line, RiRainbowLine, RiShirtLine, RiInfinityLine, RiShapesLine } from "@remixicon/react";
import { useState } from 'react';

export default function ProductSpecifications () {
    const [isActive, setActive] = useState(0);

    return (
        <div className="product-specification">
            <p className='product-specification-title'>
                {productSpecificationContents.title}
            </p>
            <p className='product-specification-description' >
                {productSpecificationContents.description}
            </p>
            <ProductTabs isActive={isActive} setActive={setActive} tabLists= {productSpecificationContents.tabLists}/>
        </div>
    )
}

const productSpecificationContents = {
    title: "Discover timeless elegance",
    description: "Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.",
    tabLists: [
        {   
            id: 0,
            name: "Sustainability",
            title: "Eco-Friendly Choice",
            image: {
                src: "/img/product-specification-section/yellow-desktop.jpg",
                alt: "a wowman in yellow sweater",
            },
            description: "With our sustainable approach, we curate clothing that makes a statement of care-care for the planet, and for the art of fashion.",
            labels: [
                {
                    icon: <RiRecycleLine />,
                    name: "Recycled Materials",
                },
                {
                    icon: <RiPaintLine />,
                    name: "Low Impact Dye",
                },
                {
                    icon: <RiPlantLine />,
                    name: "Carbon Neutral",
                },
                {
                    icon: <RiWaterFlashLine />,
                    name: "Water Conservation",
                },
            
            ]
        },
        {   
            id: 1,
            name: "Comfort",
            title: "Uncompromised Comfort",
            image: {
                src: "/img/product-specification-section/black-desktop.jpg",
                alt: "Black fabric",
            },
            description: "Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.",
            labels: [
                {
                    icon: <RiTShirt2Line />,
                    name: "Ergonomic Fits",
                },
                {
                    icon: <RiHandHeartLine />,
                    name: "Soft-to-the-Touch Fabrics",
                },
                {
                    icon: <RiWindyLine />,
                    name: "Breathable Weaves",
                },
                {
                    icon: <RiColorFilterLine />,
                    name: "Thoughtful Design",
                },
            
            ]
        },
        {   
            id: 2,
            name: "Durability",
            title: "Built to Last",
            image: {
                src: "/img/product-specification-section/chair-desktop.jpg",
                alt: "Clothes on chair",
            },
            description: "Here's to apparel that you can trust to look as good as new, wear after wear, year after year.",
            labels: [
                {
                    icon: <RiStackLine />,
                    name: "Reinforced Construction",
                },
                {
                    icon: <RiScales2Line />,
                    name: "Quality Control",
                },
                {
                    icon: <RiShieldStarLine />,
                    name: "Material Resilience",
                },
                {
                    icon: <RiPriceTag2Line />,
                    name: "Warranty and Repair",
                },
            
            ]
        },
        {   
            id: 3,
            name: "Versatile",
            title: "Versatile by Design",
            image: {
                src: "/img/product-specification-section/clothes-desktop.jpg",
                alt: "Some clothes",
            },
            description: "Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch.",
            labels: [
                {
                    icon: <RiRainbowLine />,
                    name: "Adaptive Styles",
                },
                {
                    icon: <RiShirtLine />,
                    name: "Functional Fashion",
                },
                {
                    icon: <RiInfinityLine />,
                    name: "Timeless Aesthetics",
                },
                {
                    icon: <RiShapesLine />,
                    name: "Mix-and-Match Potential",
                },
            
            ]
        },
    ]

};