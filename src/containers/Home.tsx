import React from 'react';
import AddMealButton from "../components/AddMealButton/AddMealButton";

const Home = () => {
  return (
    <div className="d-md-flex justify-content-md-between">
      <div>
        <h3>Total calories for today: </h3>
      </div>
      <AddMealButton/>
    </div>
  );
};

export default Home;