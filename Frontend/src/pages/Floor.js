// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Item from "./Items";






//         const [data, setData] = useState([]);
//         const { id } = useParams();
//         const [category, setCategory] = useState([]);
//         useEffect(() => {
//           const fetching = async () => {
//             const api = await fetch(`http://127.0.0.1:8000/api/floor_type/${id}`);
//             const dataa = await api.json();
//             dataa.results.filter((data) => {
//               if (data.id == id) {
//                 return setCategory(data)
//               }
//             })
//           }
//           fetching();
//         }, [])



//         const [List, setList] = useState([]);

//         const [selectedCategory, setSelectedCategory] = useState();

//         // Add default value on page load
//         useEffect(() => {
//           setList(api);
//         }, []);

//         // Function to get filtered list
//         function getFilteredList() {
//           // Avoid filter when selectedCategory is null
//           if (!selectedCategory) {
//             return List;
//           }
//           return List.filter((item) => item.category === selectedCategory);
//         }

//         // Avoid duplicate function calls with useMemo
//         var filteredList = useMemo(getFilteredList, [selectedCategory, List]);

//         function handleCategoryChange(event) {
//           setSelectedCategory(event.target.value);
//         }

//     return (
//         <div>
//           <div>
//            <div style={{marginTop:'120px'}} ></div>
//              <div>
//           <select 
//             name="category-list"
//             id="category-list" style={{marginLeft:'100px',marginTop:'20px',backgroundColor:'#cda45e'}}
//             onChange={handleCategoryChange}
//           >
//             <option value="">All</option>
//             <option value="3">VIP</option>
//             <option value="1">General</option>
//             <option value="2">Family</option>
//           </select>
//         </div>
//       </div>
//       <section id="why-us" className="why-us"  >
//       <div className="container" data-aos="fade-up">
//             <div className="row m-5 p-2" >
//         {filteredList.map((element, index) => (
//           <Item {...element} key={index} />
//         ))}
//         </div>
//         </div>
//       </section>
//     </div>

//       )
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Floor() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  const { id } = useParams();
  const [floor, setFloor] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const api = await fetch(`http://127.0.0.1:8000/api/floor_type/${id}`);
      const dataa = await api.json();
      setCategory(dataa);

    }
    fetching();
  }, [])
  console.log(floor)

  return (

    // <div className="col-lg-4 " >
    // { category.map((floor) => (


    //   <div className="card-body">
    //     {/* <img src={'https://image.tmdb.org/t/p/w500/' + floor.backdrop_path} className="card-img-top" alt="Card Image" /> */}
    //     <h5 className="card-title">{floor.name}</h5>
    //     <p className="card-text">{floor.id}</p>
    //     {/* <p className="card-text">{floor.vote_average}</p> */}
    //   </div>

    // )) }
    //   </div>
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">

        <div className="section-title">

        </div>

        <div className="row">


          {category.map((floor) => (

            <div className="col-lg-4" style ={{marginTop:'30px'}}>
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <h4>Table number : {floor.name}</h4>
                <p>Number of seats : {floor.people_count}</p>
                <p>Price : {floor.price} $</p>
                <Link to={'/floor/'} className="btn btn mt-auto align-self-start" style={{backgroundColor:'#cda45e',marginTop:'30px'}}>Book Now</Link>
              </div>
            </div>



          ))}
        </div>
      </div>
    </section>

  )



}

export default Floor;