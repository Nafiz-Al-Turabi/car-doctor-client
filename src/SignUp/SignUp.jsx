import React, { useContext } from 'react';
import logImg from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(AuthContext);


    const signUpHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(res => {
                const SingUpUser = res.user;
                console.log(SingUpUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <h1 className="text-3xl text-center font-bold mt-16">Sign Up!</h1>
                    <form onSubmit={signUpHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                    <div className='text-center mb-16 '>
                        <p className='mt-1'>Already account? <Link to='/login' className='text-warning'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;