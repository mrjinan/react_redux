import React from 'react';

const Todo = (prop) => {
    let each = prop.item;
    return (
        <a href="#"  className={`list-group-item ${each.completed? 'disabled' : ''}`}>
            {each.text}
        </a> )
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