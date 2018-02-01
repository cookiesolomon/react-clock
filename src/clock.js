import React from 'react';
import './App.css';
import ElevationBorder from './elev-border';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this._on30MinutesPassedCallBack = [];
        this.state = { date: new Date() };

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        setTimeout(() => { this.raise30MinutesPassed() }, 1000 * 60 * 30);
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }


    on30MinutesPassed(callback) {
        this._on30MinutesPassedCallBack.push(callback);

    }

    raise30MinutesPassed() {
        let that = this;
        this._on30MinutesPassedCallBack.forEach(callbackFunc => {
            if (callbackFunc) {
                callbackFunc(that.state);
            }
        });
    }



    //   getCohort() {
    //     var date = this.state.date;
    //     if (date.getMonth() >= 0 && date.getFullYear() == 2018)
    //       return "Cohort 7";
    //     else
    //       return "Cohort 6";
    // }

    render() {
        var date = this.state.date;
        if (date.getFullYear() == 2018) {
            return (
                <div className={'clock-div'}>
                    <ElevationBorder>
                        <h1 className={'font-effect-neon'}>Hello, Cohort 7!</h1>

                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </ElevationBorder>
                </div>
            );
        } else {

            return null
        }
    }
}


export default Clock;