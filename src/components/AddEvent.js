import React, { Component } from 'react'

export default class AddEvent extends Component {
    render() {
        return (
            <div>
                <p>Add new event</p>
                <input type="text" placeholder="Event Title" />
                <input type="text" placeholder="Event Description" />
                <input type="text" placeholder="Budget" />
                <input type="text" placeholder="Number of Attendees" />
                <input type="text" placeholder="Event Date" />
                <input type="text" placeholder="Event Time" />
                <button>Create Event</button>
            </div>
        )
    }
}
