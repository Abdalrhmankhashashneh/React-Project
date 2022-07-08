import { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";

const Profile = (props) => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          axios.get(`http://127.0.0.1:8000/api/users/${props.userId}`)
          .then(res => {
              console.log(res)
              setUser(res.data)
              console.log(user)
          })
          .catch(err => {
              console.log(err)
          })

      // const fetchData = async () => {
      //     const api = await fetch('https://jsonplaceholder.typicode.com/users');
      //     const allData = await api.json();
      //     setData(allData);
      // }
      // fetchData();
  }, [])

  return (
    <div>
    <div class="container" style={{ marginTop: '150px' }}>
<div class="main-body">

 <nav aria-label="breadcrumb" class="main-breadcrumb">
   <ol class="breadcrumb">
     <li class="breadcrumb-item"><a href="index.html">Home</a></li>
     <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
     <li class="breadcrumb-item active" aria-current="page">User Profile</li>
   </ol>
 </nav>


 <div class="row gutters-sm">
   <div class="col-md-4 mb-3">
     <div class="card" style={{ backgroundColor: 'rgba(12, 11, 9, 0.6)' }}>
       <div class="card-body">
         <div class="d-flex flex-column align-items-center text-center">
           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
           <div class="mt-3">
             <h4>{user.name}</h4>
             <div class="row">
                                       <div class="col-sm-3" style={{ width: '320px', marginLeft: '70px' ,marginTop:'20px'}}>
                                           <button class="book-a-table-btn scrollto d-none d-lg-flex " target="__blank" ><Link to={{ pathname: `/EditProfile/${props.userId}` }} >Edit Your Profile </Link></button>
                                       </div>
                                   </div>
           </div>
         </div>
       </div>
     </div>

   </div>
   <div class="col-md-8" style={{ backgroundColor: 'rgba(12, 11, 9, 0.6)' }}>
     <div class="card mb-3"  style={{ backgroundColor: 'rgba(12, 11, 9, 0.6)',marginTop:'20px' }}>
     <h3>Personal Information</h3>
       <div class="card-body">
         <div class="row">
           <div class="col-sm-3">
              
             <h6 class="mb-0">Full Name</h6>
           </div>
           <div class="col-sm-9 text-secondary">
           {user.name}
           </div>
         </div>
         <hr/>
         <div class="row">
           <div class="col-sm-3">
             <h6 class="mb-0">Email</h6>
           </div>
           <div class="col-sm-9 text-secondary">
           {user.email}
           </div>
         </div>
         <hr/>
         <div class="row">
           <div class="col-sm-3">
             <h6 class="mb-0">Phone</h6>
           </div>
           <div class="col-sm-9 text-secondary">
           {user.phone}
           </div>
         </div>
         {/* <hr/>
         <div class="row">
           <div class="col-sm-3">
             <h6 class="mb-0">Address</h6>
           </div>
           <div class="col-sm-9 text-secondary">
           {posts.title}
           </div>
         </div> */}
         <hr/>
  
         
        
       </div>
     </div>

    



   </div>
 </div>

</div>
</div>
  
               <div class="col-md-12" style={{ marginLeft: '170px', width: '80%', marginTop: '40px' ,marginBottom:'50px'}}>
                   <h3> History</h3>
                   <div className="row">
                       <table class="table table-secondery" style={{ color: ' #6c757d' }}>
                           <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Table</th>
                                   <th scope="col">Date</th>
                                   <th scope="col">Time</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <th scope="row">1</th>
                                   <td>Mark</td>
                                   <td>Otto</td>
                                   <td>@mdo</td>
                               </tr>
                               <tr>
                                   <th scope="row">2</th>
                                   <td>Jacob</td>
                                   <td>Thornton</td>
                                   <td>@fat</td>
                               </tr>
                               <tr>
                                   <th scope="row">3</th>
                                   <td>Larry</td>
                                   <td>the Bird</td>
                                   <td>@twitter</td>
                               </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>

       

)
}
export default Profile;