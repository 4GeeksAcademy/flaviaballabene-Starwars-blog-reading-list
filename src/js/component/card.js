import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({item, category}) => {
    const {store, actions}= useContext(Context);
    const [info, setInfo] = useState();
    useEffect (()=>{
        let getInfo = async () => {
            let result = await actions.fetchDetails (item.uid, category)
            setInfo (result)
        }
        getInfo()
    }, [])
    return (
        <div className="card" style={{ width: "18rem" }} key={item.uid}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/${category=="people"?"characters":category=="planets"?"planets":"vehicles"}/${item.uid}.jpg`}
                  className="card-img-top"
                  alt="Star Wars Person"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{category=="people"? `Gender: ${info?.properties.gender}`:category=="planets"? `Population: ${info?.properties.population}`: `Model: ${info?.properties.model}`}</p>
                  <p className="card-text">{category=="people"? `Hair Color: ${info?.properties.hair_color}`:category=="planets"? `Terrain: ${info?.properties.terrain}`: `Passengers: ${info?.properties.passengers}`}</p>
                  <p className="card-text">{category=="people"? `Eye Color: ${info?.properties.eye_color}`: category=="vehicles"?`Manufacturer: ${info?.properties.manufacturer}`: null}</p>
                  <span className="d-flex justify-content-between">
                    <Link to={`/people/${item.uid}/${item.name}`}>
                      <a href="#" className="btn btn-outline-primary">
                        Learn more!
                      </a>
                    </Link>
                    <button type="button" className="btn btn-outline-warning" onClick={() => actions.addToFavorites(item.name)}>
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
    )
}