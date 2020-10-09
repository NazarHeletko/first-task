import moment from 'moment'

export const DATE_FORMAT = 'MM/DD/YYYY'
export const DATE_FORMAT_WITH_TIME = 'MM/DD/YYYY hh:mm A'

export const convertToDateTime = (dateTime) => {
    return moment.utc(dateTime).format(DATE_FORMAT_WITH_TIME);
}

export const convertToDateTimeWithTimeZone = (dateTime) => {
    return moment(dateTime).format(DATE_FORMAT_WITH_TIME);
}

export const convertToDate = (dateTime) => {
    return moment.utc(dateTime).format(DATE_FORMAT);
}

export const convertUTCToCST = (dateTime) => {
    return moment.utc(dateTime).utcOffset('-06:00').format(DATE_FORMAT_WITH_TIME);
}