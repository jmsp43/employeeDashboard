import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import NavBar from './NavBar'

export default function Homepage() {
  return (
       <div className = 'homepage'>
      <Header page={'Directory'} />
            <NavBar/>
            <EmployeeList/>
    </div>
  )
}
