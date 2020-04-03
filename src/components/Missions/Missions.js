import React, {Component} from 'react';
import Mission from "./Mission/Mission";
import {nanoid} from 'nanoid';

class Missions extends Component {
    render () {
        return (
            (this.props.missions).map (mission=> {
                return <Mission key={nanoid()} mission={mission} />
            })
        );
    }
}

export default Missions;