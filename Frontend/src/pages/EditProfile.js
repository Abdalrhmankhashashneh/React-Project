import React, { useState, useEffect, useRef  } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    const inputName = useRef();
    const inputEmail = useRef();
    const inputPhone = useRef();
    const inputAddress = useRef();




    const [post, setPost] = useState([])
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => {
            console.log(res)
            setPost(res.data)
            console.log(posts)
        })

    const [posts, setUser] = useState({
        title: '',
        body: ''
    });

   
        inputName.current.value = post.tilte;
        inputEmail.current.value = post.body;
        inputAddress.current.value = post.tilte;
        inputPhone.current.value = 2222;
    

    const up = (e, props) => {
        //let history = useNavigate();
        e.preventDefault();
        const d = { tilte: posts.title, body: posts.body }
        axios.put(`http://127.0.0.1:8000/api/user/update/1`, {
            d
        }).then((res) => {
            console.log(res.data)
           // history.push('/profile')
        })
    }

    // useEffect(() => {
    //     const [user,setUser]=useState([]);
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
    //     .then(res => {
    //         console.log(res)
    //         setUser(res.data)
    //         console.log(user)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    //     setID(user.id)
    //     setFirstName(user.name);
    //     setEmail(user.email);
    //     setPhone(user.phone);
    // }, []);

    // const updateAPIData = () => {
    //     axios.put(`https://jsonplaceholder.typicode.com/users/${props.userId}`, {
    //         firstName,
    //         email,
    //         phone
    //     }).then(() => {

    //     })

    const change = (e) => {
        setUser({
            ...posts, [e.target.name]: e.target.value
        })

    }
    return (
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            <h3 style={{ marginLeft: '230px' }}>Edit Your Information</h3>

            <form style={{ width: '50%', marginLeft: '230px', marginTop: '50px' }} class='php-email-form'>
                <Form.Field class="form-group">
                    <label >Full Name</label>
                    <input type="text" class="form-control"  name='title' onChange={change} />
                </Form.Field>
                <Form.Field class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" ref={inputEmail} name='body' onChange={change} />
                </Form.Field>
                <Form.Field class="form-group">
                    <label >Phone</label>
                    <input type="number" class="form-control" ref={inputPhone} name='body' onChange={change} />
                </Form.Field>
                <Form.Field class="form-group">
                    <label >Address</label>
                    <input type="text" class="form-control" ref={inputAddress} name='body' onChange={change} />
                </Form.Field>
                <button type="submit" class="book-a-table-btn scrollto d-none d-lg-flex" onClick={up} style={{ marginTop: '30px' }}>Update</button>
            </form>

            

            {/* <Form className="create-form">
                <Form.Field>
                    <label> Name</label>
                    <input placeholder='First Name'  name='title' onChange={change}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type={'email'} name='body'  onChange={change}/>
                </Form.Field> */}
            {/* <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone' type={'number'} value={phone} onChange={change}/>
                </Form.Field> */}

            {/* <Button type='submit' onClick={up}>Update</Button>
            </Form>  */}
        </div>
    )
}
