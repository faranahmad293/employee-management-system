import React from 'react'

const TaskNumbers = () => {
  return (
    <div className=' flex m-10  justify-between gap-5 screen'>
        <div className=' w-[45%] py-6 px-9 bg-blue-400 rounded-xl' >
            <h2 className='text-3xl font-semibold'>1</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-green-400 rounded-xl' >
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-yellow-400 rounded-xl' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accepetd Task</h3>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-red-400 rounded-xl' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
       
    </div>
  )
}

export default TaskNumbers
