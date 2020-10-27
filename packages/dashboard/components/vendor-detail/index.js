import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export class VendorDetail extends Component {
  static propTypes = {
    vendor: PropTypes.object,
  };
  componentDidMount() {
    console.log('Did VendorDetail mount');
  }

  componentWillUnmount() {
    console.log('Will VendorDetail unmount');
  }

  render() {
    const { vendor } = this.props;
    return <div className={style.container}>Showing vendor {vendor.name}</div>;
  }
}
