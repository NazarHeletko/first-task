import React from "react";

import {Line} from "react-chartjs-2";
import { VectorMap } from "react-jvectormap";

import {
  Card, CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";
import { formatNumbers } from '../../libs/format'
import { simpleGraphDatasetOptions, gradientChartOptionsConfiguration } from '../../libs/chart'

export default class ActiveCountriesChart extends React.Component {
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
        label: "Active Countries",
        data: dataset,
        backgroundColor: gradientFill,

        ...simpleGraphDatasetOptions
      }],
    }
  };

  render() {
    return (
      <Card className="card-chart">
        <CardHeader>
          <CardTitle tag="h2">
            <i className="card-title-icon fpp-icon-world" />
            <span>{formatNumbers(this.props.total)}</span>
          </CardTitle>
          <h5 className="card-category">Active countries</h5>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line
              data={this.formattedData}
              options={gradientChartOptionsConfiguration}
            />
          </div>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent"
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "360px"
            }}
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#DCE6F0",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              }
            }}
            series={{
              regions: [
                {
                  values: this.props.countries,
                  scale: ['#DCE6F0', '#54739C'],
                  normalizeFunction: "polynomial"
                }
              ]
            }}
          />
        </CardBody>
      </Card>
    );
  }
}

ActiveCountriesChart.defaultProps = {
  
};