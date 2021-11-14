import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class R048_ReactstrapModal extends Component {
  pagination = (type) => {
    alert("Go "+type)
  }

  render() {
    return (
      <>
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous onClick={e => this.pagination("previous")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => this.pagination("1")}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => this.pagination("2")}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={e => this.pagination("last")} />
        </PaginationItem>
      </Pagination>
      </>
   )
  }
}

export default R048_ReactstrapModal;