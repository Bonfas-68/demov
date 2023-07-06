import { useEffect, useContext, useState } from 'react'
import { apiDomain } from '../utils/utils'
import axios from 'axios'
import { Context } from '../todoRedux/userContext/Context'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './todolist.css'
import UpdateForm from './UpdateForm'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodos } from '../todoRedux/apiCalls'
function TodoList() {
    const [showEditForm, setShowEditForm] = useState(false)
    // const [todos, setTodos] = useState([])
    const [tempTodo, setTempTodo] = useState('')
    // const { user } = useContext(Context)

    const disaptch = useDispatch();
    const todos = useSelector((state)=>state.todos.todos)
   const user = useSelector((state)=>state.user.user);
    // console.log(todos);

    useEffect(() => {
        getTodos(disaptch,user);
    }, [])

    const handleDelete = async (id) => {
        console.log('delete data');
        deleteTodo(id,disaptch,user)}

    const handleToggle = (data) => {
        setTempTodo(data)
        setShowEditForm(!showEditForm)
    }



    return (
        <div className='todo_wrapper'>
            {todos && todos.map((todo, index) => {
                return (

                    <div className="card" key={todo.id}>
                        <p>{todo.description}</p>
                        <AiFillDelete className='delIcon' onClick={() => handleDelete(todo.id)} />
                        <AiFillEdit className='delIcon' onClick={() => handleToggle(todo)} />
                        {
                            showEditForm && <UpdateForm setShowEditForm={setShowEditForm} todo={tempTodo} getTodos={getTodos} />
                        }
                    </div>

                )
            })
            }
        </div>
    )
}




export default TodoList