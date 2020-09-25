import React, {useState} from 'react';
import Axios from 'axios';
import RestaurantForm from '../components/RestaurantForm';
import {navigate, Link} from '@reach/router';

const New = props => {
    const initialRestaurant = {
        name:"",
        cuisine:"",
    }
    const initialErrors = {
        name:"",
        cuisine:"",
    }


    const [restaurant,setRestaurant] =useState(initialRestaurant);
    const [errors,setErrors] = useState(initialErrors);

    const handleInputs = e => {
        setRestaurant({
            ...restaurant,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.post("http://localhost:8000/api/create/restaurant",restaurant)
            .then(res => {
                if(res.data.results){
                    setRestaurant(initialRestaurant);
                    navigate("/")
                }
                else{
                    console.log(res.data)
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Register a Restaurant</h2>
            <RestaurantForm 
                inputs={restaurant}
                handleInputs={handleInputs}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Register"
            />
            <Link to = "/" className = "btn btn-warning text-dark btn-outline-light">Cancel</Link>
        </div>
    );
}

export default New;