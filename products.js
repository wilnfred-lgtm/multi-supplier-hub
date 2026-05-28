const products = [
    {
        id: 1,
        name: "Classic White Tee",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
        description: "A comfortable and versatile white t-shirt made from 100% organic cotton.",
        keywords: ["clothing", "shirt", "white", "cotton", "casual"],
        category: "Clothing",
        affiliateLink: "https://www.alibaba.com/showroom/white-t-shirt.html?src=saf&pid=7012547645"
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 85.00,
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80&w=800",
        description: "Classic blue denim jacket with a modern fit, perfect for layering.",
        keywords: ["clothing", "jacket", "denim", "blue", "outerwear"],
        category: "Clothing",
        affiliateLink: "https://www.alibaba.com/showroom/denim-jacket.html?src=saf&pid=7012547645"
    },
    {
        id: 3,
        name: "Leather Boots",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1520639889313-7272175b1c39?auto=format&fit=crop&q=80&w=800",
        description: "Durable handcrafted leather boots designed for both style and comfort.",
        keywords: ["shoes", "boots", "leather", "brown", "footwear"],
        category: "Shoes",
        affiliateLink: "https://www.alibaba.com/showroom/leather-boots.html?src=saf&pid=7012547645"
    },
    {
        id: 4,
        name: "Canvas Backpack",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        description: "Spacious canvas backpack with multiple compartments for your daily essentials.",
        keywords: ["bags", "backpack", "canvas", "travel", "essentials"],
        category: "Bags",
        affiliateLink: "https://www.alibaba.com/showroom/canvas-backpack.html?src=saf&pid=7012547645"
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 199.00,
        image: "https://images.unsplash.com/photo-1544117518-30dd5ff7a9b6?auto=format&fit=crop&q=80&w=800",
        description: "Track your fitness, notifications, and more with this sleek smart watch.",
        keywords: ["electronics", "watch", "smartwatch", "tech"],
        category: "Electronics",
        affiliateLink: "https://www.alibaba.com/showroom/smart-watch.html?src=saf&pid=7012547645"
    },
    {
        id: 6,
        name: "Noise Cancelling Headphones",
        price: 299.00,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        description: "Experience premium sound quality and complete silence with active noise cancellation.",
        keywords: ["electronics", "headphones", "audio", "music"],
        category: "Electronics",
        affiliateLink: "https://www.alibaba.com/showroom/noise-cancelling-headphones.html?src=saf&pid=7012547645"
    },
    {
        id: 7,
        name: "Eco-Friendly Yoga Mat",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1592432676556-28203004550a?auto=format&fit=crop&q=80&w=800",
        description: "Non-slip, sustainable yoga mat for your daily practice.",
        keywords: ["sport", "yoga", "fitness", "eco-friendly"],
        category: "Sports",
        affiliateLink: "https://www.alibaba.com/showroom/yoga-mat.html?src=saf&pid=7012547645"
    },
    {
        id: 8,
        name: "Dumbbell Set",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa200c0a?auto=format&fit=crop&q=80&w=800",
        description: "Versatile weight set for home strength training.",
        keywords: ["sport", "weights", "gym", "fitness"],
        category: "Sports",
        affiliateLink: "https://www.alibaba.com/showroom/dumbbell-set.html?src=saf&pid=7012547645"
    },
    {
        id: 9,
        name: "BIG HORN OUTDOORS Portable Emergency Gas Stove",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71SDZxuGQfL.jpg",
        description: "A compact and lightweight single-burner gas stove, perfect for camping, backpacking, and emergency use.",
        keywords: ["camping stove", "portable gas stove", "emergency gear", "outdoor cooking", "backpacking"],
        category: "Sports",
        affiliateLink: "https://amzn.to/43yyxLY"
    },
    {
        id: 10,
        name: "#WEJOY 2-in-1 Reclining Camping Chair with Footrest for Adults Folding Lounge Chair",
        price: 69.99,
        image: "https://m.media-amazon.com/images/I/81wv3isJ6ZL.jpg",
        description: `[4-Position Adjustable Backrest] #WEJOY Reclining Camping Chair is designed to provide a personalized experience. With ergonomic concepts in mind, its backrest can be adjusted to four different positions. Whether you prefer to sit upright for a conversation, recline semi-horizontally for reading, or lie down for a nap, this camping chair caters to all your relaxation needs. It adapts to various postures, ensuring maximum comfort during your camping adventures.

[2-in-1 Reclining Camping Chair] #WEJOY Folding Camping Chair is characterized by its detachable footrest, it is highly adaptable to meet your various requirements. The design of the footrest enables you to lie down completely for rest, providing your feet with great relaxation and comfort. After the footrest is detached, the chair can be utilized as an armchair, making it suitable for diverse scenarios and multiple applications.

[Unmatched Comfort] #WEJOY Camping Lounge Chair brings you an ultimate comfort experience. Our camping chair is equipped with a cushioned pillow and supportive armrests, upgrading your comfort level. The anti-slip foot covers and the triangular bracket design makes it more stable, ensuring your safety. Moreover, with the cup holder and storage bag design, you can free your hands and enjoy outdoor life more easily.

[Durable Material] #WEJOY Heavy-Duty Camping Chair is crafted from high-quality materials. It features high-grade 600D Oxford fabric with a PE coating, delivering exceptional abrasion resistance and water resistance. The seat is filled with 250G shaped chemical fiber cotton, enhancing your comfort experience. The frame, made of Q195 steel pipe with a plastic spray finish, is more stable and durable, providing a solid guarantee for your outdoor life.

[Lightweight and Portable] #WEJOY camping chair is lightweight and highly portable, designed for convenient storage and transportation. It comes with a convenient storage bag. When folded, the size of the camping chair is only 18x21x90cm. It can be effortlessly carried or placed in a car trunk.`,
        keywords: ["camping chair", "reclining chair", "outdoor furniture", "portable chair", "footrest", "WEJOY"],
        category: "Sports",
        affiliateLink: "https://amzn.to/4dz4gTb",
        specs: {
            "Brand": "#WEJOY",
            "Color": "Black Grey",
            "Material": "Metal",
            "Dimensions": "24.8\"D x 25.2\"W x 30.3\"H"
        }
    },
    {
        id: 11,
        name: "The Chi - Season 8",
        price: 0.00,
        image: "https://m.media-amazon.com/images/S/pv-target-images/c1ad11ce19efe1bb2e5ae0050a450b542e207bfdacfbff1023118835cf987e04._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,847,263,156_kvf21cb47db8d34aa971cd86f57a65cf8d_SX624_FMjpg_.jpg",
        description: "A group of residents on Chicago's South Side become linked by coincidence but bonded by the need for connection and redemption.",
        keywords: ["the chi", "prime video", "tv series", "drama", "chicago"],
        category: "Entertainment",
        affiliateLink: "https://amzn.to/4aastNm"
    },
    {
        id: 12,
        name: "IronClad Supply Rocket Stove – Camping Wood Stove for Emergency Preparedness, Survival, Off Grid Living Supplies",
        price: 137.99,
        image: "https://cdn.bigeasymart.com/wp-content/uploads/2024/02/716dv9gKoL.jpg",
        description: `THE ULTIMATE CAMPING WOOD STOVE – Extremely durable, long-lasting and energy efficient. This portable wood burning stove uses solid, dry biomass like wood, branches, pinecones, twigs, and charcoal as fuel.

PERFECT FOR OFF-GRID LIVING AND EMERGENCY PREPAREDNESS – No need for gas, propane, or electricity. Cook a full meal and boil water anywhere, anytime with just a handful of sticks.

SUPER EFFICIENT ROCKET STOVE DESIGN – Fully insulated vertical combustion chamber forces gases to mix with flames, leading to decreased smoke and tremendous fuel efficiency (up to 23,000 BTU).

BULLET PROOF DURABILITY – Built with strongest materials; large six-pronged cast iron stove top accommodates pots, pans, woks, and dutch ovens. Features a powder-coated body and heat-resistant handles.

INCLUDES CANVAS STORAGE BAG AND FUEL SUPPORT SYSTEM – Includes a weather-resistant canvas storage bag (doubles as a fuel carrier) and a fuel support system for longer firewood.`,
        keywords: ["rocket stove", "camping stove", "wood burning stove", "emergency preparedness", "outdoor cooking", "survival gear"],
        category: "Sports",
        affiliateLink: "https://www.amazon.com/IronClad-Supply-Rocket-Stove-Emergency/dp/B08L7L3Z6Y",
        specs: {
            "Brand": "Ironclad Supply",
            "Fuel Type": "Wood, branches, pinecones, twigs, charcoal (Solid Biomass)",
            "Material": "Cast Iron (Top), Powder-coated Steel (Body)",
            "Product Dimensions": "9″L x 9″W x 12″H",
            "Power Source": "Biomass / Wood burning",
            "Maximum Energy Output": "23,000 BTU",
            "Features": "Fully insulated combustion chamber, Heat-resistant handles, Large six-pronged stove top",
            "Included Components": "Rocket Stove, Canvas Storage Bag, Fuel Support System"
        }
    },
    {
        id: 13,
        name: "ASUS Vivobook 16 Laptop",
        price: 499.00,
        image: "https://press.asus.com/assets/w_894,h_894/b7b3faf5-754c-4c10-8dad-45eb435924e0/Vivobook%2016_X1605VAP_Product%20Photo_ErgoSense%20Keyboard.png",
        description: "Experience power and portability with the ASUS Vivobook 16. Featuring a stunning 16-inch display, powerful processor, and sleek design, it's perfect for students and professionals on a budget.",
        keywords: ["asus", "vivobook", "laptop", "budget laptop", "16 inch", "ultrabook"],
        category: "Electronics",
        affiliateLink: "https://www.amazon.com/s?k=ASUS+Vivobook+16&tag=willy0718-20",
        videoUrl: "https://www.youtube.com/embed/OoGns4yGk2E",
        specs: {
            "Brand": "ASUS",
            "Model": "Vivobook 16 M1605",
            "Screen": "16\" WUXGA (1920 x 1200) 16:10",
            "CPU": "AMD Ryzen 5 or Intel Core i5",
            "RAM": "8GB/16GB DDR4",
            "Storage": "512GB NVMe SSD"
        }
    },
    {
        id: 14,
        name: "ASUS Vivobook 15 Slim Laptop",
        price: 349.00,
        image: "https://press.asus.com/assets/w_894,h_894/e081698d-4a9a-4dd1-bcb1-de01fda73989/Vivobook%2015_X1504VAP_Product%20photo_Versatile%20color%20choices.png",
        description: "The ASUS Vivobook 15 is a compact and lightweight laptop designed for everyday productivity. With its thin bezels and reliable performance, it's an excellent value for work or study.",
        keywords: ["asus", "vivobook", "15 inch", "slim laptop", "budget laptop"],
        category: "Electronics",
        affiliateLink: "https://www.amazon.com/s?k=ASUS+Vivobook+15&tag=willy0718-20",
        videoUrl: "https://www.youtube.com/embed/ZxiCfhJw-_4",
        specs: {
            "Brand": "ASUS",
            "Model": "Vivobook 15 F1504",
            "Screen": "15.6\" FHD (1920 x 1080)",
            "CPU": "Intel Core i3-1215U",
            "RAM": "8GB DDR4",
            "Storage": "128GB/256GB SSD"
        }
    },
    {
        id: 15,
        name: "Lenovo IdeaPad 3 Laptop",
        price: 379.00,
        image: "https://p2-ofp.static.pub/fes/cms/2022/03/18/sqjougfgcn2clikxdrr7zp63at7cky187092.png?width=584&height=584",
        description: "The Lenovo IdeaPad 3 is built for long-lasting performance. It delivers a powerful experience in an entry-level laptop, making it perfect for your everyday tasks with features that you can depend on.",
        keywords: ["lenovo", "ideapad", "ideapad 3", "laptop", "budget laptop", "15 inch"],
        category: "Electronics",
        affiliateLink: "https://www.amazon.com/s?k=Lenovo+IdeaPad+3&tag=willy0718-20",
        videoUrl: "https://www.youtube.com/embed/doIUfmjO344",
        specs: {
            "Brand": "Lenovo",
            "Model": "IdeaPad 3",
            "Screen": "15.6\" FHD Touchscreen",
            "CPU": "AMD Ryzen 3 5300U",
            "RAM": "8GB DDR4",
            "Storage": "256GB NVMe SSD"
        }
    },
    {
        id: 16,
        name: "European Warehouse Fat Tire Off-Road ATV Scooter (2000W 60V)",
        price: 510.00,
        image: "https://s.alicdn.com/@sc04/kf/H62a48c3b7e144188915c52409a73ad96h.jpg",
        description: `Experience the ultimate off-road adventure with this European Warehouse Fat Tire ATV Scooter. This powerful electric motorcycle is designed for durability and performance across all terrains.

- POWERFUL PERFORMANCE: Equipped with a high-torque brushless motor options up to 2000W/3000W.
- OFF-ROAD READY: Heavy-duty fat tires and front/rear double shock suspension provide superior stability.
- LONG RANGE: Removable 60V 20AH lithium battery supports long-distance travel and easy charging.
- STREET LEGAL: Fully certified with CE, EEC, and COC for safety and road compliance.
- FAST DELIVERY: Stocked in European and USA warehouses for rapid local shipping.`,
        keywords: ["electric motorcycle", "citycoco", "fat tire scooter", "off road atv", "electric scooter"],
        category: "Electronics",
        affiliateLink: "https://www.alibaba.com/product-detail/European-Warehouse-Fat-Tire-Two-Big_1601243118941.html?src=saf&pid=7012547645",
        specs: {
            "Motor Power": "2000W (Brushless)",
            "Battery": "60V 20Ah Lithium (Removable)",
            "Max Speed": "45-70 km/h",
            "Range": "60-100 km",
            "Max Load": "200 kg",
            "Brakes": "Hydraulic Disc Brakes",
            "Tires": "12-inch Fat Off-Road Tires",
            "Certifications": "CE, EEC, COC"
        }
    },
    {
        id: 17,
        name: "PawView Custom AirTag Pet Collar",
        price: 4.50,
        image: "https://sc04.alicdn.com/kf/S1b0e9a184e72467d983c2763f090776bO.jpg",
        description: "Never lose track of your furry friend. This high-quality adjustable pet collar is specifically designed to hold an Apple AirTag securely, providing peace of mind and safety for your pets.",
        keywords: ["pet collar", "airtag", "dog collar", "cat collar", "pet accessories"],
        category: "Pets",
        affiliateLink: "https://www.alibaba.com/product-detail/PawView-Custom-Wholesale-air-Tag-Collar_1601128536439.html?src=saf&pid=7012547645",
        specs: {
            "Material": "Nylon / PU Leather",
            "Feature": "Reflective, Adjustable, AirTag Holder",
            "Sizes": "Small, Medium, Large",
            "Colors": "Various Custom Colors"
        }
    }
];

export default products;
