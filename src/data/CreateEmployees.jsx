import React from 'react'
import { faker } from '@faker-js/faker';

export default function createEmployees() {

     const employee = {
          
          firstName : faker.person.firstName(),
          lastName: faker.person.lastName(),
          job: faker.person.jobTitle(),
          email: faker.internet.email(),
          city: faker.location.city()
     }


     return (
          <div className='employeeInfo'>

               <img className='avatar' width='50px' height='50px' src={faker.image.avatar()} />
               
               <div className = 'writtenInfo'>
               {employee.firstName} {employee.lastName}
               <br />
               {employee.job}
               <br/>
               Email: {employee.email}
               <br/>
               Located in: {employee.city}
               </div>
               
          </div>
  )
}


