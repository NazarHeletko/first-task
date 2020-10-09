import { connect } from 'react-redux';
import ActiveCountriesChart from '../../views/Dashboard/ActiveCountriesChart';

const mapStateToProps = (state) => {
    const { activeCountriesChart : { data, total, countries }} = state.appUserReducer.store;
    return {
        state,
        data: data || {
            labels: [],
            dataset: []
        },
        total: total || 0,
        countries: countries || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const ActiveCountriesChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveCountriesChart);

export default ActiveCountriesChartContainer;