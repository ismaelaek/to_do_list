import React from 'react';

class Entity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: []
        };
    }

    render() {
        if (this.props.params.length !== 0) {
        return (
            <div>
            <div className="task">
                <div className="taskName">
                <h3>Task</h3>
                </div>
                <div className="taskTime">
                <h3>Time</h3>
                </div>
                <div className="taskPriority">
                <h3>Priority</h3>
                </div>
            </div>
            </div>
        );
        } else {
        return null;
        }
    }
}

export default Entity;
