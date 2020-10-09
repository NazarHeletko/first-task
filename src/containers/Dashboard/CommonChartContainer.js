import { connect } from 'react-redux';
import CommonChart from '../../views/Dashboard/CommonChart';

const mapStateToProps = (state) => {
    const { commonChart } = state.appUserReducer.store;
    return {
        state,
        data: commonChart.data || {
            labels: [],
            datasets: []
        },
        statictic: commonChart.statistic || {},
        online: state.appUserReducer.store.online || 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const CommonChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommonChart);

export default CommonChartContainer;