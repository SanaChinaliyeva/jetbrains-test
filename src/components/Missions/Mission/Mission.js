import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Countdown from "./Countdown/Countdown";

class Mission extends Component {
    render () {
        const mission = this.props.mission;
        return (
            <Card style={{ width: '75rem', margin: 'auto' }}>
                <Card.Body>
                    <Card.Title>Название: <b>{mission.mission}</b></Card.Title>
                    <Card.Text>Носитель: <b>{mission.vehicle}</b></Card.Text>
                    <Card.Text>Место запуска: <b>{mission.location}</b></Card.Text>
                    <Card.Text>Дата запуска: </Card.Text>
                    {
                        mission.launch ?
                            <Card.Text>
                                {mission.launch.date ? <b>{mission.launch.date}.</b>: null }
                                {mission.launch.months ? <b>{mission.launch.months}.</b>: null }
                                {mission.launch.years ? <b>{mission.launch.years}</b>: null }
                            </Card.Text>

                            : <p>неизвестно</p>
                    }

                    <Countdown time={mission.launch} />
                </Card.Body>
            </Card>
        );
    }
}

export default Mission;