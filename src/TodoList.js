import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                {todoList}
                </tbody>
            </table>
        );


    }

}
export default TodoList;