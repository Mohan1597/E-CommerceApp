import { productDetailsjsonData } from "../Components/ProductOwners/SampleData";

const InitialStata = {
    productDetails: [...productDetailsjsonData],
    // other state properties...
  };

function productslicereducer(state = InitialStata ,action){
    switch(action.type){
        case "ProductAdded" : 
            return {
                ...state,
                productDetails: [
                    ...state.productDetails,
                    {
                        id: 1,
                        productName: action.payload.productName,
                        quantity: action.payload.quantity
                    }
                ]
            };
        default : 
           return state
    }
}

export default productslicereducer;