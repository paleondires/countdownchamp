import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'November 25, 2017',
            newDeadline: ''

        };
    }

    changeDeadline() {
        console.log('state', this.state);
        this.setState({
            deadline: this.state.newDeadline
        });
    }

    render() {
        return (
            <div className={"App"}>
                <div className={"App-title"}>Countdown to {this.state.deadline}</div>
                <div>
                    <Clock
                        deadline={this.state.deadline}
                    />
                </div>
                <div>
                  <Form inline={true}>
                    <FormControl
                        className='date-form'
                        placeholder='New Date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default App;
