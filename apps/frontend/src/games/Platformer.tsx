import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface PlatformerProps {
    message: string;
}

class Platformer extends Component<PlatformerProps> {
    render() {
        return (
            <div className="App">
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Platformer.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Platformer;
