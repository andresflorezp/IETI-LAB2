import React, { Component } from 'react';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Login from "./Login"
import TodoApp from "./TodoApp"
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }

    }

    render() {
        
        let button;
        const LoginView = () => (
            <Login />
        );
        const TodoView = () => (
            <TodoApp />
        )
        /*
        const value_user = document.getElementById("email").value;
        const value_pass = document.getElementById("password").value;
        if(value_user==localStorage.getItem('email') && value_pass==localStorage.getItem('password')){
            this.setState({isLoggedIn: true});
        }
        else{
            this.setState({isLoggedIn: false});
        }*/

        /*
        if (this.state.isLoggedIn.toString()==="true") {
            button = (<ul>
                <li><Link to="/">Login</Link></li>

                <li><Link to="/todo">Todo</Link></li>

            </ul>);
        } else {
            button = (<ul>
                <li><Link to="/">Login</Link></li>

                

            </ul>);
        }
        */

        return (

            <Router>
                <div className="App">

                    <div>
                        <Switch>
                            <Route exact path="/" component={LoginView} />
                            <Route path="/todo" component={TodoView} />
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        );
    }

}

export default App;
