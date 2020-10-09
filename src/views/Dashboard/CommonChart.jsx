import React from "react";

import {Line} from "react-chartjs-2";
import {Card, CardBody, Col, Row} from "reactstrap";
import DatePicker from '../CustomComponents/DatePicker'
import { formatMoney, formatNumbers } from '../../libs/format'

import { chartOptions, chartColors, datasetOptions } from '../../libs/chart'

export default class CommonChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        payments: true,
        users: true,
      },
    };

    this.graphs = {
      payments: { title: "Payments", color: chartColors.chartColor, icon: 'fpp-icon-paper-plane'},
      amount: { title: "Amount", color: chartColors.chartColor2, icon: 'fpp-icon-paper-plane', prefix: '€' },
      users: { title: "Users", color: chartColors.chartColor3, icon: 'fpp-icon-user-group' },
      subscriptions: { title: "Subscriptions", color: chartColors.chartColor4, icon: 'fpp-icon-round-arrows' },
      revenue: { title: "Revenue", color: chartColors.chartColor5, icon: 'fpp-icon-round-arrows', prefix: '€' }
    }
  }

  handleDateChange = (startDate, endDate) => {
    console.log('startDate: ', startDate, ', endDate: ', endDate);
  }

  formattedData = (canvas) => {
    const { labels, datasets } = this.props.data;

    canvas.getContext("2d");
    return {
      labels: labels,
      datasets: Object.keys(datasets).filter(key => { return this.state.filters[key] }).map(key => {
        const dataset = datasets[key];
      
        const color = this.graphs[key] ? this.graphs[key].color : chartColors.chartColor;
        return {
          name: key,
          label: key,

          borderColor: color,
          pointBorderColor: color,
          pointHoverBorderColor: color,

          data: dataset,
          ...datasetOptions
        }
      })
    };
  }

  handleClickFilter = (e) => {
    const { target : { name, checked } } = e;
    this.setState({
      filters: {
        ...this.state.filters,
        [name]: checked,
      }
    });
  }

  render() {
    const { statictic } = this.props;
    return (
      <>
        <Row>
          <Col>
            <div className="chart-actions">
              <Row>
                <Col sm="auto">
                  <div className="users-online">
                    <i className="users-online-icon fpp-icon-chart"/>
                    <span className="users-online-counter">{formatNumbers(this.props.online)}</span>
                    Users online
                  </div>
                </Col>
                <Col sm="auto" className="ml-auto">
                  <DatePicker onChangeCB={({startDate, endDate}) => { this.handleDateChange(startDate, endDate) }}/>
                </Col>
              </Row>
            </div>
            <div className="panel-header-chart">
              <Line
                key={new Date().getTime()}
                data={this.formattedData}
                options={chartOptions}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-stats card-raised">
              <CardBody>
                <Row>
                  {Object.keys(this.graphs).map((key, index) => {
                    const graph = this.graphs[key];
                    return (
                      <Col lg key={index}>
                        <div className="statistics">
                          <div className="info">
                            <label className="statistics-checkbox">
                              <input type="checkbox" name={key} defaultChecked={this.state.filters[key]} onClick={ (e) => { this.handleClickFilter(e) } }/>
                              <i className="checkmark fpp-icon-uncheck" style={{ color: graph.color }} />
                            </label>
                            <div className="icon icon-secondary">
                              <i className={graph.icon} />
                            </div>
                            <h3 className="info-title">{graph.prefix ? graph.prefix : ''}{formatMoney(statictic[key])}</h3>
                            <h6 className="stats-title">{graph.title}</h6>
                          </div>
                        </div>
                      </Col>
                    )
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

CommonChart.defaultProps = {
  
};