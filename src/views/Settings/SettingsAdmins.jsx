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
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col, DropdownItem, DropdownMenu,
  DropdownToggle, FormGroup, Input, Label,
  Row, Table,
  UncontrolledDropdown, UncontrolledTooltip
} from "reactstrap";
import _ from "lodash";
import moment from "moment";

import FormGroupMd from "../CustomComponents/FormGroupMd";


class SettingsAdmins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRoleName: false
    };
  }

  componentDidMount() {
    this.props.getPermissionUsers()
    this.props.getPermissions()
  }

  getUserPermissionGroupName(p_g_id) {
    if (this.props.groups) {
      return _.result(_.find(this.props.groups, i => i._id === p_g_id), "display_name")
    }
    return "";
  }

  setAdminNewPermission = (index, p_g_id) => () => {
    this.props.updateUserPermissions(this.props.admins[index]._id, p_g_id, moment().add(1, "year").unix());
  }

  toggleRoleName = () => {
    const currentState = this.state.showRoleName;
    this.setState({showRoleName: !currentState});
  };

  onMouseShowTooltip = (row, col) => {
    if (this.refs["row" + row]) {
      this.refs["row" + row].setState({isOpen: true});
    }
    
    if (this.refs["col" + col]) {
      this.refs["col" + col].setState({ isOpen: true });
    }
    
  };

  onMouseHideTooltip = (row, col) => {
    if (this.refs["row" + row]) {
      this.refs["row" + row].setState({ isOpen: false });
    }
    if (this.refs["col" + col]) {
      this.refs["col" + col].setState({ isOpen: false });
    }
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
                  <i className="card-header-icon fpp-icon-user"/>
                  <CardTitle className="card-title-action">Invite Admin</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="form-split">
                    <FormGroupMd className="md-form">
                      <Input
                        type="text"
                      />
                      <Label>Email</Label>
                    </FormGroupMd>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color="dropdown-initial"
                      >
                        Role
                        <i className="fpp-icon-caret-r dropdown-icon"/>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Admin</DropdownItem>
                        <DropdownItem>Support</DropdownItem>
                        <DropdownItem>Technical</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    color="primary"
                    className="btn-link btn-block btn-lg"
                    disabled
                  >
                    Send
                  </Button>
                </CardFooter>
              </Card>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-user"/>
                  <CardTitle className="card-title-action">Pending Invitations</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="admin-action-list">
                    <div className="admin-action-list__item">
                      <div className="admin-action-list__info">
                        <div className="admin-action-list__row">sam.separd@forpeeps.eu</div>
                        <div className="admin-action-list__row text-uppercase text-info-light">link expires in 5 days</div>
                      </div>
                      <div className="admin-action-list__actions">
                        <div className="admin-action-list__row">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="dropdown-initial"
                            >
                              Support
                              <i className="fpp-icon-caret-r dropdown-icon"/>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>1</DropdownItem>
                              <DropdownItem>2</DropdownItem>
                              <DropdownItem>3</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                        <div className="admin-action-list__row">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="dropdown"
                            >
                              <i className="fpp-icon-ellipsis"/>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>
                                <i className="fpp-icon-resend mr-2"/>
                                Re-send
                              </DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem className="item-danger">
                                <i className="fpp-icon-trash mr-2"/>
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </div>

                    <div className="admin-action-list__item">
                      <div className="admin-action-list__info">
                        <div className="admin-action-list__row">thomas.hasek@forpeeps.eu</div>
                        <div className="admin-action-list__row text-uppercase text-danger">LINK EXPIRED</div>
                      </div>
                      <div className="admin-action-list__actions">
                        <div className="admin-action-list__row">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="dropdown-initial"
                            >
                              Admin
                              <i className="fpp-icon-caret-r dropdown-icon"/>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>1</DropdownItem>
                              <DropdownItem>2</DropdownItem>
                              <DropdownItem>3</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                        <div className="admin-action-list__row">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="dropdown"
                            >
                              <i className="fpp-icon-ellipsis"/>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>
                                <i className="fpp-icon-resend mr-2"/>
                                Re-send
                              </DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem className="item-danger">
                                <i className="fpp-icon-trash mr-2"/>
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </div>
                  </div>

                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-user"/>
                  <CardTitle className="card-title-action">Admins</CardTitle>
                </CardHeader>
                <CardBody>
                  {this.props.admins && this.props.admins.map((prop, x) => (
                    <div className="admin-action-list">
                      <div className="admin-action-list__item">
                        <div className="admin-action-list__info">
                          <div className="admin-action-list__row">{prop.name}</div>
                          <div className="admin-action-list__row text-info-light"></div>
                        </div>
                        <div className="admin-action-list__actions">
                          <div className="admin-action-list__row">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                color="dropdown-initial"
                              >
                                {this.getUserPermissionGroupName(prop.membership.permissions_group_id)}
                                <i className="fpp-icon-caret-r dropdown-icon"/>
                              </DropdownToggle>
                              <DropdownMenu right>
                                {this.props.groups.map((prop, y) => (
                                  <DropdownItem onClick={this.setAdminNewPermission(x, prop._id).bind(this)} key={y} value={prop._id}>{prop.display_name}</DropdownItem>
                                ))}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          <div className="admin-action-list__row">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                color="dropdown"
                              >
                                <i className="fpp-icon-ellipsis"/>
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem>
                                  <i className="fpp-icon-reset-1 mr-2"/>
                                  Reset password
                                </DropdownItem>
                                <DropdownItem>
                                  <i className="fpp-icon-reset-2 mr-2"/>
                                  Reset 2FA
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem className="item-danger">
                                  <i className="fpp-icon-pause mr-2"/>
                                  Suspend admin
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-main-info card-main-info-scroll">
                <CardHeader>

                  <UncontrolledDropdown>
                    <DropdownToggle
                      color="dropdown"
                    >
                      <i className="fpp-icon-ellipsis"/>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.toggleRoleName}>
                        <i className="fpp-icon-add mr-2"/>
                        Add new role
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem className="item-danger">
                        <i className="fpp-icon-trash mr-2"/>
                        Delete role
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <i className="card-header-icon fpp-icon-user"/>
                  <CardTitle>Roles & Permissions</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  {this.state.showRoleName && (
                    <FormGroupMd className="md-form settings-table-name">
                      <Input
                        type="text"
                      />
                      <Label>Role name</Label>
                    </FormGroupMd>
                  )}
                  <Table responsive className="settings-table settings-table-roles">
                    <thead>
                    <tr className="settings-table-hr-light">
                      <th/>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user" id="col1"/>
                          <UncontrolledTooltip placement="top" modifiers={{ preventOverflow: { boundariesElement: 'window' } }} target="col1" ref="col1" delay={{ show: 0, hide: 0 }}>
                          Col 1
                        </UncontrolledTooltip>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user" id="col2" />
                          <UncontrolledTooltip placement="top" modifiers={{ preventOverflow: { boundariesElement: 'window' } }} target="col2" ref="col2" delay={{ show: 0, hide: 0 }}>
                            Col 2
                        </UncontrolledTooltip>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user"/>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user"/>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user"/>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user"/>
                      </th>
                      <th>
                        <i className="settings-table-th-icon fpp-icon-user"/>
                      </th>
                    </tr>
                    <tr>
                      <th>profile</th>
                      <th>
                        <FormGroup inline check>
                            <Label check onMouseEnter={() => { this.onMouseShowTooltip(0, 1) }} onMouseLeave={() => { this.onMouseHideTooltip(0, 1) }}>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th>
                        <span className="badge" id="row1">p</span>
                        <UncontrolledTooltip modifiers={{ preventOverflow: { boundariesElement: 'window' } }} placement="top" target="row1" ref="row1" delay={{ show: 0, hide: 0 }} animation={"false"}>
                          row 1
                        </UncontrolledTooltip>
                      </th>
                      <td>
                        <FormGroup inline check>
                          <Label check onMouseEnter={() => {this.onMouseShowTooltip(1, 1)}} onMouseLeave={() => {this.onMouseHideTooltip(1, 1)}}>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check onMouseEnter={() => { this.onMouseShowTooltip(1, 2) }} onMouseLeave={() => { this.onMouseHideTooltip(1, 2) }}>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    </tbody>
                    <thead>
                    <tr>
                      <th>app users</th>
                      <th>
                        <FormGroup inline check>
                            <Label check onMouseEnter={() => { this.onMouseShowTooltip(0, 1) }} onMouseLeave={() => { this.onMouseHideTooltip(0, 1) }}>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                      <th>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                  <span className="check"/>
                                </span>
                          </Label>
                        </FormGroup>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th>
                        <span className="badge" id="row2">p</span>
                          <UncontrolledTooltip modifiers={{ preventOverflow: { boundariesElement: 'window' } }} placement="top" target="row2" ref="row2" delay={{ show: 0, hide: 0 }} animation={"false"}>
                          row 2
                        </UncontrolledTooltip>
                      </th>
                      <td>
                        <FormGroup inline check>
                          <Label check onMouseEnter={() => { this.onMouseShowTooltip(2, 1) }} onMouseLeave={() => { this.onMouseHideTooltip(2, 1) }}>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check onMouseEnter={() => { this.onMouseShowTooltip(2, 2) }} onMouseLeave={() => { this.onMouseHideTooltip(2, 2) }}>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="badge">p</span>
                      </th>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="badge" id="s">s</span>
                        <UncontrolledTooltip placement="top" target="s" delay={0}>
                          s
                        </UncontrolledTooltip>
                      </th>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="badge">sr</span>
                      </th>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox" defaultChecked/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup inline check>
                          <Label check>
                            <Input type="checkbox"/>
                            <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    color="primary"
                    className="btn-link btn-block btn-lg"
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

export default SettingsAdmins;
