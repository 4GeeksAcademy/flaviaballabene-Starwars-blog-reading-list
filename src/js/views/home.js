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

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { type, id } = useParams();

  useEffect(() => {
    // Fetch people data when the component mounts
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);

  return (
    <div>
      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "80rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>People</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "80rem" }}
          >
            {store.people.map((person, index) => (
              <div className="card" style={{ width: "18rem" }} key={person.id}>
                <img
                  src={starWarsLogo}
                  className="card-img-top"
                  alt="Star Wars Logo"
                />
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">Gender: {person.gender}</p>
                  <p className="card-text">Hair Color: {person.hair_color}</p>
                  <p className="card-text">Eye Color: {person.eye_color}</p>
                  <span className="d-flex justify-content-between">
                    <Link to={`/people/${index + 1}`}>
                      <a href="#" className="btn btn-outline-primary">
                        Learn more!
                      </a>
                    </Link>
                    <button type="button" className="btn btn-outline-warning" onClick={() => actions.addToFavorites(person.name)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "80rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>Vehicles</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "80rem" }}
          >
            {store.vehicles.map((vehicle) => (
              <div className="card" style={{ width: "18rem" }}>
                <img src={starWarsLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">Model: {vehicle.model}</p>
                  <p className="card-text">Passengers: {vehicle.passengers}</p>
                  <p className="card-text">
                    Manufacturer: {vehicle.manufacturer}
                  </p>
                  <span className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">
                      Learn more!
                    </a>
                    <button type="button" className="btn btn-outline-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "80rem" }}
        >
          <div className="col-12">
            <h1 style={{ color: "red" }}>Planets</h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "80rem" }}
          >
            {store.planets.map((planet, index) => (
              <div className="card" style={{ width: "18rem" }}>
                <img src={starWarsLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">Population: {planet.population}</p>
                  <p className="card-text">Terrain: {planet.terrain}</p>
                  <span className="d-flex justify-content-between">
                    <Link to={`/planets/${index + 1}`}>
                      <a href="#" className="btn btn-outline-primary">
                        Learn more!
                      </a>
                    </Link>
                    <button type="button" className="btn btn-outline-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
