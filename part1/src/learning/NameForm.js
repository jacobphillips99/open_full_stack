import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'default'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("Form submitted: ", this.state.value);
        localStorage.expValue = this.state.value;
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
                {console.log(this.state.value)}
            </form>
        )
    }
}

export default NameForm