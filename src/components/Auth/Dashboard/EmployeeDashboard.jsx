import React from 'react'
import Header from '../other/header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
     <Header />
     <TaskNumbers />
     <TaskList />
    </div>
  )
}

export default EmployeeDashboard
