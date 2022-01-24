import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState({
        email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value });
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { email, password, cpassword } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": " application/json"
            },
            body: JSON.stringify({
                email, password, cpassword
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Signup")
            console.log("Invalid Signup")
        } else {
            window.alert(" Signup Successful")
            console.log(" Signup Successful")

            navigate.push('/signin')


        }
    }


    return (
        <>
            <section className='Signup'>

                <div className='New Customers'>
                    <h3 className='from-title'>New Customers </h3>
                    <form method="POST" className='register-form' id='register-form'> </form>

                    <div className='form-group'>
                        <input type="text" name='email' id='email' autoComplete='off'
                            value={user.email}
                            onChange={handleInputs}
                            placeholder='Your Email Address'

                        />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' id='password' autoComplete='off'

                            value={user.password}
                            onChange={handleInputs}
                            placeholder='Password'
                        />

                    </div>
                    <div className='form-group'>
                        <input type="cpassword" name='cpassword' id='cpassword' autoComplete='off'

                            value={user.cpassword}
                            onChange={handleInputs}
                            placeholder='Confirm Password'
                        />

                    </div>

                    <div className='form-group-button'>
                        <input type='submit' name='Signup' id='Signup' className='form-submit' value=" Signup " />
                    </div>
                    <div>
                        <Link to='./Login' className='form-group-button'> Create Account   </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;