import axios from 'axios';

const API = axios.create({ baseURL: 'http://backend.api' });

export const signIn = ( formData ) => API.post('/user/signin', formData);
export const signUp = ( formData ) => API.post('/user/signup', formData);


// api controller/actions
import * as api from '../api/auth';

export const signin = (formData, history) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });
    history.push('/');
  } catch (error) {
      console.log(error.message);
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });

   history.push('/')
  } catch (error) {
      console.log(error.message);
  }
}