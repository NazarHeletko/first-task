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
import _ from "lodash";
import moment from "moment";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Input, Label
} from "reactstrap";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import CommonChartContainer from "../../containers/Dashboard/CommonChartContainer";
import UsersChartContainer from "../../containers/Dashboard/UsersChartContainer";
import SubscriptionsChartContainer from "../../containers/Dashboard/SubscriptionsChartContainer";
import ActiveCountriesChartContainer from "../../containers/Dashboard/ActiveCountriesChartContainer";

import ReactTables from "../Tables/ReactTable";

import FormGroupMd from "../CustomComponents/FormGroupMd";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: false,
      tableContent: [],
      selectedUser: undefined
    };
  }

  componentDidMount() {
    this.props.getFPPUsers();
    this.props.getPermissions();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      this.createTableContent(nextProps.users);
    }
  }

  userNameClicked = (row) => () => {
    console.log("displaying user", this.props.users)
    var user = _.find(this.props.users, function(obj) {
      return obj.user.id === row.id;
    });
    console.log("user", user);
    this.setState({ selectedUser: user})
  }

  setNewMembership = (index, p_g_id) => () => {
    let date = prompt("Subscription expiration date in D.MM.YYYY format");
    if (date) {
      date = moment(date, "D.M.YYYY")
      if (date.isValid()) {
        this.props.updateUserPermissions(this.state.selectedUser.user.id, p_g_id, date.unix());
        return;
      }
      alert("Could not parse the date")
    }

  }

  createTableContent(users) {
    var tableContent = users.map(i => [
      i.membership.has_membership ? "text-success" : "",
      "",
      "",
      i.user.name,
      _.map(i.emails, 'email').join(", "),
      _.map(i.phone_numbers, 'number').map(i => "+"+i).join(", "),
      "",
      "",
      i.membership.has_membership
        ? moment.unix(i.membership.active_until).format("MM.DD.YYYY")
        : "",
      "€0",
      "",
      "",
      "€0",
      i.user.id
    ]);
    this.setState({ tableContent });
  }

  toggleActivity = () => {
    const currentState = this.state.activity;
    this.setState({ activity: !currentState });
  };

  render() {
    return (
      <>
        <PanelHeader
          size="lg"
        />
        <div className="content">
          <CommonChartContainer />
          <Row>
            <Col xs={12} md={4}>
              <UsersChartContainer />
            </Col>
            <Col xs={12} md={4}>
              <SubscriptionsChartContainer />
            </Col>
            <Col xs={12} md={4}>
              <ActiveCountriesChartContainer />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardBody>
                  <ReactTables data={this.state.tableContent} userNameClicked={this.userNameClicked} exportDropdown={true} />
                </CardBody>
              </Card>
            </Col>
          </Row>
          {this.state.selectedUser && 
            <Row>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      color="dropdown"
                    >
                      <i className="fpp-icon-ellipsis" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem className="item-danger">
                        <i className="fpp-icon-pause mr-2" />
                        Suspend user
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <div className="brief-card-information">
                    <div className="avatar-wr">
                      <div className="thumbnail img-circle">
                        <img
                          alt="..."
                          src={this.state.selectedUser.user.image}
                        />
                      </div>
                    </div>
                    <h5 className="title"><i className="user-status fpp-icon-oval active" />{this.state.selectedUser.user.name}</h5>
                  </div>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Country</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">First joined</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Last seen</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Send money limit</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Default account</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Money sent</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Money asked</div>
                        <div className="statistic-table-col"></div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-main-membership">
                <CardHeader>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      color="dropdown"
                    >
                      <i className="fpp-icon-ellipsis" />
                    </DropdownToggle>
                    <DropdownMenu>
                      {this.props.groups.map((prop, y) => (
                        <DropdownItem onClick={this.setNewMembership(undefined, prop._id).bind(this)} key={y} value={prop._id}>{prop.display_name}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <div className="brief-card-information">
                    <h5 className="title"><i className={this.state.selectedUser.membership.has_membership ? "user-status fpp-icon-oval active" : "user-status fpp-icon-oval"} />Membership</h5>
                  </div>
                </CardHeader>
                {this.state.selectedUser.membership.has_membership && this.props.groups &&
                  <CardBody className="px-0">
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Package Name</div>
                          <div className="statistic-table-col">
                              {this.state.selectedUser.membership.permissionGroup.display_name}
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Permissions</div>
                          <div className="statistic-table-col">{this.state.selectedUser.membership.permissionGroup.permissions.join(", ")}</div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Active Until</div>
                          <div className="statistic-table-col">{moment.unix(this.state.selectedUser.membership.active_until).format("DD.MM.YYYY")}</div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                }
              </Card>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-profit" />
                  <CardTitle className="">Lifetime Value</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Total</div>
                        <div className="statistic-table-col"></div>
                      </div>
                    </div>
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Subscription fees</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Money sent</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Money asked</div>
                        <div className="statistic-table-col"></div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Avalible balance</div>
                        <div className="statistic-table-col"></div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-bank" />
                  <CardTitle>Connected Accounts ({this.state.selectedUser.banks.length})</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">Combined balance</div>
                        <div className="statistic-table-col">{}</div>
                      </div>
                    </div>
                    <div className="statistic-table-tbody">

                      {this.state.selectedUser.banks.map((prop, y) => (
                        <div className="statistic-table-row-group">
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Account ID</div>
                            <div className="statistic-table-col">{prop._id}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Bank</div>
                            <div className="statistic-table-col">{prop.bank_code}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">IBAN</div>
                            <div className="statistic-table-col">{prop.account_iban}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Name</div>
                            <div className="statistic-table-col">{prop.account_name}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Balance</div>
                            <div className="statistic-table-col">{prop.currency} {prop.balance}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Last Updated</div>
                            <div className="statistic-table-col">{moment.unix(prop.lastUpdated).format("DD.MM.YYYY")}</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col"></div>
                            <div className="statistic-table-col"></div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-telephone" />
                  <CardTitle>Contacts ({this.state.selectedUser.phone_numbers.length+this.state.selectedUser.emails.length}) </CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row-group">
                        {
                          this.state.selectedUser.phone_numbers.map((prop, index) => {
                            return (
                              <div className="statistic-table-row">
                                <div className="statistic-table-col">Phone {index+1}</div>
                                <div className="statistic-table-col">
                                <a href={"tel:+"+prop.number}>+{prop.number}</a>  
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>

                      <div className="statistic-table-row-group">
                        {
                          this.state.selectedUser.emails.map((prop, index) => {
                            return (
                              <div className="statistic-table-row">
                                <div className="statistic-table-col">Email {index+1}</div>
                                <div className="statistic-table-col">
                                  <a href={"email:"+prop.email}>{prop.email}</a>
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info card-main-info-activity">
                {this.state.activity ? (
                  <>
                    <CardHeader>
                      <i className="card-header-icon fpp-icon-bell" />
                      <CardTitle className="card-title-action">
                        <i className="back-btn fpp-icon-arrow-left" onClick={this.toggleActivity} />
                        <i className="time-icon fpp-icon-paper-plane" />
                        13:34 APP
                      </CardTitle>
                    </CardHeader>
                    <CardBody className="px-0">
                      <div className="statistic-table statistic-table_border-bottom statistic-table_top-space">
                        <div className="statistic-table-tbody">
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Amount</div>
                            <div className="statistic-table-col">€10,60</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Sender</div>
                            <div className="statistic-table-col">John Macclane</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">From</div>
                            <div className="statistic-table-col">EE0392117210273098363</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Receiver</div>
                            <div className="statistic-table-col">Magnus Linda</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">to</div>
                            <div className="statistic-table-col">EE022203221027668318</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Date</div>
                            <div className="statistic-table-col">Wednesday, 10.10.2018 22:43</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Message</div>
                            <div className="statistic-table-col">Thanks for the dinner</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">fee</div>
                            <div className="statistic-table-col">€0,16</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">id</div>
                            <div className="statistic-table-col">77494662BC27230538763992</div>
                          </div>
                          <div className="statistic-table-row">
                            <div className="statistic-table-col">Status</div>
                            <div className="statistic-table-col">Done</div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </>
                ) : (
                    <>
                      <CardHeader>
                        <i className="card-header-icon fpp-icon-bell" />
                        <CardTitle className="card-title-action">Activity</CardTitle>
                      </CardHeader>
                      <CardBody className="px-0 pb-0">
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
                              <div className="activity-timeline-group-body">

                                <div className="activity-timeline-list">
                                  <div className="activity-timeline-item activity-success">
                                    <div className="activity-timeline-item-time">
                                      <div className="activity-timeline-item-time-icon">
                                        <i className="fpp-icon-paper-plane" />
                                      </div>
                                      <div className="activity-timeline-item-time-value">13:34</div>
                                    </div>
                                    <div className="activity-timeline-item-info">
                                      <div className="activity-timeline-item-info-row text-label">app</div>
                                      <div className="activity-timeline-item-info-row">
                                        <strong>€10,60</strong> | magnus lindab
                                    </div>
                                    </div>
                                    <i className="activity-timeline-item-show-more fpp-icon-arrow-right" onClick={this.toggleActivity} />
                                  </div>

                                  <div className="activity-timeline-item">
                                    <div className="activity-timeline-item-time">
                                      <div className="activity-timeline-item-time-icon">
                                        <i className="fpp-icon-phone-custom" />
                                      </div>
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
                            </div>

                            <div className="activity-timeline-group">
                              <div className="activity-timeline-group-header">Yesterday</div>
                              <div className="activity-timeline-group-body">

                                <div className="activity-timeline-list">
                                  <div className="activity-timeline-item activity-danger">
                                    <div className="activity-timeline-item-time">
                                      <div className="activity-timeline-item-time-icon">
                                        <i className="fpp-icon-message" />
                                      </div>
                                      <div className="activity-timeline-item-time-value">13:32</div>
                                    </div>
                                    <div className="activity-timeline-item-info">
                                      <div className="activity-timeline-item-info-row text-label">Imessage</div>
                                      <div className="activity-timeline-item-info-row">
                                        <strong>€12,90</strong> | Tom Raddic
                                    </div>
                                    </div>
                                    <i className="activity-timeline-item-show-more fpp-icon-arrow-right" onClick={this.toggleActivity} />
                                  </div>

                                  <div className="activity-timeline-item activity-success">
                                    <div className="activity-timeline-item-time">
                                      <div className="activity-timeline-item-time-icon">
                                        <i className="fpp-icon-paper-plane" />
                                      </div>
                                      <div className="activity-timeline-item-time-value">16:54</div>
                                    </div>
                                    <div className="activity-timeline-item-info">
                                      <div className="activity-timeline-item-info-row text-label">fb messanger</div>
                                      <div className="activity-timeline-item-info-row">
                                        <strong>€10,60</strong> | magnus lindab
                                    </div>
                                    </div>
                                    <i className="activity-timeline-item-show-more fpp-icon-arrow-right" onClick={this.toggleActivity} />
                                  </div>

                                  <div className="activity-timeline-item">
                                    <div className="activity-timeline-item-time">
                                      <div className="activity-timeline-item-time-icon">
                                        <i className="fpp-icon-phone-custom" />
                                      </div>
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
                    </>
                  )}
              </Card>
            </Col>
          </Row>
          }
        </div>
      </>
    );
  }
}

export default Dashboard;
