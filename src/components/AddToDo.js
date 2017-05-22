import React from 'react';
const AddToDo = (props) => {
    let toDo = '';
    let onChange = (e) => {
        toDo = e.target.value;
    }

    let add = () => {
        props.onAdded(toDo);
    }
    return (
        <div className="navbar-form navbar-left" role="search">
            <div className="form-group">
                <input type="text" className="form-control" onChange={onChange} placeholder="New To do" />
            </div>
            <button className="btn btn-default" onClick={add}>Add</button>
        </div>
    )
}

export default AddToDo;