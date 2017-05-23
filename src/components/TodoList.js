import React from 'react';
import {Link} from 'react-router-dom';
const Todo = (prop) => {
    let each = prop.item;
    let className = 'list-group-item';
    if(each.completed){
        className += 'disabled';
    }
    return (
        <Link to={`/todo/${each.id}`}  className={className}>
            {each.text}
        </Link> )
}

const TodoList = (props) => {
    let key = 0;
    return (
        <div className="row">

            <div className="list-group">
                {

                    props.todoList.map((each) => {
                        key += 1;
                        return <Todo key={key} item={each} />

                    })
                }
            </div>
        </div>
    )
}

export default TodoList;