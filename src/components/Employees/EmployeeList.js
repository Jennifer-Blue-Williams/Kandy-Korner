import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then (res => res.json())
                .then((EmployeesFromAPI) => {
                    setEmployees(EmployeesFromAPI)
                })
        },
        []
    )

    const history = useHistory();

return (
    <>
    <div>
        <button onClick={() => history.push("/employees/create")}>
          Hire Employee
        </button>
      </div>
      <div>
        {employees.map((employeeObject) => {
          return (
            <p key={employeeObject.id}>
              {employeeObject.name} works at {employeeObject.location.name}
            </p>
          );
        })}
      </div>
    </>
)
    }