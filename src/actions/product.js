import * as productService from '../services/product';
import constants from '../constants'

const getAllProducts = () => async dispatch => {
  const { data: { data } } = await productService.getAllProducts()
  dispatch({ type: constants.GET_ALL_PRODUCTS, payload: data.products })
}

const getSuggestedProducts = () => async dispatch => {
  const { data: { data } } = await productService.getSuggestedProducts();
  dispatch({ type: constants.GET_SUGGESTED_PRODUCTS, payload: data.products })
}

export {
  getAllProducts,
  getSuggestedProducts
}
