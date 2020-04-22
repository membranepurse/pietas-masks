import axios from 'axios';
import {
    GET_ORDERS,
    ORDER_ERROR,
    ADD_ORDER,
    GET_ORDER
  } from './types';

// Get posts
export const getOrders = () => async dispatch => {
    try {
      const res = await axios.get('/api/orders');
  
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };


// Create or update profile
export const createOrder = (
    formData,
  ) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      const res = await axios.post('/api/orders', formData, config);
  
      dispatch({
        type: ADD_ORDER,
        payload: res.data
      });
  
    } catch (err) {
  
      dispatch({
        type: ORDER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

