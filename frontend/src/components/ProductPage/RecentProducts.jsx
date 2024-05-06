import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./RecentProducts/Product";
import Slider from "react-slick";

function RecentProducts(props) {
  const { id } = useParams();

  const [products, setProducts] = useState([{
    id: "",
    title: "",
    image: "",
  }]);

  useEffect(() => {
    async function getRecentProducts() {
      try {
        const response = await axios.get("/Product/getRecentProducts", {
          params: { productId: id },
        });
        if (response.status === 200) {
          let updatedProducts = response.data.result.map((item) => ({
            id: item._id,
            title: item.title,
            image: item.image,
          }));

          while (updatedProducts.length < 7) {
            updatedProducts = [...updatedProducts, ...updatedProducts];
          }

          setProducts(updatedProducts.slice(0, 7));
        }
      } catch (error) {}
    }
    
    getRecentProducts();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  if (window.innerWidth <= 768) {
    settings.slidesToShow = 3;
  }

  return (
    <div className="related-product grid-products">
      <header className="section-header">
        <h2 className="section-header__title text-center h2">
          <span>Products You May Like</span>
        </h2>
      </header>
      <div className="productPageSlider">
        <Slider {...settings}>
          {products.map((row) => (
            <Product productId={row.id} title={row.title} image={row.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RecentProducts;
