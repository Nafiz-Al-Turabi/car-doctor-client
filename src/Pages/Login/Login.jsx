import React from 'react';
import logImg from '../../assets/images/login/login.svg'    
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                   <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <h1 className="text-3xl text-center font-bold mt-16">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-3'>Or Sign up with</p>
                    <div className='text-center mb-16 '>
                        <Link className='btn btn-warning text-white'>Facebook</Link>
                        <Link className='btn btn-warning mx-2 text-white'>LinkedIn</Link>
                        <Link className='btn btn-warning text-white'>Google</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;