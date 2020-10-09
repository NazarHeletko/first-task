import React, {Component} from "react";
import {convertToDateTimeWithTimeZone} from '../../libs/date'
import $ from "jquery";

import DatetimeRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false,
      activePeriod: '1w',
      startDate: moment(),
      endDate: moment()
    };

    this.periods = [
      {title: '1H', value: '1h'},
      {title: '1D', value: '1d'},
      {title: '1W', value: '1w'},
      {title: '1M', value: '1m'},
      {title: '1Y', value: '1y'},
      {title: 'All', value: 'all'},
    ]
  }

  onDatesChange = ({startDate, endDate}) => {
    if (this.props.onChangeCB) {
      const returnDates = {
        startDate: startDate ? convertToDateTimeWithTimeZone(startDate) : null,
        endDate: endDate ? convertToDateTimeWithTimeZone(endDate) : null,
      }
      this.props.onChangeCB(returnDates)
    }
    this.closeCalendar();
  }

  onChangeCustomDate = (dates) => {
    this.setState({activePeriod: 'custom'})
    const format = 'YYYY-MM-DD'

    this.onDatesChange({
      startDate: dates.startDate.format(format + ' 00:00:00'),
      endDate: dates.endDate.format(format + ' 23:59:59'),
    })
  }
  componentDidMount() {
    $('div.daterangepicker').on('DOMSubtreeModified', () => {
      this.hideEmptyWeeks();
    })
  }
  
  onChangePeriod = (e, period) => {
    e.preventDefault();
    this.setState({activePeriod: period});
    const returnDates = {
      startDate: null,
      endDate: null,
    }

    if (period !== 'all') {
      const dateRanges = {
        '1h': [moment().subtract('1', 'h'), moment()],
        '1d': [moment().subtract('1', 'd'), moment()],
        '1w': [moment().subtract('1', 'w'), moment()],
        '1m': [moment().subtract('1', 'M'), moment()],
        '1y': [moment().subtract('1', 'y'), moment()],
      }

      returnDates.startDate = dateRanges[period][0];
      returnDates.endDate = dateRanges[period][1];
    }
    this.onDatesChange(returnDates);
  }

  closeCalendar = () => {
    this.setState({showCalendar: false})
  }

  hideEmptyWeeks = () => {
    const weeksOff = $('tr:has(td.off)');
    weeksOff.map((i, week) => {
      if ($(week).find('td.off').length === 7) {
        $(week).css("opacity", 0)
      }
      return true;
    }) 
  }

  render() {

    const {activePeriod} = this.state;
    return (
      <ul className="chart-tabs">
        {
          this.periods.map((period, key) => {
            return (
              <li className={activePeriod === period.value ? 'active' : ''} key={key} onClick={(e) => {
                this.onChangePeriod(e, period.value)
              }}>{period.title}</li>
            )
          })
        }
        <li className={`daterangepicker-wr daterangepicker-chart ${activePeriod === 'custom' ? 'active' : ''}`}>
          <DatetimeRangePicker
            locale={
              { format: "DD.MM.YYYY", firstDay: 1 }
            }
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            showWeekNumbers
            opens={"left"}
            onApply={(event, picker) => { this.onChangeCustomDate(picker) }}
          >
            <span className="open-calendar">Custom</span>
          </DatetimeRangePicker>
        </li>
      </ul>
    );
  }
}
