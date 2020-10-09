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
  DropdownToggle,
  Row,
  UncontrolledDropdown,
  Table,
  Label,
  Input,
  FormGroup,
  UncontrolledTooltip
} from "reactstrap";
import Switch from 'react-bootstrap-switch';

import FormGroupMd from '../CustomComponents/FormGroupMd'

class SettingsPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmenu: false,
      showPlanName: false
    };
  }

  toggleSubmenu = () => {
    const currentState = this.state.showSubmenu;
    this.setState({showSubmenu: !currentState});
  };

  togglePlanName = () => {
    const currentState = this.state.showPlanName;
    this.setState({showPlanName: !currentState});
  };

  onMouseShowTooltip = (row) => {
    this.refs["row" + row].setState({isOpen: true})
  };

  onMouseHideTooltip = (row) => {
    this.refs["row" + row].setState({isOpen: false})
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
                  <i className="card-header-icon fpp-icon-profit"/>
                  {this.state.showSubmenu ? (
                    <CardTitle className="card-title-action">
                      <i className="back-btn fpp-icon-arrow-left" onClick={this.toggleSubmenu}/>
                      Silver
                    </CardTitle>
                  ) : (
                    <CardTitle>Subscription Plans</CardTitle>
                  )}
                </CardHeader>
                <CardBody className="px-0">
                  {this.state.showSubmenu ? (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Enable</div>
                          <div className="statistic-table-col">
                            <Switch
                              onText=""
                              offText=""
                              defaultValue={true}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Price</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="€2.99" className="statistic-table-form-control"/>
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Trial</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="60 Days" className="statistic-table-form-control"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">

                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Silver</div>
                          <div className="statistic-table-col">
                            <span>€2.99 / 60 Days</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>
                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Gold</div>
                          <div className="statistic-table-col">
                            <span>Off</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  )}
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
                      <DropdownItem onClick={this.togglePlanName}>
                        <i className="fpp-icon-add mr-2"/>
                        Add new plan
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <i className="card-header-icon fpp-icon-profit"/>
                  <CardTitle>Subscription Plans</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  {this.state.showPlanName && (
                    <FormGroupMd className="md-form settings-table-name">
                      <Input
                        type="text"
                      />
                      <Label>Plan name</Label>
                    </FormGroupMd>
                  )}
                  <Table responsive className="settings-table">
                    <thead>
                      <tr>
                        <th/>
                        <th>free</th>
                        <th>silver</th>
                        <th>gold</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <span className="badge" id="row1">amb</span>
                          <UncontrolledTooltip modifiers={{ preventOverflow: { boundariesElement: 'window' } }} placement="top" target="row1" ref="row1">
                            amb
                          </UncontrolledTooltip>
                        </th>
                        <td>
                          <FormGroup inline check>
                            <Label check onMouseEnter={() => {this.onMouseShowTooltip(1)}} onMouseLeave={() => {this.onMouseHideTooltip(1)}}>
                              <Input type="checkbox" defaultChecked/>
                              <span className="form-check-sign">
                                <span className="check"/>
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <FormGroup inline check>
                            <Label check onMouseEnter={() => { this.onMouseShowTooltip(1) }} onMouseLeave={() => { this.onMouseHideTooltip(1) }}>
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
                          <span className="badge" id="row2">ra</span>
                          <UncontrolledTooltip placement="top" target="row2" ref="row2">
                            ra
                          </UncontrolledTooltip>
                        </th>
                        <td>
                          <FormGroup inline check>
                            <Label check onMouseEnter={() => { this.onMouseShowTooltip(2) }} onMouseLeave={() => { this.onMouseHideTooltip(2) }}>
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
                      </tr>
                      <tr>
                        <th>
                          <span className="badge" id="row3">mae</span>
                          <UncontrolledTooltip placement="top" target="row3">
                            mae
                          </UncontrolledTooltip>
                        </th>
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
                      </tr>
                      <tr>
                        <th>
                          <span className="badge" id="row4">rp</span>
                          <UncontrolledTooltip placement="top" target="row4">
                            rp
                          </UncontrolledTooltip>
                        </th>
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
                      </tr>
                      <tr>
                        <th>
                          <span className="badge" id="row5">sb</span>
                          <UncontrolledTooltip placement="top" target="row5">
                            Split bills
                          </UncontrolledTooltip>
                        </th>
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
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    color="primary"
                    className="btn-link btn-block btn-lg"
                  >
                    {this.state.showPlanName ? 'Save new plan' : 'Save'}
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

export default SettingsPlans;
