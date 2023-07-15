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
                    <div>
                    </div>
                    <div>
                        <h3>Task</h3>
                    </div>
                    <div >
                        <h3>Time</h3>
                    </div>
                    <div >
                        <h3>Priority</h3>
                    </div>
                    <div>
                        <h3>Action</h3>
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
