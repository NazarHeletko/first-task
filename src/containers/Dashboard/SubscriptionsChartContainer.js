import { connect } from 'react-redux';
import SubscriptionsChart from '../../views/Dashboard/SubscriptionsChart';

const mapStateToProps = (state) => {
    const { subscriptionsChart : { data, total, countries }} = state.appUserReducer.store;
    return {
        state,
        data: data || {
            labels: [],
            dataset: []
        },
        total: total || 0,
        countries: countries || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const SubscriptionsChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionsChart);

export default SubscriptionsChartContainer;