import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const TodoList = ({todo, handleChange, removeTodo}) => {
    return ( 
        todo.map((todo)=>{
                return (
                    <div className={`todo-list-item ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                        <Checkbox onChange={() => handleChange(todo.id)} checked={todo.completed}>{todo.title}</Checkbox>
                        <DeleteOutlined className="todo-remove" onClick={() => removeTodo(todo.id)} />
                    </div>
                )
            }
        )
     );
}
 
export default TodoList;