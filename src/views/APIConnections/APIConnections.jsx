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
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col, Input, Label
} from "reactstrap";

import PanelHeader from "../../components/PanelHeader/PanelHeader";
import {Line} from "react-chartjs-2";

import {
  chartsBar1,
  chartsBar2
} from "variables/charts.jsx";
import FormGroupMd from "../CustomComponents/FormGroupMd";

class Settings extends React.Component {
  render() {
    return (
      <>
        <PanelHeader
          size="sm"
        />
        <div className="content">
          <Row>
            <Col md={6}>
              <div className="dropdown-length">
                <label>
                  <span>Sort</span>
                  <select className="custom-select">
                    <option>Recently added</option>
                    <option>test 2</option>
                    <option>test 3</option>
                  </select>
                </label>
              </div>
            </Col>
            <Col md={6} className="text-center text-md-right">
              <FormGroupMd className="md-form search-filter search-filter_table">
                <Input
                  type="text"
                  value={this.props.search}
                  placeholder="Search records"
                  onChange={(e) => { this.onChange(e) }}
                />
                <Label className="sr-only">Search:</Label>
              </FormGroupMd>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="card-main-info top-outside-avatar">
                <CardHeader>
                  <div className="brief-card-information">
                    <div className="avatar-wr">
                      <div className="thumbnail img-circle">
                        <img
                          alt="..."
                          src={require("assets/img/bank-logo-1.png")}
                        />
                        <div className="img-actions">
                          <button className="btn-img-action" type="button">Edit</button>
                        </div>
                      </div>
                    </div>
                    <h5 className="title text-uppercase"><i className="online-status fpp-icon-oval active"/>SWEDBANK AS</h5>
                  </div>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Performance</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar1.data}
                              options={chartsBar1.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col text-lowercase">81ms</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Uptime 24 hrs</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar2.data}
                              options={chartsBar2.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col">94%</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last downtime</div>
                        <div className="statistic-table-col">07.02.2019  22:43</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last run</div>
                        <div className="statistic-table-col">08.02.2019  09:12</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Times called</div>
                        <div className="statistic-table-col">31 665</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Bank color</div>
                        <div className="statistic-table-col" style={{ color: "#FA9401"}}>#FA9401</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info top-outside-avatar">
                <CardHeader>
                  <div className="brief-card-information">
                    <div className="avatar-wr">
                      <div className="thumbnail img-circle">
                        <img
                          alt="..."
                          src={require("assets/img/bank-logo-2.png")}
                        />
                        <div className="img-actions">
                          <button className="btn-img-action" type="button">Edit</button>
                        </div>
                      </div>
                    </div>
                    <h5 className="title text-uppercase"><i className="online-status fpp-icon-oval active"/>swedbank as</h5>
                  </div>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Performance</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar1.data}
                              options={chartsBar1.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col text-lowercase">123ms</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Uptime 24 hrs</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar2.data}
                              options={chartsBar2.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col">80%</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last downtime</div>
                        <div className="statistic-table-col">07.02.2019  22:43</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last run</div>
                        <div className="statistic-table-col">08.02.2019  09:12</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Times called</div>
                        <div className="statistic-table-col">31 665</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Bank color</div>
                        <div className="statistic-table-col" style={{ color: "#0073D0"}}>#FA9401</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info top-outside-avatar">
                <CardHeader>
                  <div className="brief-card-information">
                    <div className="avatar-wr">
                      <div className="thumbnail img-circle">
                        <img
                          alt="..."
                          src={require("assets/img/bank-logo-3.png")}
                        />
                        <div className="img-actions">
                          <button className="btn-img-action" type="button">Edit</button>
                        </div>
                      </div>
                    </div>
                    <h5 className="title text-uppercase"><i className="online-status fpp-icon-oval"/>seb eesti as</h5>
                  </div>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Performance</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar1.data}
                              options={chartsBar1.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col text-lowercase">384ms</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Uptime 24 hrs</div>
                        <div className="statistic-table-col">
                          <div className="chartShort">
                            <Line
                              data={chartsBar2.data}
                              options={chartsBar2.options}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-col">100%</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last downtime</div>
                        <div className="statistic-table-col">07.02.2019  22:43</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last run</div>
                        <div className="statistic-table-col">08.02.2019  09:12</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Times called</div>
                        <div className="statistic-table-col">23 987</div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Bank color</div>
                        <div className="statistic-table-col" style={{ color: "#00CF00"}}>#00CF00</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Settings;
