import image1 from "../assets/imgi_26_image.webp";
import image2 from "../assets/imgi_31_image.webp";
import image3 from "../assets/imgi_33_image (1).webp";
import image4 from "../assets/imgi_35_image (1).webp";
import image5 from "../assets/imgi_36_image.webp";
import image6 from "../assets/imgi_37_image.webp";
import image7 from "../assets/imgi_40_image (1).webp";
import image8 from "../assets/imgi_46_image (1).webp";

const Products = [
  {
    id: 1,
    name: "Armani Leather Purse",
    price: 40,
    oldPrice: 50,
    discount: 20,
    description:
      "A classic and elegant leather purse from Armani, perfect for any occasion. Features a spacious interior and timeless design.",
    features: [
      "Spacious main compartment",
      "Internal zip pocket for valuables",
      "Detachable shoulder strap",
      "Polished gold-tone hardware",
    ],
    material: "100% Genuine Leather",
    dimensions: '12" W x 9" H x 5" D',
    image: image1,
  },
  {
    id: 2,
    name: "Armani Purse",
    price: 72,
    oldPrice: 80,
    discount: 10,
    description:
      "Elevate your style with this chic Armani purse. A versatile accessory that combines modern design with everyday functionality.",
    features: [
      "Structured wing silhouette",
      "Dual top handles",
      "Secure top-zip closure",
      "Protective metal feet",
    ],
    material: "Faux Saffiano Leather",
    dimensions: '14" W x 10" H x 6" D',
    image: image2,
  },
  {
    id: 3,
    name: "Givenchy Purse",
    price: 60,
    oldPrice: 75,
    discount: 20,
    description:
      "Make a statement with this luxurious Givenchy purse. Crafted with premium materials, it's the perfect blend of sophistication and style.",
    features: [
      "Signature logo hardware",
      "Magnetic snap closure",
      "Interior slip pockets",
      "Adjustable crossbody strap",
    ],
    material: "Grained Calfskin Leather",
    dimensions: '10" W x 7" H x 3" D',
    image: image3,
  },
  {
    id: 4,
    name: "Givenchy Mini Purse",
    price: 70,
    oldPrice: 80,
    discount: 13,
    description:
      "Compact and stylish, this Givenchy mini purse is ideal for a night out. It's small enough to be convenient, yet bold enough to turn heads.",
    features: [
      "Compact and lightweight design",
      "Chain-link shoulder strap",
      "Flap-front with magnetic closure",
      "Card slots inside",
    ],
    material: "Quilted Faux Leather",
    dimensions: '8" W x 5" H x 2.5" D',
    image: image4,
  },
  {
    id: 5,
    name: "Louis Vuitton Clutch",
    price: 90,
    oldPrice: 110,
    discount: 18,
    description:
      "An iconic Louis Vuitton clutch that exudes luxury. Its sleek design and signature pattern make it a must-have for any fashion enthusiast.",
    features: [
      "Envelope-style design",
      "Woven tassel zipper pull",
      "Two-tone color block",
      "Fully lined interior",
    ],
    material: "Pebbled & Smooth Faux Leather",
    dimensions: '9" W x 6" H x 1" D',
    image: image5,
  },
  {
    id: 6,
    name: "Gucci Handbag",
    price: 85,
    oldPrice: 100,
    discount: 15,
    description:
      "Experience timeless elegance with this stunning Gucci handbag. Featuring exquisite craftsmanship and the iconic Gucci logo.",
    features: [
      "Unique saddle shape",
      "Antique gold-tone stud details",
      "Adjustable shoulder strap",
      "Flap with magnetic closure",
    ],
    material: "Tumbled Full-Grain Leather",
    dimensions: '9.5" W x 7.5" H x 3" D',
    image: image6,
  },
  {
    id: 7,
    name: "Prada Purse",
    price: 95,
    oldPrice: 120,
    discount: 21,
    description:
      "Sophistication meets modern design in this beautiful Prada purse. A versatile piece that will complement any outfit.",
    features: [
      "Minimalist and clean design",
      "Top carry handle and optional strap",
      "Spacious, unlined interior",
      "Subtle embossed logo",
    ],
    material: "Smooth Italian Leather",
    dimensions: '11" W x 8" H x 5" D',
    image: image7,
  },
  {
    id: 8,
    name: "Dior Bag",
    price: 100,
    oldPrice: 130,
    discount: 23,
    description:
      "A symbol of Parisian chic, this Dior bag is the epitome of high fashion. Its elegant silhouette and refined details are simply breathtaking.",
    features: [
      "Elegant top-handle design",
      "Detachable and adjustable strap",
      "Signature Dior charm",
      "Interior zip and patch pockets",
    ],
    material: "Cannage Stitched Lambskin",
    dimensions: '9" W x 8" H x 4.5" D',
    image: image8,
  },
  {
    id: 9,
    name: "Chanel Tote",
    price: 110,
    oldPrice: 140,
    discount: 22,
    description:
      "The perfect everyday companion, this Chanel tote combines practicality with unparalleled luxury. Spacious, stylish, and effortlessly chic.",
    features: [
      "Classic tote silhouette",
      "Durable canvas material",
      "Multiple interior compartments",
      "Comfortable shoulder straps",
    ],
    material: "Cotton Canvas with Leather Trim",
    dimensions: '15" W x 11" H x 7" D',
    image: image2, // Reusing image2
  },
  {
    id: 10,
    name: "Versace Purse",
    price: 78,
    oldPrice: 95,
    discount: 18,
    description:
      "Unleash your inner confidence with this bold Versace purse. Featuring the brand's iconic flair, it's a true fashion statement.",
    features: [
      "Medusa head plaque",
      "Greca hardware on strap",
      "Foldover top with magnetic fastening",
      "Internal slip pocket",
    ],
    material: "Calf Leather",
    dimensions: '10" W x 6" H x 2" D',
    image: image4, // Reusing image4
  },
  {
    id: 11,
    name: "Fendi Monogram Backpack",
    price: 150,
    oldPrice: 180,
    discount: 17,
    description:
      "A perfect blend of utility and luxury, this Fendi backpack is ideal for daily use or travel, featuring the iconic monogram pattern.",
    features: [
      "Durable canvas with leather trim",
      "Padded laptop compartment",
      "Adjustable shoulder straps",
      "Front zip pocket for easy access",
    ],
    material: "Coated Canvas and Calf Leather",
    dimensions: '12" W x 16" H x 6" D',
    image: image1, // Reusing image1
  },
  {
    id: 12,
    name: "Celine Classic Box Bag",
    price: 130,
    oldPrice: 160,
    discount: 19,
    description:
      "An icon of minimalist elegance. The Celine Classic Box Bag features a structured silhouette and a clean, timeless design.",
    features: [
      "Structured boxy shape",
      "Polished gold-tone clasp",
      "Adjustable leather strap",
      "Multiple interior compartments",
    ],
    material: "Smooth Calfskin Leather",
    dimensions: '9.5" W x 7.5" H x 3" D',
    image: image6, // Reusing image6
  },
  {
    id: 13,
    name: "YSL Monogram Wallet",
    price: 65,
    oldPrice: 85,
    discount: 24,
    description:
      "A chic and compact wallet from Saint Laurent, featuring the signature YSL monogram and quilted leather for a touch of luxury.",
    features: [
      "Quilted grain de poudre leather",
      "Iconic YSL metal logo",
      "Multiple card slots and a zip pocket",
      "Snap-button closure",
    ],
    material: "Grain de Poudre Embossed Leather",
    dimensions: '7.5" W x 4" H x 1" D',
    image: image5, // Reusing image5
  },
  {
    id: 14,
    name: "Bottega Veneta Pouch",
    price: 115,
    oldPrice: 145,
    discount: 21,
    description:
      "A modern icon, this soft voluminous clutch is crafted from Bottega Veneta's signature Intrecciato woven leather.",
    features: [
      "Signature Intrecciato 15 weave",
      "Magnetic frame closure",
      "Single spacious compartment",
      "Supple Nappa leather",
    ],
    material: "Nappa Intrecciato Leather",
    dimensions: '15" W x 8" H x 5" D',
    image: image7, // Reusing image7
  },
  {
    id: 15,
    name: "Balenciaga City Bag",
    price: 140,
    oldPrice: 170,
    discount: 18,
    description:
      "The quintessential It-bag with a rock'n'roll edge. The Balenciaga City Bag is known for its soft leather, studs, and tassel details.",
    features: [
      "Soft, distressed lambskin",
      "Signature stud and buckle hardware",
      "Hand-stitched handles and removable strap",
      "Front zip pocket and interior zip pocket",
    ],
    material: "Distressed Lambskin",
    dimensions: '15" W x 9.5" H x 5.5" D',
    image: image8, // Reusing image8
  },
];

export default Products;
