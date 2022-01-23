import React from "react"
import {LocationsList} from "./Locations/LocationsList.js"
import { EmployeeList } from "./Employees/Employees.js"
import { ProductList } from "./Products/ProductList.js"

export const KandyKorner = () => {

    return (
        <>

        <h1>Kandy Korner Sugar Shop</h1>

        <h1>Locations</h1>
        <LocationsList />

        <h1>Products</h1>
        <ProductList />
        
        <h1>Employees</h1>
        <EmployeeList />

        </>

    )
    
}