export function createToDo(item) {
    return { type: 'CREATE_ITEM', item };
}

export function loadToDo(items) {
    return {type: 'LOAD_TO_DO_SUCCESS',items};
}