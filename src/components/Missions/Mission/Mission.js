import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Timer from "./Timer/Timer";

class Mission extends Component {
    render () {
        const mission = this.props.mission;
        return (
            <Card style={{ width: '100rem' }}>\
                <Card.Body>
                    <Card.Title>Название: {mission.name}</Card.Title>
                    <Card.Text>Носитель: {mission.vehicle}</Card.Text>
                    <Card.Text>Место запуска: {mission.location}</Card.Text>
                    <Card.Text>Дата запуска: </Card.Text>
                    {mission.launch.years} ? <Card.Text>Год: {mission.launch.years}</Card.Text> : null
                    {mission.launch.quarters} ? <Card.Text>Четверть: {mission.launch.quarters}</Card.Text> : null
                    {mission.launch.months} ? <Card.Text>Месяц: {mission.launch.months}</Card.Text> : null
                    {mission.launch.date} ? <Card.Text>День: {mission.launch.date}</Card.Text> : null
                    <Timer time={mission.launch} />
                </Card.Body>
            </Card>
        );
    }
}

export default Mission;