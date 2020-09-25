import React, {useState} from 'react';
import Axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import {navigate, Link} from '@reach/router';

const New = props => {
    const initialReview = {
        rName:"",
        rRating:"",
        rReview:""
    }
    const initialErrors = {
        rName:"",
        rRating:0,
        rReview:""
    }

    const [review,setReview] =useState(initialReview);
    const [errors,setErrors] = useState(initialErrors);

    const handleInputs = e => {
        setReview({
            ...review,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        console.log(review);
        Axios.post(`http://localhost:8000/api/create/review/${props.id}`,review)
            .then(res => {
                if(res.data.results){
                    setReview(initialReview);
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
            <h2>Write a Review for {props.name}</h2>
            <ReviewForm 
                inputs={review}
                handleInputs={handleInputs}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Submit"
            />
            <Link to = "/" className = "btn btn-warning text-dark btn-outline-light">Cancel</Link>
        </div>
    );
}

export default New;