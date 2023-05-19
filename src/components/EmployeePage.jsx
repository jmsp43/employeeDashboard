import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import Header from './Header'


export default function EmployeePage() {
  return (
       <div className = 'employeePage'>
            <Header/>
            <EmployeeListItem/>
    </div>
  )
}
