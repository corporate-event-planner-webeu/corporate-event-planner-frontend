import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Events from '../components/Events';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <AddEvent />
                <Events />
            </div>
        )
    }
}
