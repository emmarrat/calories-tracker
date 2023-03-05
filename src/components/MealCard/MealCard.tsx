import React from 'react';
import {Link} from "react-router-dom";
import {MealType} from "../../types";
import dayjs from "dayjs";

interface Props {
  meal: MealType;
}

const MealCard: React.FC<Props> = ({meal}) => {

  return (
    <div className="card border-0 mb-3 col-10 col-md-9 shadow-lg p-3 bg-body rounded">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-sm-row flex-md-column align-items-center align-items-md-start justify-content-between mb-3">
            <h5 className="card-title mb-0">{meal.time}</h5>
            <p className="card-text mb-0">{meal.descr}</p>
            <p className="card-text mb-0">{dayjs(meal.date).format('MMMM DD, YYYY')}</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="card-text mb-3 m-md-0">{meal.calories} kcal</p>
            <div className="d-flex flex-md-column align-items-center align-items-md-end justify-content-between w-50">
              <Link to={"/edit-meal/" + meal.id} className="btn btn-warning text-light d-block mb-md-1 w-75 me-2 me-md-0">Edit</Link>
              <button className="btn btn-danger d-block w-75">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;