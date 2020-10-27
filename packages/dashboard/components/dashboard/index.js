import React, { Component } from 'react';
import { Nav } from '../nav';
import { VendorFilter } from '../vendor-filter';
import { VendorDetail } from '../vendor-detail';
import style from './style.scss';

export class Dashboard extends Component {
  state = {
    currentVendor: null,
  };

  showVendorDetails = (currentVendor) => this.setState({ currentVendor });

  render() {
    const { currentVendor } = this.state;
    return (
      <div className={style['dashboard-container']}>
        <Nav />
        <VendorFilter showVendorDetails={this.showVendorDetails} />
        {currentVendor && <VendorDetail vendor={currentVendor} />}
      </div>
    );
  }
}
