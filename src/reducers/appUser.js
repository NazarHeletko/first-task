import { combineReducers } from 'redux';

let initState = {
    online: 4565,
    commonChart: {
        data: {
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
            datasets: {
                payments: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
                users: [50, 175, 140, 245, 175, 155, 190, 195, 185, 170, 190, 95]
            }
        },
        statistic: {
            payments: 654544,
            amount: 438382,
            users: 3533,
            subscriptions: 58383,
            revenue: 12322
        }
    },
    usersChart: {
        total: 1263043,
        data: {
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
            dataset: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]      
        },
        countries: [
            { key: 'de', country: "Germany", count: 2332, percentage: 18.46 },
            { key: 'es', country: "Estonia", count: 2129, percentage: 16.86 },
            { key: 'fi', country: "Finland", count: 1987, percentage: 16.86 },
            { key: 'no', country: "Norway", count: 1654, percentage: 13.09 },
            { key: 'fr', country: "France", count: 1288, percentage: 10.20 },
            { key: 'pl', country: "Poland", count: 1001, percentage: 7.92 },
            { key: 'au', country: "Australia", count: 760, percentage: 10.35 },
            { key: 'gb', country: "United Kingdom", count: 690, percentage: 7.87 },
            { key: 'ro', country: "Romania", count: 600, percentage: 5.94 },
            { key: 'br', country: "Brazil", count: 550, percentage: 4.34 }
        ]
    },
    subscriptionsChart: {
        total: 6759,
        data: {
            labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            dataset: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        },
        countries: [
            { key: 'de', country: "Germany", count: 2332, percentage: 18.47 },
            { key: 'es', country: "Estonia", count: 2129, percentage: 16.86 },
            { key: 'fi', country: "Finland", count: 1987, percentage: 16.86 },
            { key: 'no', country: "Norway", count: 1654, percentage: 13.09 },
            { key: 'fr', country: "France", count: 1288, percentage: 10.20 },
            { key: 'pl', country: "Poland", count: 1001, percentage: 7.92 },
            { key: 'au', country: "Australia", count: 760, percentage: 10.35 },
            { key: 'gb', country: "United Kingdom", count: 690, percentage: 7.87 },
            { key: 'ro', country: "Romania", count: 600, percentage: 5.94 },
            { key: 'br', country: "Brazil", count: 550, percentage: 4.34 }
        ]
    },
    activeCountriesChart: {
        total: 13,
        data: {
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
            dataset: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90, 101, 54]
        },
        countries: {
            AU: 760,
            BR: 550,
            CA: 120,
            DE: 1300,
            FR: 540,
            GB: 690,
            GE: 200,
            IN: 200,
            RO: 600,
            RU: 300,
            US: 2920
        }
    }
};

const store = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const appUserReducer = combineReducers({
    store,
});

export default appUserReducer;