import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <h1>Are you a new or returning Guest?</h1>
                <button onClick={this.handleClick}>
                    {/* <button onClick={() => this.handleClick()} */}
                    {this.state.isToggleOn ? 'New Guest' : 'Returning Guest'}
                </button>
            </div>
            
        )
    }
}


export default Toggle;