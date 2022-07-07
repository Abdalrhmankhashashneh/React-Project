import React from "react";
import { Link } from "react-router-dom";



const Item = ({ name, category, people, price, tableid }) => (
   

                <div className="col-lg-4" style={{marginTop:'40px'}}>
                    <div className="box" data-aos="zoom-in" data-aos-delay="100" style={{ backgroundImage: `url("")` }}>
                        <h4>{tableid}</h4>
                        <p>number of seats : {people}</p>
                        <p>Price : {price}$</p>
                        <Link to="/book" className="book-a-table-btn scrollto d-none d-lg-flex" style={{ marginTop: '30px' }}>Book a table</Link>

                    </div>
                </div>
     
);



export default Item;