import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Login from "./Login"
import TodoApp from "./TodoApp"
class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        const LoginView = () => (
            <Login />
        );
        const TodoView = () => (
            <TodoApp />
        )

        return (
            <Router>
                <div className="App">
                   

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView} />
                        <Route path="/todo" component={TodoView} />
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
