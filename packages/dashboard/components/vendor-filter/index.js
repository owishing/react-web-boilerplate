import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const vendors = [
    {
        name: 'Perks',
    },
    {
        name: 'Venue',
    },
];

export class VendorFilter extends Component {
    static propTypes = {
        showVendorDetails: PropTypes.func.isRequired,
    }

    state = {
        name: '',
    }

    componentDidUpdate() {
        console.log('Did VendorFilter update');
    }

    handleVendorFilterChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
        const vendor = vendors.find((v) => v.name === name);
        this.props.showVendorDetails(vendor);
    }

    render () {
        return <div className={style.container}>
            <input onChange={this.handleVendorFilterChange} value={this.state.name}/>
        </div>;
    }
}
