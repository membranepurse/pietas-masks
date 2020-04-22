import React, { Fragment, useContext, useState } from 'react';
import { Alert } from 'reactstrap'; 
import { ProductsContext } from '../Providers/example.provider'

function Alerter() {
    const { visible, onDismiss } = useContext(ProductsContext)


  return (
    <div >
        { visible && 
            <div>
                <Alert color="success" isOpen={visible} toggle={onDismiss}>
                    Your order has been received! You should receive a confirmation email in 5-10 minutes.
                </Alert>
            </div>
        }  
    </div>
  );
}

export default Alerter;
