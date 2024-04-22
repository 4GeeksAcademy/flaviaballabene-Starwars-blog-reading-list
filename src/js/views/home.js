// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );

import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import starWarsLogo from "../../img/Star-Wars-Logo-1.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { type, id } = useParams();

  useEffect(() => {
    // Fetch people data when the component mounts
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);
console.log(store.people)
  return (
    <div>
      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "140rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>People</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "140rem" }}
          >
            {store.people.map((person, index) => (
              <Card item= {person} category="people"/>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "140rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>Vehicles</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "140rem" }}
          >
            {store.vehicles.map((vehicle, index) => (
             <Card item= {vehicle} category="vehicles"/>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "140rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>Planets</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "140rem" }}
          >
            {store.planets.map((planet, index) => (
              <Card item= {planet} category="planets"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
