import axios from 'axios';
import {
    GET_ORDER,
    GET_ORDERS,
    ORDER_ERROR,
    ADD_ORDER,
    DELETE_ORDER
  } from '../actions/types';

  
const initialState = {
    orders: [],
    order: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ORDERS:
        return {
          ...state,
          orders: payload,
          loading: false
        };
      case GET_ORDER:
        return {
          ...state,
          order: payload,
          loading: false
        };
      case ADD_ORDER:
        return {
          ...state,
          orders: [payload, ...state.orders],
          loading: false
        };
      case DELETE_ORDER:
        return {
          ...state,
          orders: state.orders.filter(order => order._id !== payload),
          loading: false
        };
      case ORDER_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  