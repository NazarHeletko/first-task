import { connect } from 'react-redux';
import AdminLayout from '../layouts/Admin';
import { fetchAuthUser } from 'actions/auth';

const mapStateToProps = (state) => {
    return {
        state,
        authenticated: state.authReducer.store.authenticated,
        user: state.authReducer.store.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        checkAuthentication: () => {
            dispatch(fetchAuthUser());
        }
    };
};

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminLayout);

export default AdminContainer;