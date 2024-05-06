// data.js
const capsData = [
    {
      id: 1,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20210202/0TAl/60198a85f997dd5c40e54d7c/-1117Wx1400H-460571497-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20210202/00HM/60197cf5f997dd5c40e51d1f/-1117Wx1400H-460571497-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20210202/eZYz/60196f54f997dd5c40e4ea98/-1117Wx1400H-460571497-black-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20210202/CsPc/60197049f997dd5c40e4ee57/-1117Wx1400H-460571497-black-MODEL5.jpg"
        // Add more image URLs as needed
      ],
      brand: "PUMA",
      productName: "Men Panelled Baseball Cap",
      rentalPrice: 5.5,
      description: "Description of the PUMA Men Panelled Baseball Cap. It includes an embroidered logo and comes in red and black colors. Perfect for outdoor activities.",
      sizes: ["S", "M", "L", "XL"] // Assuming you want to include available sizes
    },
    {
      id: 2,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20220214/ba6c/620a70e2f997dd03e2cda44e/-473Wx593H-460742879-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220728/atys/62e2a30bf997dd03e2030a58/-473Wx593H-460742879-black-MODEL7.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220728/atys/62e2a30bf997dd03e2030a58/-473Wx593H-460742879-black-MODEL7.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220728/atys/62e2a30bf997dd03e2030a58/-473Wx593H-460742879-black-MODEL7.jpg",
        
      ],
      brand: "PUMA",
      productName: "BMW M Motorsport Baseball Cap",
      rentalPrice: 6.0,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },
    {
      id: 3,
      images: [
        
        "https://assets.ajio.com/medias/sys_master/root/20230525/hYwf/646f81d5d55b7d0c63fbad9c/-1117Wx1400H-442138845-denimblue-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230525/twQb/646f8a4542f9e729d7d170e9/-473Wx593H-442138845-denimblue-MODEL4.jpg",
    
      ],
      brand: "MATCHITT",
      productName: "Women Denim Cap with Tie-Up",
      rentalPrice: 6.5,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },
    {
      id: 4,
      images: [
        
        "https://assets.ajio.com/medias/sys_master/root/20230321/oCok/6419d1d8aeb26924e3e94c29/-1117Wx1400H-469430229-white-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230321/jVfw/6419cf05f997dde6f424045d/-1117Wx1400H-469430229-white-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230321/zKnf/6419c579f997dde6f423a851/-473Wx593H-469430229-white-MODEL6.jpg",
      ],
      brand: "JACK & JONES",
      productName: "Brand Print Baseball Cap",
      rentalPrice: 4.0,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L","XL"] // Example sizes
    },
    {
      id: 5,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20230321/6Jvb/6419c64caeb26924e3e9071c/-473Wx593H-469430213-beige-MODEL5.jpg",

      ],
      brand: "JACK & JONES",
      productName: "Men Black Baseball Cap",
      rentalPrice: 4.0,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },
    {
      id: 6,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20220621/b1Dc/62b1db22f997dd03e293142b/-1117Wx1400H-441236043-blue-MODEL.jpg",
      ],
      brand: "DISNEY",
      productName: "Men Black Baseball Cap",
      rentalPrice: 4.2,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },
    {
      id: 7,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20230307/6MRP/64074f2aaeb26924e3ad28ad/-1117Wx1400H-410368971-00020-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230307/eLmL/64075a5ff997dde6f4e6a51e/-473Wx593H-410368971-00020-MODEL3.jpg"
      ],
      brand: "ARMANI EXCHANGE",
      productName: "Embellished Baseball Cap",
      rentalPrice: 7.0,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },
    {
      id: 8,
      images: [
        "https://assets.ajio.com/medias/sys_master/root/20240124/QiOK/65b0f7a88cdf1e0df5cbe900/-1117Wx1400H-442125062-white-MODEL.jpg"
      ],
      brand: "PERFORMAX",
      productName: "Men Fast Dry & Antistatic Folded Cap",
      rentalPrice: 2.0,
      description: "This is a sleek black baseball cap perfect for the modern man. Durable, stylish, and comfortable, it's ideal for both sports and casual wear.",
      sizes: ["S", "M", "L"] // Example sizes
    },

  ];
  
  export default capsData;
  