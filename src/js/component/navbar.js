// import React from "react";
// import { Link } from "react-router-dom";
// import starWarsLogo from "../../img/Star-Wars-Logo-1.png";
// import { element } from "prop-types";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-center" >
// 			<div className="d-flex justify-content-between align-items-center" style={{ width: '80rem'}}>
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1"><img src={starWarsLogo} style={{width: "90px", height: "60px"}}/></span>
// 			</Link>
// 			<div className="dropdown ml-auto">
//     <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
//         Favourites <span className="badge text-bg-secondary">4</span>
//     </button>
//     <ul className="dropdown-menu">
//         <li className="dropdown-item">Action <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
//   <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
// </svg></li>
//     </ul>
// </div>

// 			</div>
// 		</nav>
// 	);
// };


// // onClick={() => deleteElement(element.id)}

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/Star-Wars-Logo-1.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  // Check if store.favorites is defined before accessing its properties
  const favoritesCount = store.favorites ? store.favorites.length : 0;

  return (
    <nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-center">
      <div className="d-flex justify-content-between align-items-center" style={{ width: '80rem'}}>
        <Link to="/">
          <span className="navbar-brand mb-0 h1"><img src={starWarsLogo} style={{width: "90px", height: "60px"}}/></span>
        </Link>
        <div className="dropdown ml-auto">
          <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
            Favourites <span className="badge text-bg-secondary">{favoritesCount}</span>
          </button>
          <ul className="dropdown-menu">
            {store.favorites && store.favorites.map((favorite, index) => (
              <li className="dropdown-item" key={index}>
                {favorite}
                <svg onClick={() => actions.deleteElement(favorite.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

