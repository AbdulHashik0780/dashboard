import { dashboardAuthenticator } from './index'

export const login = (payload) => dashboardAuthenticator.post('/login', payload);
export const signup = (payload) => dashboardAuthenticator.post('/signup', payload)