import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class R053_ReactstrapSpinner extends Component {
  render() {
    return (
      <>
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner type="grow" color="dark" />
      <Spinner type="grow" color="info" />
      <Spinner size="sm" color="primary" />
      <Spinner style={{ width: '10em', height: '0.5em' }} color="dark" /><br/>
      <Spinner style={{ width: '10em', height: '10em' }} color="secondary" />
      <Spinner style={{ width: '3em', height: '10em' }} type="grow" color="primary" />
      </>
   )
  }
}

export default R053_ReactstrapSpinner;