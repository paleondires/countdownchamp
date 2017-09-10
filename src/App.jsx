import React, {Component} from 'react';
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
                    <input
                        placeholder='new date test'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    ></input>
                    <button onClick={() => this.changeDeadline()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;