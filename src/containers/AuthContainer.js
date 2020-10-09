import { connect } from 'react-redux';
import AuthLayout from '../layouts/Auth';

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
    };
};

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthLayout);

export default AuthContainer;