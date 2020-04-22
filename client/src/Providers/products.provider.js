import React,{createContext, useState, useEffect} from 'react'
import shop from '../api/shop'
import PRODUCTS_DATA from './products'

export const ProductsContext = createContext({
    products: [],
    test : ''
})

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const test = "this is a test"

    useEffect(async () => {
        const response = await shop.getProducts(products =>
            products)
            setProducts(response)
    }, [])

    return (
        <ProductsContext.Provider value={{
            products, test
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider