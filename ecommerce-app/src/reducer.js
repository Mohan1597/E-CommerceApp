import { productDetailsjsonData } from "./Components/ProductOwners/SampleData";

const InitialStata = {
    productDetails: [...productDetailsjsonData],
    // other state properties...
  };

function reducer(state = InitialStata ,action){
    switch(action.type){
        case "ProductAdded" : 
            return {
                ...state,
                productDetails: [
                    ...state.productDetails,
                    {
                        id: 1,
                        productName: action.payload.productName,
                    }
                ]
            };
        default : 
           return state
    }
}

export default reducer;