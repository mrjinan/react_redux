import React from 'react';
const ToDo = ({each}) => {
    console.log(each)
    return (
        <div className="row">
           {each.description}
        </div>
    )
}

export default ToDo;    