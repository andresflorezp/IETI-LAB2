import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DatePicker from 'react-datepicker';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

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