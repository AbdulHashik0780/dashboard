import constants from '../constants';
const initialState = {}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case constants.GET_SUGGESTED_PRODUCTS:
      return {
        ...state,
        suggestedProducts: action.payload
      }
  }
  return state;
}

export default productReducer;