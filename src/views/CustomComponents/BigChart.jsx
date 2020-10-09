import React from "react";

import PropTypes from "prop-types";
import {Line} from "react-chartjs-2";
import {Card, CardBody, Col, Row} from "reactstrap";
import DatePicker from './DatePicker'

import {
  dashboardPanelChart,
  chartStatisticDashbord
} from "variables/charts.jsx";

export default class BigChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleDateChange = (startDate, endDate) => {
    console.log('startDate: ', startDate, ', endDate: ', endDate);
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="chart-actions">
              <Row>
                {this.props.chartOnline === true && (
                  <Col sm="auto">
                    <div className="users-online">
                      <i className="users-online-icon fpp-icon-chart"/>
                      <span className="users-online-counter">324</span>
                      Users online
                    </div>
                  </Col>
                )}
                <Col sm="auto" className="ml-auto">
                  <DatePicker onChangeCB={({startDate, endDate}) => { this.handleDateChange(startDate, endDate) }}/>
                </Col>
              </Row>
            </div>
            <div className="panel-header-chart">
              <Line
                data={dashboardPanelChart.data}
                options={dashboardPanelChart.options}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-stats card-raised">
              <CardBody>
                <Row>
                  {this.props.chartStatistic.map((item, index) =>
                    <Col lg key={index}>
                      <div className="statistics">
                        <div className="info">
                          <label className="statistics-checkbox">
                            <input type="checkbox" defaultChecked={item.checked}/>
                            <i className="checkmark fpp-icon-uncheck" style={{color: item.checkboxColor}}/>
                          </label>
                          <div className="icon icon-secondary">
                            <i className={item.icon}/>
                          </div>
                          <h3 className="info-title">{item.infoTitle}</h3>
                          <h6 className="stats-title">{item.statsTitle}</h6>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

BigChart.defaultProps = {
  chartOnline: false,
  chartStatistic: chartStatisticDashbord
};

BigChart.propTypes = {
  chartOnline: PropTypes.bool
};
