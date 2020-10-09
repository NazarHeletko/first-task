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
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Table,
  Row,
  Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import BigChart from "../CustomComponents/BigChart";

import {
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard,
  chartStatisticSaas,
  chartsBar1
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

class SaasService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmenu: false
    };
  }

  toggleSubmenu = () => {
    const currentState = this.state.showSubmenu;
    this.setState({ showSubmenu: !currentState });
  };
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
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
          <BigChart chartStatistic={chartStatisticSaas}/>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h2">
                    <i className="card-title-icon fpp-icon-company"/>
                    <span>19</span>
                  </CardTitle>
                  <h5 className="card-category">Companies</h5>
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
                    <i className="card-title-icon fpp-icon-api-d"/>
                    <span>98 411</span>
                  </CardTitle>
                  <h5 className="card-category">API connections</h5>
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
                  <h5 className="card-category">Active subscriptions</h5>
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
          <Row>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      color="dropdown"
                    >
                      <i className="fpp-icon-ellipsis"/>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem className="item-danger">
                        <i className="fpp-icon-pause mr-2"/>
                        Suspend company
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <div className="brief-card-information">
                    <div className="avatar-wr">
                      <div className="thumbnail img-circle">
                        <img
                          alt="..."
                          src={require("assets/img/company-logo.png")}
                        />
                        <div className="img-actions">
                          <button className="btn-img-action" type="button">Edit</button>
                        </div>
                      </div>
                    </div>
                    <h5 className="title">Fabric Masters Inc</h5>
                  </div>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Brand</div>
                        <div className="statistic-table-col">Silk queen </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Location</div>
                        <div className="statistic-table-col">Belgium</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">First joined</div>
                        <div className="statistic-table-col">27.02.2018</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last seen</div>
                        <div className="statistic-table-col">11.05.2018 22:43</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Contact person</div>
                        <div className="statistic-table-col">John Duran</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Email</div>
                        <div className="statistic-table-col">
                          <a href="email:api@fabricmasters.com">api@fabricmasters.com</a>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Phone</div>
                        <div className="statistic-table-col">+32 0468 992 770</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info card-service-details">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-api-d"/>
                  {this.state.showSubmenu ? (
                    <CardTitle className="card-title-action">
                      <i className="back-btn fpp-icon-arrow-left" onClick={this.toggleSubmenu}/>
                      Belgium
                    </CardTitle>
                  ) : (
                    <CardTitle>Service Details</CardTitle>
                  )}
                </CardHeader>
                <CardBody className="px-0">
                  {this.state.showSubmenu ? (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Argenta</div>
                          <div className="statistic-table-col">23 499</div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Bnp paribas fortis</div>
                          <div className="statistic-table-col">104 229</div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Delen private bank</div>
                          <div className="statistic-table-col"> 878 112</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row-group">
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Ais</div>
                            <div className="statistic-table-col">yes</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Pis</div>
                            <div className="statistic-table-col">yes</div>
                          </div>
                        </div>
                        <div className="statistic-table-row-group">
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Api connections</div>
                            <div className="statistic-table-col">5</div>
                          </div>
                          <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                            <div className="statistic-table-col">Belgium</div>
                            <div className="statistic-table-col">
                              <span>3</span>
                              <i className="fpp-icon-arrow-right statistic-action-icon"/>
                            </div>
                          </div>
                          <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                            <div className="statistic-table-col">France</div>
                            <div className="statistic-table-col">
                              <span>2</span>
                              <i className="fpp-icon-arrow-right statistic-action-icon"/>
                            </div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Total api requests</div>
                            <div className="statistic-table-col">1 098 217</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Last api request</div>
                            <div className="statistic-table-col">18.06.2019  19:32</div>
                          </div>
                        </div>

                      </div>
                    </div>

                  )}
                </CardBody>
              </Card>

            </Col>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-cloud-d"/>
                  <CardTitle>
                    <UncontrolledDropdown className="d-inline-block">
                      <DropdownToggle
                        color="dropdown-initial"
                      >
                        Silver
                        <i className="fpp-icon-caret-r dropdown-icon"/>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                        <DropdownItem>Item 3</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table statistic-table_border-bottom">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Lifetime revenue </div>
                        <div className="statistic-table-col">€1 810 665,87</div>
                      </div>
                    </div>
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Monthly subscription</div>
                        <div className="statistic-table-col">€500</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Subscription ends</div>
                        <div className="statistic-table-col">18.07.2019</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max api-s</div>
                        <div className="statistic-table-col">10</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Max requests </div>
                        <div className="statistic-table-col">200 000</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Monthly avarage </div>
                        <div className="statistic-table-col">17 987 REQUESTS</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Monthly trend</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar1.data}
                              options={chartsBar1.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col">Down</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    color="primary"
                    className="btn-link btn-block btn-lg"
                    disabled
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>

            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SaasService;
