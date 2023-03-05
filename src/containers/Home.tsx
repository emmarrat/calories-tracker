import React from 'react';
import AddMealButton from "../components/AddMealButton/AddMealButton";
import {MealType} from "../types";
import MealCard from "../components/MealCard/MealCard";
import Spinner from "../components/Spinner/Spinner";

interface Props {
  meals: MealType[];
  loading: boolean;
}

const Home: React.FC<Props> = ({meals, loading}) => {

  let content = (
    <div className="mt-5 d-flex flex-column align-items-center">
      {meals.map(meal => (
        <MealCard meal={meal} key={meal.id}/>
      ))}
    </div>
  );

  if (meals.length === 0) {
    content = (
      <>
        <h3 className="text-center mt-5">List of meals is empty...</h3>
      </>
    );
  }
  return (
    <>
      {loading ? <Spinner/> : (
        <>
          <div className="d-md-flex justify-content-md-between">
            <div>
              <h3>Total calories for today:</h3>
            </div>
            <AddMealButton/>
          </div>
          {content}
        </>
      )}
    </>
  );
};

export default Home;