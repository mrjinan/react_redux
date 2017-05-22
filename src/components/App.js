import React from 'react';
import TodoList from './TodoList';
import * as $ from 'jquery';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoAction'
import { bindActionCreators } from 'redux';
import AddToDo from './AddToDo';
class App extends React.Component {
    constructor() {
        super();
        this.state = { canAdd: false };
        this.addToDo = this.addToDo.bind(this);
        this.onAdded = this.onAdded.bind(this);

    }
    componentDidMount() {
        console.log(fetch)
        fetch('./../src/data/data.json').then(response => response.json())
            .then(json => {
                this.props.actions.loadToDo(json);
            });
        // Promise.resolve($.ajax('./../src/data/data.json'))
        //     .then(result => {
        //         this.setState({ todoList: result });
        //         console.log(result)
        //     })
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
        return (

            <div className="container">
                {
                    this.props.todoList.length > 0 ?
                        <TodoList todoList={this.props.todoList} /> :
                        <p>none</p>
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

            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    console.log(state);
    console.log(ownProps);
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
