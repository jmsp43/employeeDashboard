import React from 'react'

import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList() {
  return (
       <div className = 'employeeList'>
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
      <EmployeeListItem />
      <div>View More</div>
    </div>
  )
}
