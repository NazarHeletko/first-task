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
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row} from "reactstrap";
import Switch from 'react-bootstrap-switch';


class SettingsEcommerce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmenu: false
    };
  }

  toggleSubmenu = () => {
    const currentState = this.state.showSubmenu;
    this.setState({showSubmenu: !currentState});
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
                  <i className="card-header-icon fpp-icon-eshop-d"/>
                  {this.state.showSubmenu ? (
                    <CardTitle className="card-title-action">
                      <i className="back-btn fpp-icon-arrow-left" onClick={this.toggleSubmenu}/>
                      Belgium
                    </CardTitle>
                  ) : (
                    <CardTitle>Discount</CardTitle>
                  )}
                </CardHeader>
                <CardBody className="px-0">
                  {this.state.showSubmenu ? (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Discount</div>
                          <div className="statistic-table-col">
                            <Switch
                              onText=""
                              offText=""
                              defaultValue={true}
                            />
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Amount</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="€10.00" className="statistic-table-form-control"/>
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">Discount ends</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="12.08.2020" className="statistic-table-form-control"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="statistic-table">
                      <div className="statistic-table-tbody">

                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Estonia</div>
                          <div className="statistic-table-col">
                            <span>On</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>
                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Latvia</div>
                          <div className="statistic-table-col">
                            <span>On</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>
                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Lithuania</div>
                          <div className="statistic-table-col">
                            <span>On</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>
                        <div className="statistic-table-row statistic-table-row-action" onClick={this.toggleSubmenu}>
                          <div className="statistic-table-col">Finland</div>
                          <div className="statistic-table-col">
                            <span>On</span>
                            <i className="fpp-icon-arrow-right statistic-action-icon"/>
                          </div>
                        </div>

                      </div>
                    </div>

                  )}
                </CardBody>
                {this.state.showSubmenu && (
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      className="btn-link btn-block btn-lg"
                      disabled
                    >
                      Save
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SettingsEcommerce;
