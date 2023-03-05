import React from 'react';
import {Link} from "react-router-dom";

const AddMealButton = () => {
  return (
    <div>
      <Link to="/add-new-meal" className="btn btn-success my-2">Add new meal</Link>
    </div>
  );
};

export default AddMealButton;