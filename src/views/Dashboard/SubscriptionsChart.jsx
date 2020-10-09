import React from "react";

import {Line} from "react-chartjs-2";
import {
  Card, CardHeader,
  CardBody,
  CardTitle,
  Table} from "reactstrap";
import { formatNumbers, formatPercents } from '../../libs/format'
import { simpleGraphDatasetOptions, gradientChartOptionsConfiguration, flags } from '../../libs/chart'

export default class SubscriptionsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  formattedData = (canvas) => {
    const { labels, dataset } = this.props.data;

    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");

    return {
      labels: labels,
      datasets: [{
        label: "Subscriptions",
        data: dataset,
        backgroundColor: gradientFill,

        ...simpleGraphDatasetOptions
      }],
    }
  };

  createTableData = () => {
    const { countries } = this.props;

    var tableRows = [];
    for (var i = 0; i < countries.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td className="td-flag">
            <div className="flag">
              {flags[countries[i].key] ? 
                <img src={flags[countries[i].key]} alt={`${countries[i].key}_flag`} />                
              : '-'}
            </div>
          </td>
          <td className="text-label">{countries[i].country}</td>
          <td className="text-right">{formatNumbers(countries[i].count)}</td>
          <td className="text-right td-percent">{formatPercents(countries[i].percentage)}</td>
        </tr>
      );
    }
    return tableRows;
  }

  render() {
    return (
      <Card className="card-chart">
        <CardHeader>
          <CardTitle tag="h2">
            <i className="card-title-icon fpp-icon-round-arrows" />
            <span>{formatNumbers(this.props.total)}</span>
          </CardTitle>
          <h5 className="card-category">Subscriptions</h5>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line
              data={this.formattedData}
              options={gradientChartOptionsConfiguration}
            />
          </div>
          <Table responsive>
            <tbody>{this.createTableData()}</tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

SubscriptionsChart.defaultProps = {
  
};