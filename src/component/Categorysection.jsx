import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products") 
      .then((res) => {
        const data = res.data;

        
        const categoryMap = {};
        data.forEach((item) => {
          if (!categoryMap[item.category]) {
            categoryMap[item.category] = item.image;
          }
        });

        const categoryArray = Object.keys(categoryMap).map((key) => ({
          name: key,
          img: categoryMap[key],
        }));

        setCategories(categoryArray);
      })
      .catch((err) => console.error("Error loading db.json:", err));
  }, []);

  return (
    <section className="container py-10 bg-gray my-5" data-aos="fade-down">
    
      <div className="d-flex justify-centr gap-1 px-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
           
            <div>
              <img src={cat.img} alt={cat.name}
                className="w-75 object-contain rounded-circle transition-transform duration-500 ease-in-out hover:scale-90"
              />
            </div>

            <h3 className="mt-3 text-base font-semibold text-gray-800 whitespace-nowrap">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
