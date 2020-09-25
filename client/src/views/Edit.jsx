import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import RestaurantForm from '../components/RestaurantForm';
import {navigate, Link} from '@reach/router';

const Edit = props => {

    const initialErrors = {
        name:"",
        cuisine:"",
    }
    const [edit,setEdit] =useState({
        name:"",
        cuisine:"",
    });

    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/restaurant/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    },[props])

    const handleInputs = e => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.put(`http://localhost:8000/api/update/restaurant/${edit._id}`,edit)
            .then(res => {
                if(res.data.results){
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
            <h2>Edit a Restaurant</h2>
            <RestaurantForm 
                inputs={edit}
                handleInputs={handleInputs}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Edit"
            />
            <Link to = "/" className = "btn btn-warning text-dark btn-outline-light">Cancel</Link>
            
        </div>
    );
}

export default Edit;