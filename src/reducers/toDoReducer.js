export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_ITEM':
            return [...state, Object.assign({}, action.item)]
        case 'LOAD_TODO_LIST_SUCCESS':
            return action.items;
        default: return state;
    }
}