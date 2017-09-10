//Clock component


import React, {Component} from 'react';
import './App.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log(this.props);
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }


    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor((time / (1000 * 60 * 60 * 24)));
        this.setState({days, hours, minutes, seconds});
    }

    addLeadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div>
                <div className={"Clock-days"}>{this.addLeadingZero(this.state.days)} days</div>
                <div className={"Clock-hours"}>{this.addLeadingZero(this.state.hours)} hours</div>
                <div className={"Clock-minutes"}>{this.addLeadingZero(this.state.minutes)} minutes</div>
                <div className={"Clock-seconds"}>{this.addLeadingZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;
