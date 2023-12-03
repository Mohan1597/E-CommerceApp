import { productDetailsjsonData } from "../Components/ProductOwners/SampleData";

const InitialStata = {
    productDetails: [...productDetailsjsonData],
    // other state properties...
  };

function productslicereducer(state = InitialStata ,action){
    switch(action.type){
        case "ProductAdded" : 
            const maxId = Math.max(...state.productDetails.map(item => item.id), 0);
            return {
                ...state,
                productDetails: [
                    ...state.productDetails,
                    {
                        id: maxId + 1,
                        productName: action.payload.productName,
                        quantity: action.payload.quantity
                    }
                ]
            };
        case "ProductRemoved":
            return {
                ...state,
                productDetails: state.productDetails.filter((item) => item.id !== action.payload.id)
            };        
        default : 
           return state
    }
}

export default productslicereducer;