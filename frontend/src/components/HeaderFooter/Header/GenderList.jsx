import React, { useEffect, useState } from "react";
import CategorList from "./CategoryList";
import axios from "axios";

function GenderList(props) {
    const [categories, setCategories] = useState([
        {
            id: "",
            name: "",
        }
    ]);

    useEffect(() => {
        async function getCategories() {
            const response = await axios.get("/Category/getCategoriesByGender", {params: {id: props.id}});
            const data = response.data.map((category) => ({
                id: category.genderCategoryId,
                name: category.categoryName,
            }));
            setCategories(data);
        }

        getCategories();
    }, []);

  return (
    <li className="grid__item lvl-1 col-md-3 col-lg-3">
      <a id={props.id} className="site-nav lvl-1">
        {props.name}
      </a>
      <ul className="subLinks">
        {categories.map((category) => (
            <CategorList key={category.id} id={category.id} name={category.name} />
        ))}
      </ul>
    </li>
  );
}

export default GenderList;
