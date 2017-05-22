export function createToDo(item) {
    return { type: 'CREATE_ITEM', item };
}

export function loadToDoListSuccess(items) {
    return {type: 'LOAD_TODO_LIST_SUCCESS',items};
}

export function loadToDoList(){
    return function(dispatch){
        return fetch('./../src/data/data.json')
            .then(response => response.json())
            .then(json => dispatch(loadToDoListSuccess(json)))
    }
}