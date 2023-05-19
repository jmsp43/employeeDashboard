
import './App.css'
import EmployeeList from './components/EmployeeList'
import EmployeeListItem from './components/EmployeeListItem'
import EmployeePage from './components/EmployeePage'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='app'>
        {/* <EmployeeList />
        <EmployeeListItem /> */}
        <Homepage />
        <EmployeePage />
        {/* <Header />
        <NavBar/> */}
</div>
    </>
  )
}

export default App
