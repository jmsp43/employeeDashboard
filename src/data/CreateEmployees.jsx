import React from 'react'
import { faker } from '@faker-js/faker';

export default function createEmployees() {

     const employee = [
          faker.person.firstName(),
          faker.person.lastName(),
          faker.internet.email(),
          faker.location.city()
     ]

     const empMap = employee.map(info => {
          return (info)
     })

     return (
          <div>{empMap}</div>
  )
}


