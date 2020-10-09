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
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  Row
} from "reactstrap";
import FormGroupMd from "../CustomComponents/FormGroupMd";


class SettingsActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActivity: false
    };
  }

  showActivity = () => {
    const currentState = this.state.showActivity;
    this.setState({showActivity: !currentState});
  };

  render() {
    return (
      <>
        <PanelHeader
          size="tabs"
          tabsNavs
        />
        <div className="content">
          <Row>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-bell"/>
                  <CardTitle>Admin Activity</CardTitle>
                </CardHeader>
                <CardBody className="px-0">

                  <div className="statistic-table">
                    <div className="statistic-table-tbody">

                      <div className="statistic-table-row statistic-table-row-action" onClick={this.showActivity}>
                        <div className="statistic-table-col">
                          <i className="fpp-icon-oval icon-status icon-status_active"/>
                          thomas jobbs
                        </div>
                        <div className="statistic-table-col">
                          <span>19.06.2019  12:54</span>
                          <i className="fpp-icon-arrow-right statistic-action-icon"/>
                        </div>
                      </div>
                      <div className="statistic-table-row statistic-table-row-action" onClick={this.showActivity}>
                        <div className="statistic-table-col">
                          <i className="fpp-icon-oval icon-status"/>
                          li chong
                        </div>
                        <div className="statistic-table-col">
                          <span>22.06.2019  09:18</span>
                          <i className="fpp-icon-arrow-right statistic-action-icon"/>
                        </div>
                      </div>
                      <div className="statistic-table-row statistic-table-row-action" onClick={this.showActivity}>
                        <div className="statistic-table-col">
                          <i className="fpp-icon-oval icon-status icon-status_active"/>
                          julia varner
                        </div>
                        <div className="statistic-table-col">
                          <span>22.06.2019  20:21</span>
                          <i className="fpp-icon-arrow-right statistic-action-icon"/>
                        </div>
                      </div>
                      <div className="statistic-table-row statistic-table-row-action" onClick={this.showActivity}>
                        <div className="statistic-table-col">
                          <i className="fpp-icon-oval icon-status icon-status_active"/>
                          peep paum
                        </div>
                        <div className="statistic-table-col">
                          <span>22.06.2019  11:35</span>
                          <i className="fpp-icon-arrow-right statistic-action-icon"/>
                        </div>
                      </div>
                      <div className="statistic-table-row statistic-table-row-action" onClick={this.showActivity}>
                        <div className="statistic-table-col">
                          <i className="fpp-icon-oval icon-status"/>
                          valery mihhalov
                        </div>
                        <div className="statistic-table-col">
                          <span>23.06.2019  13:17</span>
                          <i className="fpp-icon-arrow-right statistic-action-icon"/>
                        </div>
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {this.state.showActivity && (
              <Col md={4}>
                <Card className="card-main-info card-main-info-activity">
                  <CardHeader>
                    <div className="brief-card-information">
                      <div className="avatar-wr">
                        <div className="thumbnail img-circle">
                          <img
                            alt="..."
                            src={require("assets/img/ryan.jpg")}
                          />
                        </div>
                      </div>
                      <h5 className="title">Thomas Jobbs Activity</h5>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="activity-timeline">
                      <div className="activity-timeline-header">
                        <form className="activity-timeline-search-form">
                          <FormGroupMd className="activity-timeline-search">
                            <Input
                              type="text"
                              placeholder="Search records"
                            />
                            <Label className="sr-only">Search:</Label>
                          </FormGroupMd>
                        </form>
                      </div>
                      <div className="activity-timeline-body">

                        <div className="activity-timeline-group">
                          <div className="activity-timeline-group-header">today</div>

                          <div className="activity-timeline-list">
                            <div className="activity-timeline-item">
                              <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                <div className="activity-timeline-item-time-value">13:34</div>
                              </div>
                              <div className="activity-timeline-item-info">
                                <div className="activity-timeline-item-info-row text-label">app</div>
                                <div className="activity-timeline-item-info-row">
                                  <strong>€10,60</strong> | magnus lindab
                                </div>
                              </div>
                            </div>

                            <div className="activity-timeline-item">
                              <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                <div className="activity-timeline-item-time-value">13:32</div>
                              </div>
                              <div className="activity-timeline-item-info">
                                <div className="activity-timeline-item-info-row text-label">open</div>
                                <div className="activity-timeline-item-info-row">
                                  dashboard
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="activity-timeline-group">
                          <div className="activity-timeline-group-header">Yesterday</div>
                          <div className="activity-timeline-group-body">

                            <div className="activity-timeline-list">
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:32</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">Message</div>
                                  <div className="activity-timeline-item-info-row">
                                    <strong>€12,90</strong> | Tom Raddic
                                  </div>
                                </div>
                              </div>

                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">16:54</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">Fb message</div>
                                  <div className="activity-timeline-item-info-row">
                                    <strong>€10,60</strong> | magnus lindab
                                  </div>
                                </div>
                              </div>

                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="activity-timeline-group">
                          <div className="activity-timeline-group-header">26.06.2019</div>
                          <div className="activity-timeline-group-body">

                            <div className="activity-timeline-list">
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:32</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">Message</div>
                                  <div className="activity-timeline-item-info-row">
                                    <strong>€12,90</strong> | Tom Raddic
                                  </div>
                                </div>
                              </div>

                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">16:54</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">Fb message</div>
                                  <div className="activity-timeline-item-info-row">
                                    <strong>€10,60</strong> | magnus lindab
                                  </div>
                                </div>
                              </div>

                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                              <div className="activity-timeline-item">
                                <div className="activity-timeline-item-time activity-timeline-item-time_rounded">
                                  <div className="activity-timeline-item-time-value">13:34</div>
                                </div>
                                <div className="activity-timeline-item-info">
                                  <div className="activity-timeline-item-info-row text-label">open</div>
                                  <div className="activity-timeline-item-info-row">
                                    dashboard
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </>
    );
  }
}

export default SettingsActivity;
