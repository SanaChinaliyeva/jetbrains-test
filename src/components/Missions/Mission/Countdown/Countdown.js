import React, {Component} from 'react';
import Timer from 'react-compound-timer';

class Countdown extends Component{
    render () {
        const curDate = new Date();

        const finishTime = this.props.time;
        const finishYear = finishTime.years ? finishTime.years : curDate.getFullYear() ;
        const finishMonth = finishTime.months ? finishTime.months : curDate.getMonth()+1;
        const finishDay = finishTime.date ? finishTime.date : curDate.getDate();

        const compareDate = finishMonth+ "." + finishDay + "." + finishYear;

        const diff = Date.parse(compareDate) - curDate;
        return (
            <Timer
                initialTime={diff<0 ? diff*(-1) : diff}
                direction={diff>0 ? "backward" : "forward"}
            >
                {() => (
                    <React.Fragment>
                        <h4>Timer:
                            <span> <Timer.Days /> days </span>
                            <span> <Timer.Hours /> hours </span>
                            <span> <Timer.Minutes /> minutes </span>
                            <span> <Timer.Seconds /> seconds </span>
                        </h4>
                    </React.Fragment>
                )}
            </Timer>
        );
    }
}

export default Countdown;
