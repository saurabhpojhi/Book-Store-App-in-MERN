import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className='Login'>

                <div className='New Customers'>
                    <h5 className='from-title'> New Customers
                        Create a new account to make future purchases even faster </h5>
                    <form className='register-form' id='register-form'> </form>

                    <div className='form-group'>
                        <input type="text" name='email' id='email' autoComplete='off' placeholder='Your Email Address' />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' id='password' autoComplete='off' placeholder='password' />
                    </div>

                    <div className='form-group-button'>
                        <input type='submit' name='Login' id='Login' className='form-submit' value=" Login " />
                    </div>
                    <div>
                        <Link to='./Home' className='form-group-button'> Create Account   </Link>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Login;