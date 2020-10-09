import { combineReducers } from 'redux';
import { LANGUGES_RESPONSE } from 'actions/translations';
import { QUERYING } from 'actions/translations';
import { SINGLE_LANGUGE_RESPONSE, PATCH_LANGUGE_RESPONSE } from 'actions/translations';
import { MERGE_LANGUAGE_CHANGES } from 'actions/translations';
import { CREATE_LANGUAGE_RESPONSE } from 'actions/translations';

let initState = {
    querying: false,
    languages: [],
    selectedLanguage: undefined,
    baseLanguage: {},
    changes: {}
};

const store = (state = initState, action) => {
    switch (action.type) {
        case QUERYING:
            return {
                ...state,
                querying: action.data
            }
        case LANGUGES_RESPONSE:
            return {
                ...state,
                languages: action.data.languages,
            };
        case SINGLE_LANGUGE_RESPONSE:
            return {
                ...state,
                selectedLanguage: action.data,
                baseLanguage: {
                    translation: action.data.base_translations,
                    updates: action.data.base_updates,
                },
            };
        case MERGE_LANGUAGE_CHANGES:
            var s = state;
            s.selectedLanguage.translations = {
                ...s.selectedLanguage.translations,
                ...action.data
            }
            for (let change of Object.keys(action.data)) {
                console.log(change)
                s.selectedLanguage.updated[change] = Date.now()
            }
            return s;
        case PATCH_LANGUGE_RESPONSE:
            // update state
            return {
                ...state
            }
        case CREATE_LANGUAGE_RESPONSE:
            // update state
            state.languages.push({
                id: action.data["id"],
                tag: action.data["tag"],
                display_name: action.data["display_name"],
            })
            return {
                ...state
            }
        default:
            return state;
    }
};

const translationsReducer = combineReducers({
    store,
});

export default translationsReducer;