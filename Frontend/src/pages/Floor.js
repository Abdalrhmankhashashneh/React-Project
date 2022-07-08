

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

    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">

        <div className="section-title">

        </div>

        <div className="row">


          {category.map((floor) => (

            <div className="col-lg-4" style={{ marginTop: '30px' }}>
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <h4>Table number : {floor.name}</h4>
                <p>Number of seats : {floor.people_count}</p>
                <p>Price : {floor.price} $</p>
                <Link to={`/book/${id}/${floor.id}`} className="btn btn mt-auto align-self-start" style={{ backgroundColor: '#cda45e', marginTop: '30px' }}>Book Now</Link>
              </div>
            </div>



          ))}
        </div>
      </div>
    </section>

  )



}

export default Floor;