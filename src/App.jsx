import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });
    setTask(copyTask)


    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex items-start flex-col lg:w-1/2 gap-4 p-10'
      >

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading...'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* INPUT FOR DETAILS */}
        <textarea
          type="text"
          placeholder='Write Details...'
          className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded '
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        {/* SUBMIT BUTTON */}
        <button
          className='bg-white w-full active:bg-gray-500 active:text-white active:scale-99 font-medium text-black px-5 py-2 outline-none rounded cursor-pointer transition-colors duration-150 ease-in-out'
        >
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start overflow-auto h-[90%] gap-5 mt-5'>
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 py-4 px-4 rounded-xl text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-3 leading-tight font-medium text-gray-700'>{elem.details}</p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className='w-full cursor-pointer active:scale-95 bg-red-500  py-1 text-xs rounded font-bold text-white'
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App