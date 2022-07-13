import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update(props) {
    const Name=JSON.parse(localStorage.getItem('logged_user')).name
    const ID=JSON.parse(localStorage.getItem('logged_user')).id

    const navigate = useNavigate();

    //let userId = localStorage.getItem('id')

    const [users, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users/search/${Name}`)
            .then(res => {
                setUser(...res.data)
                console.log(users)
            })
            .catch(err => {
                console.log(err)
            })

    }
        , [])
    const [Id, setID] = useState(users.id);
    const [Password, setPassword] = useState(users.password);
    const [Newname, setName] = useState(users.name);
    const [email, setEmail] = useState(users.email);
    const [phone, setPhone] = useState(users.phone);

    useEffect(() => {
        setName(users.name)
        setEmail(users.email);
        setPhone(users.phone);
    }, []);

    const changeName = (e) => {
        setName(
            e.target.value
        )

    }
    const changeEmail = (e) => {
        setEmail(
            e.target.value
        )

    }
    const changePhone = (e) => {
        setPhone(
            e.target.value
        )

    }
    const changePassword = (e) => {
        setPassword(
            e.target.value
        )

    }
    const updateAPIData = (e) => {
        e.preventDefault();
        console.log(Newname)
        axios.put(`http://127.0.0.1:8000/api/user/update/${ID}`, {
            id: Id,
            name: Newname,
            email: email,
            phone: phone,
            password: Password

        })

        window.alert('Your Information Updated Successfully')

        navigate('/profile')
        // Redirect.to="/profile" 
        // window.location.href = '/profile'
    }




    return (

        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            <h3 style={{ marginLeft: '230px' }}>Edit Your Information</h3>

            <form style={{ width: '50%', marginLeft: '230px', marginTop: '50px' }} class='php-email-form'>
                <Form.Field class="form-group">
                    <label >Full Name</label>
                    <input type="text" class="form-control" defaultValue={users.name} name='name' onChange={changeName} />
                </Form.Field>
                <Form.Field class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" defaultValue={users.email} name='email' onChange={changeEmail} />
                </Form.Field>
                <Form.Field class="form-group">
                    <label >Phone</label>
                    <input type="number" class="form-control" defaultValue={users.phone} name='phone' onChange={changePhone} />
                </Form.Field>
                {/* <Form.Field class="form-group">
                    <label >Password</label>
                    <input type="password" class="form-control" defaultValue={users.password} name='password' onChange={changePassword}/>
                </Form.Field> */}

                <button type="submit" class="book-a-table-btn scrollto d-none d-lg-flex" onClick={updateAPIData} style={{ marginTop: '30px' }}>Update</button>
            </form>

        </div>
    )
}
