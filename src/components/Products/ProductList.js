import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_sort=productTypeId&_order=desc&_expand=productType")
                .then (res => res.json())
                .then((ProductsFromAPI) => {
                    setProducts(ProductsFromAPI)
                })
        },
        []
    )


return (
    <>
        <ul> {products.map(product => 
            <li><p key={`product--${product.id}"`}>{product.name}</p>
                <p>{product.price}</p> 
                <p>{product.productType.name}</p> 
            </li>)}
        </ul>
    </>   
    )
}
