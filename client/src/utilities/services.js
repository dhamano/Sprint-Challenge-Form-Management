import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';
import { setLocalStorage } from './index';

const baseUrl="//localhost:5000";

/////////////////////////
//                     //
//  Register New User  //
//                     //
/////////////////////////

export const registerUser = (credentials, formikBag) => {
  console.log('registerUser');
  console.log('credentials',credentials);
  return axios.post(`${baseUrl}/api/register`, credentials)
    .then( res => {
      setLocalStorage('token', res.data.token);
      formikBag.props.history.push("/");
    })
    .catch( err => console.log('REGISTERATION ERROR',err.response) );
}

//////////////////
//              //
//  Login User  //
//              //
//////////////////

export const loginUser = (credentials, formikBag) => {
  console.log('loginUser');
  console.log('credentials',credentials);
  return axios.post(`${baseUrl}/api/login`, credentials)
    .then( res => {
      setLocalStorage('token', res.data.token);
      formikBag.props.history.push("/");
    })
    .catch( err => console.log('LOGIN ERROR',err.response) );
}

////////////////////////////
//                        //
//  Get List from Server  //
//                        //
////////////////////////////

export const getList = () => {
  console.log('getList');
  return axiosWithAuth().get(`${baseUrl}/api/restricted/data`)
    .then( res => {
      // console.log(res);
      return res.data;
    })
    .catch( err => console.log('GET LIST ERROR',err.response) );
}