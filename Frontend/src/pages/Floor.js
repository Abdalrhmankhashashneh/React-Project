import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import Item from "./Items";


export default function Floor() {

    const [Api, setApi] = useState(
        [
            {
                tableid: "01", people: 2, price: 40 ,category:"1"

            },
            {
                tableid: "02", people: 4, price: 50 ,category:"3"

            },
            {

                tableid: "03", people: 5, price: 60 ,category:"2"
            },
            {

                tableid: "04", people: 6, price: 70 ,category:"3"
            },
            {

                tableid: "05", people: 6, price: 70 ,category:"1"
            },
            {

                tableid: "06", people: 6, price: 70 ,category:"2"
            },
            {

                tableid: "07", people: 6, price: 70 ,category:"1"
            },
            {

                tableid: "08", people: 6, price: 70 ,category:"1"
            },
            {

                tableid: "09", people: 4, price: 60 ,category:"2"
            }


        ]);
   
        const [sportList, setSportList] = useState([]);

        const [selectedCategory, setSelectedCategory] = useState();
      
        // Add default value on page load
        useEffect(() => {
          setSportList(Api);
        }, []);
      
        // Function to get filtered list
        function getFilteredList() {
          // Avoid filter when selectedCategory is null
          if (!selectedCategory) {
            return sportList;
          }
          return sportList.filter((item) => item.category === selectedCategory);
        }
      
        // Avoid duplicate function calls with useMemo
        var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);
      
        function handleCategoryChange(event) {
          setSelectedCategory(event.target.value);
        }
   
    return (
        <div>
          <div >
           <div style={{marginTop:'120px'}} ></div>
             <div>
          <select 
            name="category-list"
            id="category-list" style={{marginLeft:'100px',marginTop:'20px',backgroundColor:'#cda45e'}}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="1">VIP</option>
            <option value="3">General</option>
            <option value="2">Family</option>
          </select>
        </div>
      </div>
      <section id="why-us" className="why-us"  >
      <div className="container" data-aos="fade-up">
            <div className="row m-5 p-2" >
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
        </div>
        </div>
      </section>
    </div>
    
      )
}
