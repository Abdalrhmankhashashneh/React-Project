import { useEffect } from 'react';
export default function Profile() {
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    },[])
    return (
        <div className="container">
            <h1>Profile</h1>
            <p>Hello to profile </p>
        </div>
    );
} //end Profile