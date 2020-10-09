export const chartColors = {
  chartColor: "#D7E2EC",
  chartColor2: "#C2D1E5",
  chartColor3: "#A2B5CF",
  chartColor4: "#748FB2",
  chartColor5: "#636890",
  chartColor6: "#EDF4F9",

  tooltipsBackgroundColor: "#31314F",
  tooltipsColor: "#FBFCFD"
}

export const chartOptions = {
    layout: {
        padding: {
            left: -6,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    maintainAspectRatio: false,
    tooltips: {
        enabled: false,
        backgroundColor: chartColors.tooltipsBackgroundColor,
        titleFontColor: chartColors.tooltipsColor,
        bodyFontColor: chartColors.tooltipsColor,
        bodySpacing: 4,
        xPadding: 10,
        yPadding: 8,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        cornerRadius: 6,
        callbacks: {
            title: function () {
                return null
            },
            label: function (tooltipItem, data) {
                return data.datasets.map((dataset, i) => {
                    return { data: dataset.data[tooltipItem.index], borderColor: dataset.borderColor, active: i === tooltipItem.datasetIndex };
                })
            },
        },
        custom: function (tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');

            // Create element on first render
            if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.setAttribute("style", "transform: translate(-50%, -100%); margin-top: -15px;");
                tooltipEl.innerHTML = '<div><span style="border-width: 5px 7px 0; border-style: solid; border-color:' + chartColors.tooltipsBackgroundColor + ' transparent transparent; position: absolute; top: 100%; left: 50%; margin-left: -7px;"></span><table></table></div>';
                document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
                tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = '<tbody><tr><td>';
                const lines = bodyLines[0].sort((a, b) => {
                    if (a.active > b.active) {
                        return -1;
                    }
                    if (a.active < b.active) {
                        return 1;
                    }
                    return 0;
                });

                lines.forEach(function (body, i) {
                    var colors = { borderColor: body.borderColor }
                    var style = 'background: transparent';
                    style += '; border-color:' + colors.borderColor;
                    style += '; border-width: 1px';
                    style += '; border-style: solid';
                    var span = '<span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; vertical-align: middle;' + style + '"></span>';
                    innerHtml += '<div style="margin: -5px auto; white-space: nowrap">' + span + '<span style="color:' + colors.borderColor + '; vertical-align: middle;">' + body.data + '</span></div>';
                });
                innerHtml += '</td></tr></tbody>';

                var tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = '14px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = chartColors.tooltipsBackgroundColor;
            tooltipEl.style.bodyFontColor = chartColors.tooltipsColor;
            tooltipEl.style.borderRadius = '6px';
            tooltipEl.style.color = "#fff";
        }
    },
    legend: {
        fillStyle: "#FFF",
        display: false,
        position: "bottom",
        reverse: false,
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    fontColor: chartColors.chartColor,
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 40
                },
                gridLines: {
                    borderDash: [3, 1],
                    borderDashOffset: 20,
                    drawTicks: true,
                    drawBorder: false,
                    display: true,
                    color: chartColors.chartColor,
                    zeroLineColor: chartColors.chartColor,
                    zeroLineBorderDash: [3, 1],
                    zeroLineWidth: 1
                }
            }
        ],
        xAxes: [
            {
                gridLines: {
                    display: false,
                    color: chartColors.chartColor,
                    drawBorder: false,
                },
                ticks: {
                    padding: 10,
                    fontColor: chartColors.chartColor,
                    fontStyle: "bold"
                }
            }
        ]
    }
}

export const datasetOptions = {
  pointBackgroundColor: chartColors.chartColor6,
  pointHoverBackgroundColor: chartColors.chartColor6,
  pointBorderWidth: 2,
  pointHoverRadius: 7,
  pointHoverBorderWidth: 2,
  pointRadius: 5,
  fill: true,
  backgroundColor: "transparent",
  borderWidth: 2.5,
}

export const simpleGraphDatasetOptions = {
  borderColor: chartColors.chartColor,
  pointBorderColor: "#fff",
  pointBackgroundColor: chartColors.chartColor,
  pointHoverBackgroundColor: "#fff",
  pointHoverBorderColor: chartColors.chartColor,
  pointBorderWidth: 2,
  pointHoverRadius: 7,
  pointHoverBorderWidth: 2,
  pointRadius: 5,
  fill: true,
  borderWidth: 2.5,
}

export const gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false,
        backgroundColor: chartColors.tooltipsBackgroundColor,
        titleFontColor: chartColors.tooltipsColor,
        bodyFontColor: chartColors.tooltipsColor,
        bodySpacing: 4,
        xPadding: 10,
        yPadding: 8,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        cornerRadius: 6,
        callbacks: {
            // title: function () {
            //     return null
            // },
            label: function (tooltipItem) {
                var label = tooltipItem.yLabel;
                return label;
            }
        },
        custom: function (tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');

            // Create element on first render
            if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.setAttribute("style", "transform: translate(-50%, -100%); margin-top: -15px;");
                tooltipEl.innerHTML = '<div><span style="border-width: 5px 7px 0; border-style: solid; border-color:' + chartColors.tooltipsBackgroundColor + ' transparent transparent; position: absolute; top: 100%; left: 50%; margin-left: -7px;"></span><table></table></div>';
                document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
                tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = '<psan>' + tooltipModel.title +'</psan><tbody>';

                bodyLines.forEach(function (body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var style = 'background: transparent';
                    style += '; border-color:' + colors.borderColor;
                    style += '; border-width: 1px';
                    style += '; border-style: solid';
                    var span = '<span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; vertical-align: middle;' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + '<span style="color:' + colors.borderColor + '; vertical-align: middle;">' + body + '</span></td></tr>';
                });
                innerHtml += '</tbody>';

                var tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = '12px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = chartColors.tooltipsBackgroundColor;
            tooltipEl.style.bodyFontColor = chartColors.tooltipsColor;
            tooltipEl.style.borderRadius = '6px';
            tooltipEl.style.color = "#fff";
        }
    },
    responsive: 1,
    scales: {
        yAxes: [
            {
                display: 0,
                ticks: {
                    display: false,
                    maxTicksLimit: 5
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false
                }
            }
        ],
        xAxes: [
            {
                display: 0,
                ticks: {
                    display: false
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false
                }
            }
        ]
    },
    layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
};

const de_flag = require("../assets/img/flags/DE.png");
const es_flag = require("../assets/img/flags/ES.png");
const fi_flag = require("../assets/img/flags/FI.png");
const no_flag = require("../assets/img/flags/NO.png");
const fr_flag = require("../assets/img/flags/FR.png");
const pl_flag = require("../assets/img/flags/PL.png");
const au_flag = require("../assets/img/flags/AU.png");
const gb_flag = require("../assets/img/flags/GB.png");
const ro_flag = require("../assets/img/flags/RO.png");
const br_flag = require("../assets/img/flags/BR.png");

export const flags = {
  de: de_flag,
  es: es_flag,
  fi: fi_flag,
  no: no_flag,
  fr: fr_flag,
  pl: pl_flag,
  au: au_flag,
  gb: gb_flag,
  ro: ro_flag,
  br: br_flag
}
