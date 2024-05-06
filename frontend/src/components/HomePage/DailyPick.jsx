import React, { useEffect, useState } from "react";
import Item from "./DailyPick/Item";
import axios from "axios";

function CollectionTabSlider() {

   const [products, setProducts] = useState([{
      id: "",
      title: "",
      image: "",
    }]);

   async function getRandomProducts() {
      try {
        const response = await axios.get("/Product/getRandomProducts");
        if (response.status === 200) {
         let updatedProducts = response.data.result.map((item) => ({
            id: item._id,
            title: item.title,
            image: item.image,
         }));

         while (updatedProducts.length < 4) {
            updatedProducts = [...updatedProducts, ...updatedProducts];
         }

         setProducts(updatedProducts.slice(0, 4));
        }
      } catch (error) {
         setProducts([]);
      }
   }

   useEffect(() => {
      getRandomProducts();
   }, []);
        
    return (
        <div className="section featured-column">
        	<div className="container">
            	<div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Random Picks</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                  {products.map((row) => (
                     <Item title={row.title} productId={row.id} image={row.image}/>
                  ))}
                </div>
            </div>
        </div>
    );
}

export default CollectionTabSlider;
