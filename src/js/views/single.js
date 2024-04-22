// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Single = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div classNameName="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// Single.propTypes = {
// 	match: PropTypes.object
// };

import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import image from "../../img/1.jpeg";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { type, id, element} = useParams();
  const [data, setData] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    findSingleElement(element);
    }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}`);
        const result = await response.json();
        setData(result.result.properties);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  const findSingleElement = (name) => {
    const element = store[type].find((element) => element["name"] == name);
    setUrl(element.url);
}

const renderData = (data, elementType) => {
  switch (elementType) {
    case "people":
      return (
        <div
          className="card mb-3 flex-column d-flex justify-content-center align-items-center"
          style={{ width: "80rem", minWidth: "200vh" }}
        >
          <div className=" mb-3 row" style={{ width: "60rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="card-img-top mt-3"
                  alt="Star Wars Person"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-1 ms-5">{data.name}</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card row mb-3 mt-2 container text-center border-top"
            style={{ minWidth: "130vh" }}
          >
            <div className="row mt-3">
              <div className="col text-start">
                <strong>Birth:</strong> {data.birth_year}
              </div>
              <div className="col text-start">
                <strong>Height:</strong> {data.height}
              </div>
              <div className="col text-start">
                <strong>Mass:</strong> {data.mass}
              </div>
              <div className="col text-start">
                <strong>Hair Color:</strong> {data.hair_color}
              </div>
              <div className="col text-start">
                <strong>Skin Color:</strong> {data.skin_color}
              </div>
              <div className="col text-start">
                <strong>Homeworld:</strong>{" "}
                <a href={data.homeworld}>{data.homeworld}</a>
              </div>
              <div className="col text-start">
                <strong>Films:</strong>
              </div>
              <div className="col text-start">
                <strong>Startship:</strong>
              </div>
              <div className="col text-start">
                <strong>Vehicles:</strong>
                <ul>
                  {data.vehicles && data.vehicles.length > 0 ? (
                    data.vehicles.map((vehicle, index) => (
                      <li key={index}>
                        <a href={vehicle}>{vehicle}</a>
                      </li>
                    ))
                  ) : (
                    <li>No vehicles available</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

if (!data) <div>No Data Available</div>;
return (
  <React.Fragment>
    {Object.keys(data).length > 0 ? renderData(data, type) : null}
  </React.Fragment>
);
};


//   let details = null;
//   if (data) {
//     switch (type) {
//       case "people":
//         details = (
//           <div
//             className="card mb-3 flex-column d-flex justify-content-center align-items-center"
//             style={{ width: "80rem", minWidth: "200vh" }}
//           >
//             <div className=" mb-3 row" style={{ width: "60rem" }}>
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src={image} className="card-img-top mt-3" alt="Star Wars Person" />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title fs-1 ms-5">{data.name}</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="card row mb-3 mt-2 container text-center border-top"
//               style={{ minWidth: "130vh" }}
//             >
//               <div className="row mt-3">
//                 <div className="col text-start">
//                   <strong>Birth:</strong> {data.birth_year}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Height:</strong> {data.height}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Mass:</strong> {data.mass}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Hair Color:</strong> {data.hair_color}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Skin Color:</strong> {data.skin_color}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Homeworld:</strong>{" "}
//                   <a href={data.homeworld}>{data.homeworld}</a>
//                 </div>
//                 <div className="col text-start">
//                   <strong>Films:</strong>
//                   <ul>
//                     {data.films.map((film, index) => (
//                       <li key={index}>
//                         <a href={film}>{film}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="col text-start">
//                   <strong>Startship:</strong>
//                   <ul>
//                     {data.startships && data.startships.length > 0 ? (
//                       data.startships.map((startship, index) => (
//                         <li key={index}>
//                           <a href={startship}>{startship}</a>
//                         </li>
//                       ))
//                     ) : (
//                       <li>No startships available</li>
//                     )}
//                   </ul>
//                 </div>
//                 <div className="col text-start">
//                   <strong>Vehicles:</strong>
//                   <ul>
//                     {data.vehicles && data.vehicles.length > 0 ? (
//                       data.vehicles.map((vehicle, index) => (
//                         <li key={index}>
//                           <a href={vehicle}>{vehicle}</a>
//                         </li>
//                       ))
//                     ) : (
//                       <li>No vehicles available</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//         break;

//       case "planets":
//         details = (
//           <div
//             className="card mb-3 flex-column d-flex justify-content-center align-items-center"
//             style={{ width: "80rem", minWidth: "190vh" }}
//           >
//             <div className=" mb-3 row" style={{ width: "60rem" }}>
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src={image} className="card-img-top mt-3" alt="Star Wars Planet" />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title fs-1 ms-5">{data.name}</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="card row mb-3 mt-2 container text-center border-top"
//               style={{ minWidth: "130vh" }} //width
//             >
//               <div className="row mt-3">
//                 <div className="col text-start">
//                   <strong>Rotation Period:</strong> {data.rotation_period}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Orbital Period:</strong> {data.orbital_period}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Diameter:</strong> {data.diameter}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Climate:</strong> {data.climate}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Gravity:</strong> {data.gravity}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Terrain:</strong> {data.terrain}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Surface Water:</strong> {data.surface_water}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Population:</strong> {data.population}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Residents:</strong>
//                   <ul>
//                     {data.residents.map((residents, index) => (
//                       <li key={index}>
//                         <a href={residents}>{residents}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="col text-start">
//                   <strong>Films:</strong>
//                   <ul>
//                     {data.films.map((film, index) => (
//                       <li key={index}>
//                         <a href={film}>{film}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//         break;

//       case "vehicles":
//         details = (
//           <div
//             className="card mb-3 flex-column d-flex justify-content-center align-items-center"
//             style={{ width: "80rem", minWidth: "200vh" }}
//           >
//             <div className=" mb-3 row" style={{ width: "60rem" }}>
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src={image} className="card-img-top mt-3" alt="Star Wars Vehicle" />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title fs-1 ms-5">{data.name}</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="card row mb-3 mt-2 container text-center border-top"
//               style={{ minWidth: "130vh" }}
//             >
//               <div className="row mt-3">
//                 <div className="col text-start">
//                   <strong>Cargo Capacity:</strong> {data.cargo_capacity}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Consumables:</strong> {data.consumables}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Crew</strong>: {data.crew}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Length:</strong> {data.length}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Manufacturer:</strong> {data.manufacturer}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Model:</strong> {data.model}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Passengers:</strong> {data.passengers}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Population:</strong> {data.population}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Vehicle Class:</strong> {data.vehicle_class}
//                 </div>
//                 <div className="col text-start">
//                   <strong>Films:</strong>
//                   <ul>
//                     {data.films && data.films.length > 0 ? (
//                       data.films.map((film, index) => (
//                         <li key={index}>
//                           <a href={film}>{film}</a>
//                         </li>
//                       ))
//                     ) : (
//                       <li>No film available</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//         break;
//     }
//   } else {
//     details = <div>Data not available</div>; // Handle case when data is null
//   }
//   return <div>{details}</div>;




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [type, id]);