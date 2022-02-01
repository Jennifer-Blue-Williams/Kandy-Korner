import React from "react"
import { Route } from "react-router-dom";
import { EmployeeList } from "./Employees/EmployeeList";
import { LocationsList } from "./Locations/LocationsList";
import { ProductList } from "./Products/ProductList";
import { EmployeeForm } from "./Employees/EmployeeForm.js";
import { CustomerList } from "./Customers/CustomerList";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employeeForm">
                <EmployeeForm />
            </Route>

            <Route path="/locations">
                <LocationsList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>
        </>
    )
}