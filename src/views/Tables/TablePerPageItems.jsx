import React, {Component} from "react";

export default class TablePerPageItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [1, 5, 10, 25, 50, 100],
    };
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
      <div className="dropdown-length">
        <label>
          <span>Show</span>
          <select className="custom-select" defaultValue={this.props.defaultValue ? this.props.defaultValue : this.state.values[0]} onChange={(e) => { this.onChange(e) }}>
            { this.state.values.map((value, key) => {
              return <option key={key} value={value}>{value}</option>
            }) }
          </select>
          <span>entries</span>
        </label>
      </div>
    );
  }
}
