import React from 'react';

import TextField from '@material-ui/core/TextField';

export default class Todo extends React.Component {


    render() {


        return (

            /*<DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>*/

            /*<tr>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
            </tr>*/
            
               
                <tr>
                    <td><TextField
                        id="outlined-name"
                        label="Text"
                        value={this.props.text}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChangeChange}
                    /></td>
                    <td><TextField
                        id="outlined-name"
                        label="Priority"
                        value={this.props.priority}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChangeChange}
                    /></td>
                    <td><TextField
                        id="outlined-name"
                        label="DueDate"
                        value={this.props.dueDate.format('DD/MM/YYYY').toString()}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChangeChange}
                    /></td>
                </tr>
            

        );
    }

}