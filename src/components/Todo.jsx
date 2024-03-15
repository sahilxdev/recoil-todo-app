import { useSetRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState"

export default function Todo({text, id}){
    const setTodos = useSetRecoilState(todoState);
    
    function deleteTodo(){
        setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id !== id);
        })
    }

    return (
        <div className="relative flex justify-center items-center gap-40 m-2 p-2 bg-slate-500 rounded-xl">
            <p className="pr-2">{text}</p>
            <button className="w-7 bg-red-400 m-2 absolute right-3" onClick={deleteTodo}>X</button>
        </div>
    )
}