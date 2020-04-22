import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createOrder } from '../actions/order';


function OrderForm({ createOrder }) {
    const [formData, setFormData] = useState({
		name: '',
		email: ''
    });

    const { 
        name,
        email
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        createOrder(formData);
    };

    useEffect(() => {

    }, []);


    return (
        <div className="">
            Order Form
			<form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        First and last name
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Email
                    </small>
                </div>
                <input type='submit' className='btn btn-primary my-1' />
            </form>
        </div>
    );
}

export default connect(
    null,
    { createOrder }
  )(OrderForm);