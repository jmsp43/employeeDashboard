import React from 'react'
import { faker } from '@faker-js/faker';

export default function createEmployees() {

     const employee = {
          
          firstName : faker.person.firstName(),
          lastName : faker.person.lastName(),
          email: faker.internet.email(),
          city: faker.location.city()
     }


     return (
          <div className='employeeInfo'>
               <img width = '50px' height = '50px' src ={faker.image.avatar()}/>
               <br/>
               {employee.firstName} {employee.lastName}
               <br />
               Email: {employee.email}
               <br/>
               Located in: {employee.city}
          </div>
  )
}


