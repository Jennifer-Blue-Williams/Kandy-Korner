import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then (res => res.json())
                .then((EmployeesFromAPI) => {
                    setEmployees(EmployeesFromAPI)
                })
        },
        []
    )


return (
    <>
    {
            employees.map(
                (employee) => {
                    return <p key={`employee--${employee.id}`}>{employee.name}</p>
                }
            )
        }
    </>
)
    }