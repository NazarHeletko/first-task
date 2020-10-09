import { connect } from 'react-redux';
import Translations from '../views/Translations/Translations';
import { getLanguages } from 'actions/translations';
import { getLanguage } from 'actions/translations';
import { patchLanguage } from 'actions/translations';
import { createLanguage } from 'actions/translations';

const mapStateToProps = (state) => {
    return {
        state,
        querying: state.translationsReducer.store.querying,
        languages: state.translationsReducer.store.languages,
        selectedLanguage: state.translationsReducer.store.selectedLanguage,
        baseLanguage: state.translationsReducer.store.baseLanguage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getLanguages: () => {
            dispatch(getLanguages())
        },
        getLanguage: (id) => {
            dispatch(getLanguage({ id }))
        },
        patchLanguage: (id, changes) => {
            dispatch(patchLanguage({ id, changes }))
        },
        createLanguage: (tag, display_name) => {
            dispatch(createLanguage({ tag, display_name }))
        },
    };
};

const TranslationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Translations);

export default TranslationsContainer;