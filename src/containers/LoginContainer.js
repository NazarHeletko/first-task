import { connect } from 'react-redux';
import LoginPage from '../views/Pages/LoginPage';
import { startVerification } from 'actions/auth';
import { confirmVerification } from 'actions/auth';
import { confirmPasscode } from '../actions/auth';

const mapStateToProps = (state) => {
    return {
        state,
        error: state.authReducer.store.message,
        querying: state.authReducer.store.querying,
        verification_started: state.authReducer.store.verification_started,
        confirm_started: state.authReducer.store.confirm_started,
        passcode_started: state.authReducer.store.passcode_started,
        authenticated: state.authReducer.store.authenticated,
        user: state.authReducer.store.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        startVerification: async number => {
            dispatch(startVerification({ number }));
        },
        confirmVerification: (number, code) => {
            dispatch(confirmVerification({ number, code }));
        },
        confirmPasscode: (passcode) => {
            dispatch(confirmPasscode({ passcode }));
        },
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);

export default LoginContainer;