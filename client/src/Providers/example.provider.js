import React,{createContext, useState, useEffect} from 'react'
import PRODUCTS_DATA from './products'
import { v4 as uuidv4 } from 'uuid';


export const ProductsContext = createContext({
    products: [],
    test : '',
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    modal: false,
    visible: true   
})

const ProductsProvider = ({children}) => {

    const data = PRODUCTS_DATA;
    const [cart, setCart] = useState(
        JSON.parse ( localStorage.getItem('cart') ) || []
    );
    const products = [...data]
    const [visible, setVisible] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const onDismiss = () => setVisible(false);

    const openModal = () => {
        console.log('hey')
        setModal(true)
        return
    }

    const closeModal = () => {
        setModal(false)
        return
    }

    const getItemCount = id => {
        let count = 0;
        for (var i = 0; i < cart.length; i++) {
            if(cart[i].id === id) {
                count++;
            }
        }
        return count;
    }
    
    const uniqueCart = () => {
        const example = cart.filter((value, index, self) => self.map(x => x.id).indexOf(value.id) === index)
        return example
    }

    const getProd = i => {
        let result = [];
        console.log(products)
        return products[i - 1]
    }

    const checkout = (cart, history)=> {
        history.push('/checkout')
        console.log(cart)
        console.log('has been checked out')
    }

    const increment = id => {
        // get indiv product
        const prod = getProd(id)
        // add uuid
        const obj = { uuid: uuidv4() };
        const copy = Object.assign({}, prod, obj);
        const final = [...cart, copy]
        setCart(final)
        // indiv item with id
        return copy
    }

    const decrement = uuid => {
        let tempCart = cart
        tempCart = tempCart.filter(item => {
            return item.uuid !== uuid
        })
        setCart(tempCart)
    }
    
    const dropOne = (id) => {
        let array2 = [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "img": "img/product-1.png"},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "img": "img/product-2.png"},
            {"id": 4, "title": "Playboi Carti", "price": 29.99, "inventory": 5, "img": "img/product-4.png"},
            {"id": 4, "title": "Playboi Carti", "price": 29.99, "inventory": 5, "img": "img/product-4.png"}
          ]
        var count = 0;
        let cartCopy = cart
        console.log(cartCopy)
        for(var i=0; i < cartCopy.length; i++) {
            if(array2[i].id === id) {
                cartCopy.splice(i, 1); 
                count++;
                if(count > 0) {
                    console.log(cartCopy)
                    return cartCopy;
                }
            }
        }
    }

    const addCart = id => {
        // get indiv product
        const prod = getProd(id)
        // add uuid
        const obj = { uuid: uuidv4() };
        const copy = Object.assign({}, prod, obj);
        const final = [...cart, copy]
        setCart(final)
        // indiv item with id
        return copy
    }

    const removeCart = id => {
        let tempCart = cart
        tempCart = tempCart.filter(item => {
            return item.id !== id
        })
        setCart(tempCart)
    }

    const clearCart = () => {
        const emptyCart = []
        setCart(emptyCart)
        console.log(cart)
    }

    const showCart = () => {
        console.log('THE CART...')
        console.log(cart);
        console.log(calcTotal())
    }

    const calcTotal = () => {
        let subtotal = 0;
        const results = cart.map(item => (subtotal +=  item.price))
        const index = results.length - 1
        if(itemTotal() === 0) {
            return 0
        } else {
            return results[index]
        }
    }

    const itemTotal = () => {
        const results = cart.length
        return results
    }

    return (
        <ProductsContext.Provider value={{
            products,
            cart,
            modal,
            visible,
            onDismiss,
            getProd,
            addCart,
            removeCart,
            clearCart,
            showCart,
            calcTotal,
            checkout,
            itemTotal,
            uniqueCart,
            getItemCount,
            decrement,
            increment,
            openModal,
            closeModal
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider