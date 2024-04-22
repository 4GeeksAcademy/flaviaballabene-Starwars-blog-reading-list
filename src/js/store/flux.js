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
      favorites: [],
    //   images: [{
    //     name: "Luke Skywalker",
    //     img: "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    //   },
    //   {
    //     name: "C-3PO",
    //     img: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
    //   },
    //   {
    //     name: "R2-D2",
    //     img: ""
    //   },
    //   {
    //     name: "Darth Vader",
    //     img: ""
    //   },
    //   {
    //     name: "Leia Organa",
    //     img: ""
    //   },
    //   {
    //     name: "Owen Lars",
    //     img: ""
    //   },
    //   {
    //     name: "Beru Whitesun lars",
    //     img: ""
    //   },
    //   {
    //     name: "R5-D4",
    //     img: ""
    //   },
    //   {
    //     name: "Biggs Darklighter",
    //     img: ""
    //   },
    //   {
    //     name: "Obi-Wan Kenobi",
    //     img: ""
    //   },
    //   {
    //     name: "",
    //     img: ""
    //   },
    //   {
    //     name: "",
    //     img: ""
    //   },
    //   {
    //     name: "",
    //     img: ""
    //   },
    
    
    
    
    // ]
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

      fetchDetails: async (id, category) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/${category}/${id}/`);
          const data = await response.json();
          return data.result;
        } catch (error) {
          console.error(`Error fetching ${category}:`, error);
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

      fetchPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          const data = await response.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },

      addToFavorites: (element) => {
        const { favorites } = getStore();
        if (!favorites.find(favorite => favorite === element)) {
            setStore({ favorites: [...favorites, element] });
        }
    },
    

      deleteElement: (index) => {
        setStore({ favorites: getStore().favorites.filter((favorite, idx) => idx !== index)});
      }, 
    },
  };
};

export default getState;