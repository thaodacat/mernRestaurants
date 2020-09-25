import React, { useState } from 'react';

const RestaurantForm = props =>{
    const {inputs,handleInputs,handleSubmit,errors,submitValue} = props;

    const [touched, setTouched] = useState({
        name: false,
        cuisine: false,
    })

    const boxTouched = e => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }


    const nameValid = (name) => {
        return name.length <= 3;
    }

    const cuisineValid = (cuisine) => {
        return cuisine.length <= 3;
    }


    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="name">Restaurant Name:</label>
                <input className="form-control" type="text" value={inputs.name} onChange={handleInputs} onSelect={boxTouched} name="name" />
                <span className="text-danger" >{errors.name ? errors.name.message : ""}</span>
                {touched.name && nameValid(inputs.name) && <p>At least 3 characters</p>}
            </div>

            <div className="form-group">
                <label htmlFor="cuisine">Cuisine Type:</label>
                <input className="form-control" type="text" value={inputs.cuisine} onChange={handleInputs} onSelect={boxTouched} name="cuisine" />
                <span className="text-danger" >{errors.cuisine ? errors.cuisine.message : ""}</span>
                {touched.cuisine && cuisineValid(inputs.cuisine) && <p>At least 3 characters</p>}
            </div>

            <input type="submit" value={submitValue} className=" btn btn-info"/>
            
        </form>
    );
}

export default RestaurantForm;