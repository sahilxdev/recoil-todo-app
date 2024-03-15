import './App.css'
import Todos from './components/Todos'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { totalTodos } from './state/selectors/TotalTodos'

function App() {
  const totalTodoState = useRecoilValue(totalTodos);

  return (
      <div>
        <h1 className='text-center text-3xl my-2'>Todo App</h1>
        <Todos />
        <h3 className='text-center'>Total Todos: {totalTodoState} </h3>
      </div>
  )
}

export default App
