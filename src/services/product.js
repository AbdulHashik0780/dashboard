import dashboardGateway from './index'

export const getAllProducts = () => dashboardGateway.get('/products/getAll');
export const getSuggestedProducts = () => dashboardGateway.get(`/user/suggestedProducts`)