import { connect } from 'react-redux';
import RegisterPage from '../views/Pages/RegisterPage';

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

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);

export default RegisterContainer;