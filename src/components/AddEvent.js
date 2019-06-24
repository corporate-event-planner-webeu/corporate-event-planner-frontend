import React, { Component } from 'react'

export default class AddEvent extends Component {
    render() {
        return (
            <div>
                <p>Add new event</p>
                <input type="text" placeholder="Event Name" />
                <input type="text" placeholder="Budget" />
                <input type="text" placeholder="Owner/client" />
                <input type="text" placeholder="Event Date" />
                <button>Create Event</button>
            </div>
        )
    }
}
