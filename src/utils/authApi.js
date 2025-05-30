import API from './axiosInstance';

export const loginUser = async (UID, password) => {
  try {
    const response = await API.post('/auth/login', {
      UID,
      password,
    });
// console.log(response)
    return response.data; // { token, user }
  } catch (error) {
    console.log( "this is my error",error.response?.data || { message: 'Login failed' });
    const err = error.response?.data?.message || 'Login Failed';
    throw err 
  }
};
export const getRequestById = async (route) => {
  console.log("route",route)
  try {
    const UID = localStorage.getItem('UID');
    const response = await API.get(`/${route}?UID=${UID}`);
    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.message || 'Failed to fetch schedule';
    throw new Error(errMsg);
  }
};

