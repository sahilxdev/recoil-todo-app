import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoState';
import Todo from './Todo';



export default function Todos(){
    const [todos, setTodos] = useRecoilState(todoState);
    const [inputText, setInputText] = useState('');

    function addTodo(){
        if (inputText) {
            setTodos((prevTodos) => [...prevTodos, {id: Math.random(), text: inputText}])
            setInputText('')
        }
        else {
            alert("please give a valid input")
        }
    }

    function handleInputChange(e){
        setInputText(e.target.value)
    }

    function clearTodos(){
        setTodos([])
    }

  return (
      <main>
        <div className='flex justify-center'>
            <input value={inputText} onChange={handleInputChange} type="text" id="todoInput" 
            className='border-2 border-gray-400 rounded-md'/>
            <button  onClick={addTodo}
            className='border-2 border-gray-400 px-4 rounded-md'
            >Add Todo</button>
            <button onClick={clearTodos}
            className='border-2 border-gray-400 px-2 rounded-md'
            >Clear Todos</button>
        </div>

        <div className='w-[600px] m-auto'>
            {
                todos.map((todo)=> {
                    return (
                        <Todo key={todo.id} text={todo.text} id={todo.id} />
                        )
                    })
            }
        </div>

    </main>
  )
}

