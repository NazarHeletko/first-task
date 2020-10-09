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
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
import { chartOptions, gradientChartOptionsConfiguration, chartColors } from "libs/chart"
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################
const chartStatisticDashbord = [
  {
    icon: 'fpp-icon-paper-plane',
    checked: true,
    infoTitle: '644 993',
    statsTitle: 'Payments',
    checkboxColor: chartColors.chartColor
  },
  {
    icon: 'fpp-icon-paper-plane',
    checked: false,
    infoTitle: '€ 339 721',
    statsTitle: 'Amount',
    checkboxColor: chartColors.chartColor2
  },
  {
    checked: true,
    icon: 'fpp-icon-user-group',
    infoTitle: '12 630',
    statsTitle: 'Users',
    checkboxColor: chartColors.chartColor3
  },
  {
    checked: false,
    icon: 'fpp-icon-round-arrows',
    infoTitle: '6 230',
    statsTitle: 'Subscriptions',
    checkboxColor: chartColors.chartColor4
  },
  {
    checked: false,
    icon: 'fpp-icon-round-arrows',
    infoTitle: '€ 29 543',
    statsTitle: 'Revenue',
    checkboxColor: chartColors.chartColor5
  }
];

const chartStatisticEcommerce = [
  {
    icon: 'fpp-icon-eshop-d',
    checked: true,
    infoTitle: '234',
    statsTitle: 'Stores',
    checkboxColor: chartColors.chartColor
  },
  {
    icon: 'fpp-icon-web-transactions',
    checked: true,
    infoTitle: '23 410',
    statsTitle: 'Transactions',
    checkboxColor: chartColors.chartColor2
  },
  {
    checked: false,
    icon: 'fpp-icon-revenue',
    infoTitle: '€203 448',
    statsTitle: 'Revenue',
    checkboxColor: chartColors.chartColor3
  },
  {
    checked: false,
    icon: 'fpp-icon-round-arrows',
    infoTitle: '221',
    statsTitle: 'Subscriptions',
    checkboxColor: chartColors.chartColor4
  },
  {
    checked: false,
    icon: 'fpp-icon-credit',
    infoTitle: '€2 207',
    statsTitle: 'Revenue',
    checkboxColor: chartColors.chartColor5
  }
];


const chartStatisticSaas = [
  {
    icon: 'fpp-icon-company',
    checked: true,
    infoTitle: '2',
    statsTitle: 'Companies',
    checkboxColor: chartColors.chartColor
  },
  {
    icon: 'fpp-icon-api-d',
    checked: true,
    infoTitle: '17',
    statsTitle: 'Api connections',
    checkboxColor: chartColors.chartColor2
  },
  {
    checked: false,
    icon: 'fpp-icon-cloud-arrows',
    infoTitle: '1 934 997',
    statsTitle: 'Api requests',
    checkboxColor: chartColors.chartColor3
  },
  {
    checked: false,
    icon: 'fpp-icon-round-arrows',
    infoTitle: '2',
    statsTitle: 'Active subscriptions',
    checkboxColor: chartColors.chartColor4
  },
  {
    checked: false,
    icon: 'fpp-icon-credit',
    infoTitle: '€298 766',
    statsTitle: 'Revenue',
    checkboxColor: chartColors.chartColor5
  }
];

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 5
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

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: canvas => {
    canvas.getContext("2d");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          name: 'payments',
          // label: "Payments",
          borderColor: chartColors.chartColor,
          pointBorderColor: chartColors.chartColor,
          pointBackgroundColor: chartColors.chartColor6,
          pointHoverBackgroundColor: chartColors.chartColor6,
          pointHoverBorderColor: chartColors.chartColor,
          pointBorderWidth: 2,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: "transparent",
          borderWidth: 2.5,
          data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
        },
        {
          name: 'users',
          // label: "Users",
          borderColor: chartColors.chartColor2,
          pointBorderColor: chartColors.chartColor2,
          pointBackgroundColor: chartColors.chartColor6,
          pointHoverBackgroundColor: chartColors.chartColor6,
          pointHoverBorderColor: chartColors.chartColor2,
          pointBorderWidth: 2,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: "transparent",
          borderWidth: 2.5,
          data: [50, 175, 140, 245, 175, 155, 190, 195, 185, 170, 190, 95]
        }
      ]
    };
  },
  options: chartOptions
};

// ##############################
// // // Dashboard view - Active Users - Card
// #############################

const dashboardActiveUsersChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Users",
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
          backgroundColor: gradientFill,
          borderWidth: 2.5,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - Summer Email Campaign - Card
// #############################

const dashboardSummerChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");
    return {
      labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Subscription",
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
          backgroundColor: gradientFill,
          borderWidth: 2.5,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - Active Countries - Card
// #############################

const dashboardActiveCountriesCard = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October"
      ],
      datasets: [
        {
          label: "Active Countries",
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
          backgroundColor: gradientFill,
          borderWidth: 2.5,
          data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Charts view - Line Chart - Card
// #############################

const chartsLine1 = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColors.chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Charts view - Line Chart 2 - Card
// #############################

const chartsLine2 = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColors.chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
// // // Charts view - Bar Chart - Card
// #############################

const chartsBar1 = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#0073D0",
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBorderWidth: 0,
          pointRadius: 0,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
    },
    options: {
      legend: {
        display: false,
      },
    },
    responsive: 1,
    scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
  }
};

// ##############################
// // // Charts view - Bar Chart 2 - Card
// #############################

const chartsBar2 = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(194,209,229,0)");
    gradientFill.addColorStop(1, "rgba(194,209,229,0.3)");
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#0073D0",
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBorderWidth: 0,
          pointRadius: 0,
          fill: true,
          borderWidth: 1,
          data: [80, 49, 86, 96, 3, 20, 100, 35, 388, 190, 23, 300]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
    },
    options: {
      legend: {
        display: false,
      },
    },
    responsive: 1,
    scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
  }
};

export {
  chartColors,
  chartStatisticDashbord,
  chartStatisticEcommerce,
  chartStatisticSaas,
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardActiveUsersChart, // Chart for Dashboard view - Active Users Card
  dashboardSummerChart, // Chart for Dashboard view - Summer Email Campaign Card
  dashboardActiveCountriesCard, // Chart for Dashboard view - New Orders Card
  chartsLine1, // Chart for Charts view - Line Chart - Card
  chartsLine2, // Chart for Charts view - Line Chart 2 - Card
  chartsBar1, // Chart for Charts view - Bar Chart - Card
  chartsBar2 // Chart for Charts view - Bar Chart 2 - Card
};
