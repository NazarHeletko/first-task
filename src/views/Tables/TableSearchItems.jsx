import React, {Component} from "react";

import {
  Input, Label
} from "reactstrap";

import FormGroupMd from "../CustomComponents/FormGroupMd";

export default class TableSearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(e) {
    e.preventDefault();
    const { value } = e.target;
    if (this.props.onChangeCB) {
      this.props.onChangeCB(value)
    }
  }

  render() {
    return (
      <FormGroupMd className="md-form search-filter search-filter_table">
        <Input
          type="text"
          value={this.props.search}
          placeholder="Search records"
          onChange={(e) => { this.onChange(e) }}
        />
        <Label className="sr-only">Search:</Label>
      </FormGroupMd>
    );
  }
}
