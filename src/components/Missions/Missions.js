import React, {Component} from 'react';
import axios from 'axios';
import Mission from "./Mission/Mission";
import uuid from 'uuid';

class Missions extends Component {
    render () {
        return (
            (this.props.missions).map (mission=> {
                return <Mission key={uuid()} mission={mission} />
            })
        );
    }
}

export default Missions;