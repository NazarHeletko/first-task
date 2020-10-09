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
import React from "react";
// react plugin used to create charts
import {Line} from "react-chartjs-2";
// react plugin for creating vector maps
import {VectorMap} from "react-jvectormap";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import BigChart from "../CustomComponents/BigChart";

import {
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard,
  chartStatisticEcommerce
} from "variables/charts.jsx";

import {table_data} from "variables/general.jsx";
import ReactTables from "../Tables/ReactTable";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Ecommerce extends React.Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td className="td-flag">
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag"/>
            </div>
          </td>
          <td className="text-label">{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right td-percent">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }

  render() {
    return (
      <>
        <PanelHeader
          size="lg"
        />
        <div className="content">
          <BigChart chartStatistic={chartStatisticEcommerce}/>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h2">
                    <i className="card-title-icon fpp-icon-eshop-d"/>
                    <span>14</span>
                  </CardTitle>
                  <h5 className="card-category">Stores</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveUsersChart.data}
                      options={dashboardActiveUsersChart.options}
                    />
                  </div>
                  <Table responsive>
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h2">
                    <i className="card-title-icon fpp-icon-user-group"/>
                    <span>98 411</span>
                  </CardTitle>
                  <h5 className="card-category">Users</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div>
                  <Table responsive>
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h2">
                    <i className="card-title-icon fpp-icon-world"/>
                    <span>12</span>
                  </CardTitle>
                  <h5 className="card-category">Subscriptions</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveCountriesCard.data}
                      options={dashboardActiveCountriesCard.options}
                    />
                  </div>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "360px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#DCE6F0",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ['#DCE6F0', '#54739C'],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardBody>
                  <ReactTables/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Ecommerce;
