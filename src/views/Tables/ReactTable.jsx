/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, {Component} from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import TableSearchItems from "./TableSearchItems"
import TablePerPageItems from "./TablePerPageItems"
import TableShowItems from "./TableShowItems"
import TablePaginator from "./TablePaginator"
import Loader from "../CustomComponents/Loader";

const dataTable = [
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Brfyan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
  ["", "27.02.2018", "11.05.2018  22:45", "Becky Bryan", "b.bryan@gmail.com", "+378 553 22918", "Germany", "01.09.2019", "01.03.2020", "€982 332", "37 176", "18.06.2019  19:32", "€1 810 665"],
  ["text-success", "14.03.2018", "20.07.2018  05:29", "Carl Richards", "carl.richards@hotmail.com", "+372 502 287", "Estonia", "15.03.2019", "15.02.2020", "€2 897", "29", "20.04.2019  11:03", "€67 987"],
];

export default class ReactTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.updateTableData(this.props.data),
      search: '',
      perPage: 10,
      page: 1
    };
    console.log("state", this.state)
  }

  updateTableData(data) {
    if (!data) {
      return [];
    }

    return data.map((prop, key) => {
      return {
        id: prop[13],
        status: (
          // we've added some custom button actions
          <div className="td-status">
          <i className={`fpp-icon-oval ${prop[0]}`}/>
        </div>
        ),
        firstJoined: prop[1],
        lastSeen: prop[2],
        name: prop[3],
        email: prop[4],
        phone: prop[5],
        country: prop[6],
        
        started: prop[7],
        ends: prop[8],
        revenue: prop[9],
        
        times: prop[10],
        last: prop[11],
        revenueTransactions: prop[12],
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ data: this.updateTableData(nextProps.data) });
    }
  }

  handleSearchChange(value) {
    this.setState({ search: value })
  }

  handlePerPageChange(value) {
    this.setState({ perPage: Number(value), page: 1 })
  }

  handlePageChange(value) {
    this.setState({ page: Number(value) })
  }

  render() {
    console.log(this.props.data)
    const { page, perPage, data, search } = this.state;

    return (
      <>
        <Row className="react-table-header">
          {this.props.exportDropdown && (
            <Col xs={12} className="react-table-export-dropdown">
              <UncontrolledDropdown>
                <DropdownToggle
                  color="dropdown"
                >
                  <i className="fpp-icon-ellipsis" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <i className="fpp-icon-export mr-2" />
                    Download CSV
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fpp-icon-export mr-2" />
                    Download XLS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          )}
          <Col md={6}>
            <TablePerPageItems defaultValue={this.state.perPage} onChangeCB={(count) => { this.handlePerPageChange(count) }}/>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <TableSearchItems value={search} onChangeCB={(searchValue) => { this.handleSearchChange(searchValue) }}/>
          </Col>
        </Row>
        <ReactTable
          data={this.state.data}
          columns={[
            {
              columns: [
                {
                  accessor: "status",
                  sortable: false,
                  width: 20
                },
                {
                  Header: "First joined",
                  accessor: "firstJoined"
                },
                {
                  Header: "Last seen",
                  accessor: "lastSeen"
                },
                {
                  accessor: "name",
                  Header: "Name",
                  Cell: (row) => {
                    return <a onClick={this.props.userNameClicked(row.original)} href="#">{row.value}</a>
                  },
                },
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Phone",
                  accessor: "phone"
                },
                {
                  Header: "Country",
                  accessor: "country"
                }
              ]
            },
            {
              Header: "Subscriptions",
              columns: [
                {
                  Header: "Started",
                  accessor: "started"
                },

                {
                  Header: "Ends",
                  accessor: "ends"
                },
                {
                  Header: "Revenue",
                  accessor: "revenue"
                }
              ]
            },
            {
              Header: "Transactions",
              columns: [
                {
                  Header: "Times",
                  accessor: "times"
                },
                {
                  Header: "Last",
                  accessor: "last"
                },
                {
                  Header: "Revenue",
                  accessor: "revenueTransactions"
                }
              ]
            }
          ]}
          page={page - 1}
          pageSize={Math.min(perPage, data.length)}
          showPagination={false}
          resizable={false}
        />
        <Row className="react-table-footer">
          <Col md={5}>
            <TableShowItems total={data.length} perPage={perPage} page={page}/>
          </Col>
          <Col md={7}>
            <TablePaginator onChangePageCB={(pageNumber) => { this.handlePageChange(pageNumber) }} total={data.length} perPage={perPage} page={page}/>
          </Col>
        </Row>
      </>
    );
  }
}

ReactTables.defaultProps = {
  exportDropdown: false
};
