import { connect } from 'react-redux';
import SettingsAdmins from '../views/Settings/SettingsAdmins';
import { getPermissionUsers, getPermissions, updateUserPermissions } from '../actions/admins';

const mapStateToProps = (state) => {
    return {
        state,
        querying: state.adminsReducer.store.querying,
        groups: state.adminsReducer.store.groups,
        admins: state.adminsReducer.store.admins,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getPermissionUsers: () => {
            dispatch(getPermissionUsers())
        },
        getPermissions: () => {
            dispatch(getPermissions())
        },
        updateUserPermissions: (user_id, permissions_group_id, active_until) => {
            dispatch(updateUserPermissions({ user_id, permissions_group_id, active_until }))
        },
    };
};

const SettingsAdminsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsAdmins);

export default SettingsAdminsContainer;