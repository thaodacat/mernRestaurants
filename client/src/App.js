import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import Show from './views/Show';
import NewReview from './views/NewReview';

function App() {
  return (
    <div className="card d-flex col-8  mx-auto">
      <div className = "d-inline  col-12 mx-auto">
        <Link to = "/" className = "btn btn-dark text-light btn-outline-dark">Home</Link>
        <Link to = "/new" className = "btn btn-dark text-light btn-outline-dark">Add Restaurant</Link>
      </div>
      <div className="card-header d-inline col-10 mx-auto rounded bg-secondary text-center text-light">
        <h1>Let's Eat</h1>
      </div>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/restaurant/:id" />
        <Edit path="/edit/:id" />
        <NewReview path="/new/review/:id" />
      </Router>
    </div>
  );
}

export default App;
