import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
    render() {
        return (this.props.activeCity ? 
            (<div>
                <h1>{this.props.activeCity.name}</h1>
            </div>
        ) :
        (<div>
            <h1>No active city</h1>
        </div>)
        )
    }
}

function mapStateToProps(state) {
    return {
        activeCity: state.activeCity
    }
}

export default connect(mapStateToProps)(ActiveCity);