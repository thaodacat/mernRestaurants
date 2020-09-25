import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';


const Show = props => {

    const [restaurant,setRestaurant] = useState({
        name:"",
        cuisine:"",
        reviews:[]
    });


    
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/restaurant/${props.id}`)
            .then(res => setRestaurant(res.data.results))
            .catch(err => console.log(err));
    },[props])


    return (
        <div className="card-body col-8 mx-auto rounded text-center jumbotron">
            <h4>Reviews for: {restaurant.title}</h4>

            <table className="table table-secondary rounded col-8 mx-auto">

            <thead >
                <tr className="">
                    <th>Customer</th>
                    <th>Star</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr className="">
                    <td>{restaurant.rName}</td>
                    <td>{restaurant.rRating}</td>
                    <td>{restaurant.rReview}</td>
                </tr>
                {
                    restaurant.reviews.sort(restaurant.rRating).map((r,i) => {
                        return ( 
                            <tr className=""key={r._id}>
                                <td>{r.rName}</td>
                                <td>{r.rRating}</td>
                                <td>{r.rReview}</td>
                            </tr>
                        );
                    })
                }
            </tbody>

            </table>
            <Link to = "/" className = "btn btn-warning text-dark btn-outline-light">Cancel</Link>
            <Link to = {`/new/review/${props.id}`} className = "btn btn-success text-light btn-outline-dark">New Review</Link>
        </div>
    );

}

export default Show;