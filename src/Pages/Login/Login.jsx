import React, { useContext } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                const signInUser = res.user;
                console.log(signInUser);
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <h1 className="text-3xl text-center font-bold mt-16">Login now!</h1>
                    <form onSubmit={signInHandler} className="card-body">
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
                        <p className='mt-1'>New to car Doctors? <Link to='/signup' className='text-warning'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;