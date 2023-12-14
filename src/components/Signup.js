import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();
    const [fname,setfirstName]=useState('')
    const [lname,setlastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                fname,lname,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="container">

            <h1>Register here</h1>

            <form action="POST">
                <input type="fname" onChange={(e) => { setfirstName(e.target.value) }} placeholder="First Name"  />
                <input type="lname" onChange={(e) => { setlastName(e.target.value) }} placeholder="Last Name"  />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button className='btn' onClick={submit}>Register</button>

            </form>

            <br />
            <p>Registered Already? <Link to="/">Login Page</Link></p>

        </div>
    )
}

export default Login