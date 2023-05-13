import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {
    const service = useLoaderData();
    const { title,price, _id,img } = service;

    const {user}=useContext(AuthContext)

    const handleBookService=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const amount=form.amount.value;
        const booking={
            customerName: name,
            date,
            email,
            img,
            service:title,
            service_id:_id,
            price:price

        }
        console.log(booking);
        // Etake server a pathate hobe {server..}

        fetch('http://localhost:5000/checkouts',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Order Successfull',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <h1>Book Service: {title}</h1>
            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user ?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="Last name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name='amount' defaultValue={'$ '+ price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-warning">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;