import React, { Component } from 'react';
import  {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
    componentWillMount() {
        this.props.setCities();
    }
    
    render() {
        return (
            <div className="cities">
                {this.props.cities.map((city, i) => {
                    return <City city={city} key={i} />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setCities}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);