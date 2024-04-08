// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;




const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: []
        },
        actions: {
            fetchPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people:", error);
				}
			},

            fetchPerson: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/id/");
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error fetching people:", error);
				}
			},
			
            fetchVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            fetchVehicle: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/id/");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            fetchPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            fetchPlanet: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/id/");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            addToFavorites: (element) => {
                const { favorites } = getStore();
                setStore({ favorites: [...favorites, element] });
              },

            deleteElement: (id) => {
            const { favorites } = getStore();
            const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
            setStore({ favorites: updatedFavorites });
            }      
        }
    };
};

export default getState;



// addToFavorites: (element) => {
//     const { favorites } = getStore();
//     const newFavorite = { id: favorites.length + 1, name: element }; // Assign a unique id
//     setStore({ favorites: [...favorites, newFavorite] });
// },
