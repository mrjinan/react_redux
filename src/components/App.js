import React from 'react';
import TodoList from './TodoList';
import * as $ from 'jquery';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoAction'
import { bindActionCreators } from 'redux';
import AddToDo from './AddToDo';
import {Route} from 'react-router-dom';
import ToDo from './Todo'
class App extends React.Component {
    constructor() {
        super();
        this.state = { canAdd: false };
        this.addToDo = this.addToDo.bind(this);
        this.onAdded = this.onAdded.bind(this);

    }
    addToDo() {
        this.setState({ canAdd: true });
    }
    onAdded(args) {
        let newToDo = { text: args, completed: false };
        // this.props.createToDo(newToDo);
        this.props.actions.createToDo(newToDo);
        this.setState({ canAdd: false })
    }
    render() {
        console.log(this.props.todoList)
        return (

            <div className="container">
                {
                    this.props.todoList.length > 0 ?
                        <TodoList todoList={this.props.todoList} /> :
                        <p>Loading....</p>
                }
                <div className="row">
                    <button onClick={this.addToDo} type="button" title="Add a to do" className="btn btn-primary">+</button>

                </div>
                {
                    this.state.canAdd ?
                        <div className="row">
                            <AddToDo onAdded={this.onAdded} />
                        </div> : null
                }
                <Route path="/todo/:id" render={({match})=>(
                    <ToDo each={this.props.todoList.find(e=>e.id === parseInt(match.params.id))} />
                )}/>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        todoList: state.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // createToDo: todo=>dispatch(todoActions.createToDo(todo))
        actions: bindActionCreators(todoActions, dispatch)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
