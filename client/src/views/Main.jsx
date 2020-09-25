import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate, Link} from '@reach/router';


const Main = props => {
    const [restaurants,setRestaurants] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/restaurants')
            .then(res => setRestaurants(res.data.results))
            .catch(err => console.log(err));
    },[])

    const handlePoof = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/restaurant/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <table className="table table-secondary rounded col-10 mx-auto">
        
            <thead >
                <tr className="">
                    <th>Restaurants</th>
                    <th>Cuisine</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    restaurants.map((r,i) => {
                        return <tr className=""key={i}>
                                    <td>{r.name}</td>
                                    <td>{r.cuisine}</td>
                                    <td>
                                        <Link  to={`/restaurant/${r._id}`} className="btn btn-link m-1 d-inline-block">Read Reviews</Link> |
                                        <Link  to={`/edit/${r._id}`} className="btn btn-link m-1 d-inline-block">Update</Link> |
                                        <button onClick={() => handlePoof(r._id)} className="btn btn-link text-danger">Delete</button>
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default Main;