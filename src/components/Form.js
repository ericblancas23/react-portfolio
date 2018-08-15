import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            comment: ''
        }
    }

    onChange(e) {
    const { firstname } = e.target
        this.setState({ firstname: value })
    }

    onSubmit(e) {
        e.preventDefault();

    }


    render() {
        <div>
            <Field onChange={} value={} />
            <Field onChange={} value={} />
            <Field textarea onChange={} value={} />
        </div>
    }
}