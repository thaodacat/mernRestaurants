import React, { useState } from 'react';

const ReviewForm = props =>{
    const {inputs,handleInputs,handleSubmit,errors,submitValue} = props;

    const [touched, setTouched] = useState({
        rName: false,
        rRating: false,
        rReview: false
    })

    const boxTouched = e => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }

    const rNameValid = (rName) => {
        return rName.length <= 3;
    }

    const rRatingValid = (rRating) => {
        return rRating.length <= 0 || rRating.length >= 5;
    }

    const rReviewValid = (rReview) => {
        return rReview.length <= 3;
    }

    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="rName">Your Name:</label>
                <input className="form-control" type="text" value={inputs.rName} onChange={handleInputs} onSelect={boxTouched} name="rName" />
                <span className="text-danger" >{errors.rName ? errors.rName.message : ""}</span>
                {touched.rName && rNameValid(inputs.rName) && <p>At least 3 characters</p>}
            </div>

            <div className="form-group">
                <label htmlFor="rRating">Stars:</label>
                <input className="form-control" type="number" value={inputs.rRating} onChange={handleInputs} onSelect={boxTouched} name="rRating" />
                <span className="text-danger" >{errors.rRating ? errors.rRating.message : ""}</span>
                {touched.rRating && rRatingValid(inputs.rRating) && <p>1-5 only</p>}
            </div>

            <div className="form-group">
                <label htmlFor="rReview">Your Review:</label>
                <input className="form-control" type="text" value={inputs.rReview} onChange={handleInputs} onSelect={boxTouched} name="rReview" />
                <span className="text-danger" >{errors.rReview ? errors.rReview.message : ""}</span>
                {touched.rReview && rReviewValid(inputs.rReview) && <p>At least 3 characters</p>}
            </div>

            <input type="submit" value={submitValue} className=" btn btn-info"/>
            
        </form>
    );
}

export default ReviewForm;