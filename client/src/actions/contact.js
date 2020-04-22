import axios from 'axios';
import {
    GET_CONTACTS,
    CONTACT_ERROR,
    ADD_CONTACT,
    GET_CONTACT
  } from './types';

// Get posts
export const getContacts = () => async dispatch => {
    try {
      const res = await axios.get('/api/conatacts');
  
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };


// Create or update profile
export const createContact = (
    formData,
  ) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      const res = await axios.post('/api/contacts', formData, config);
  
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
  
    } catch (err) {
  
      dispatch({
        type: CONTACT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

