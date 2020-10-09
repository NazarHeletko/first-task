import { connect } from 'react-redux';
import { getFPPUsers } from 'actions/admins';
import Dashboard from 'views/Dashboard/Dashboard';
import { getPermissions } from 'actions/admins';
import { updateUserPermissions } from 'actions/admins';

const mapStateToProps = (state) => {
    return {
        state,
        querying: state.adminsReducer.store.querying,
        users: state.adminsReducer.store.users,
        groups: state.adminsReducer.store.groups,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getFPPUsers: () => {
            dispatch(getFPPUsers())
        },
        getPermissions: () => {
            dispatch(getPermissions())
        },
        updateUserPermissions: (user_id, permissions_group_id, active_until) => {
            dispatch(updateUserPermissions({ user_id, permissions_group_id, active_until }))
        },
    };
};

const TranslationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default TranslationsContainer;