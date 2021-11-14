import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <>
      <InputGroup>
        <Input placeholder="userid" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@reactmail.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>버튼</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      </>
    )}
}

export default R045_ReactstrapInputGroup;