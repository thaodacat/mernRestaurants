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
                {
                    restaurants.map((r,i) => {
                        return key={i}
                                    {r.name}
                                    {r.cuisine}
      
                    })
                }
    );
}

export default Main;