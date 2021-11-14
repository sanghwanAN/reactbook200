import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class R035_ReactstrapBadge extends Component {
  render() {
    return (
      <div>
        <h1>Product name  
          <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor 
          <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>pill</Badge>
        <Badge href="http://example.com" color="light">GoLink</Badge>
      </div>
    );
  }
}

export default R035_ReactstrapBadge;