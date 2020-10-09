import React, {Component} from "react";
// react component for creating dynamic tables

export default class TableShowItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { total, perPage, page } = this.props;
    const from = (page - 1) * perPage + 1;
    const to = Math.min(page * perPage, total)
    return (  
      <div className="react-table-info">Showing {from} to {to} of {total} entries</div>
    );
  }
}
