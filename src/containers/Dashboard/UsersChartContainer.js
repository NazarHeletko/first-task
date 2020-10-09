import { connect } from 'react-redux';
import UsersChart from '../../views/Dashboard/UsersChart';

const mapStateToProps = (state) => {
    const { usersChart : { data, total, countries }} = state.appUserReducer.store;
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

const UsersChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersChart);

export default UsersChartContainer;