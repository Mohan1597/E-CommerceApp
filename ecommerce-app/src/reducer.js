import { productDetailsjsonData } from "./Components/ProductOwners/SampleData";

const InitialStata = {
    productDetails: [...productDetailsjsonData],
    // other state properties...
  };

function reducer(state = InitialStata ,action){
    switch(action.type){
        case "ProductAdded" : 
           return [
             ...state,
             {
                id: 1,
                productName: "Redux Product",
             }
           ]
        default : 
           return state
    }
}

export default reducer;