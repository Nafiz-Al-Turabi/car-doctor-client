import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingTableRow from './BookingTableRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/checkouts?email=${user.email}`;

    useEffect(() => {
        fetch(url,{
            // jwt access token
            method:"GET",
            headers:{
                authorization:`bearer ${localStorage.getItem('Access token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
            .catch(error => console.log(error))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure to delete')
        if (proceed) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete successful')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }
    const handleConfirm = id => {
        const proceed = confirm('Are you sure to update')
        if (proceed) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id)
                        const updated = bookings.find(booking => booking._id === id)
                        updated.status='confirm'
                        const newBookings=[updated, ...remaining]
                        setBookings(newBookings)

                        }
                    }
                })
        }
    }
    return (
        <div>
            <h1>Bookings:{bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            bookings.map(booking => <BookingTableRow
                                key={booking._id}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                booking={booking}
                            ></BookingTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;