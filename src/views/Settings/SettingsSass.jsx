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
import {Card, CardBody, CardHeader, CardTitle, Col, Row, CardFooter, Button} from "reactstrap";

class SettingsSass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewPlan: false
    };
  }

  addNewPlan = () => {
    const currentState = this.state.addNewPlan;
    this.setState({addNewPlan: !currentState});
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
                  <i className="card-header-icon fpp-icon-cloud-d"/>
                  <CardTitle>Silver (26)</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">lifetime value</div>
                        <div className="statistic-table-col">€310 665,00</div>
                      </div>
                    </div>

                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">plan name</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="Silver" className="statistic-table-form-control" />
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">monthly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€500" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">yearly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€5000" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max api-s</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="10" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max requests</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="200 000" className="statistic-table-form-control"/>
                        </div>
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
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-cloud-d"/>
                  <CardTitle>Gold (31)</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">lifetime value</div>
                        <div className="statistic-table-col">€310 665,00</div>
                      </div>
                    </div>

                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">plan name</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="Gold" className="statistic-table-form-control" />
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">monthly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€800" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">yearly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€8000" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max api-s</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="100" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max requests</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="2 000 000" className="statistic-table-form-control"/>
                        </div>
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
            <Col md={4}>
              <Card className="card-main-info">
                <CardHeader>
                  <i className="card-header-icon fpp-icon-cloud-d"/>
                  <CardTitle>Platinum (12)</CardTitle>
                </CardHeader>
                <CardBody className="px-0">
                  <div className="statistic-table">
                    <div className="statistic-table-thead">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">lifetime value</div>
                        <div className="statistic-table-col">€310 665,00</div>
                      </div>
                    </div>

                    <div className="statistic-table-tbody">
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">plan name</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="Platinum" className="statistic-table-form-control" />
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">monthly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€2 000" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">yearly price</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="€20 000" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max api-s</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="unlimited" className="statistic-table-form-control"/>
                        </div>
                      </div>
                      <div className="statistic-table-row">
                        <div className="statistic-table-col">max requests</div>
                        <div className="statistic-table-col">
                          <input type="text" defaultValue="unlimited" className="statistic-table-form-control"/>
                        </div>
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
            <Col md={4}>
              {this.state.addNewPlan ? (
                <Card className="card-main-info">
                  <CardHeader>
                    <i className="card-header-icon fpp-icon-cloud-d"/>
                    <CardTitle>New Plan</CardTitle>
                  </CardHeader>
                  <CardBody className="px-0">
                    <div className="statistic-table">
                      <div className="statistic-table-thead">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">lifetime value</div>
                          <div className="statistic-table-col">€0</div>
                        </div>
                      </div>

                      <div className="statistic-table-tbody">
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">plan name</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="New Plan" className="statistic-table-form-control" />
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">monthly price</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="€0" className="statistic-table-form-control"/>
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">yearly price</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="€0" className="statistic-table-form-control"/>
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">max api-s</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="0" className="statistic-table-form-control"/>
                          </div>
                        </div>
                        <div className="statistic-table-row">
                          <div className="statistic-table-col">max requests</div>
                          <div className="statistic-table-col">
                            <input type="text" defaultValue="0" className="statistic-table-form-control"/>
                          </div>
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
              ) : (
                <Card className="card-main-info">
                  <CardHeader>
                    <i className="card-header-icon fpp-icon-cloud-d"/>
                  </CardHeader>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      className="btn-link btn-block btn-lg"
                      onClick={this.addNewPlan}
                    >
                      <i className="fpp-icon-plus btn-icon-l"/>
                      Add new plan
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SettingsSass;
