import {
    FETCH_LIST_USERS,
    FETCH_USER_INFO,
    REQUEST_LOADING_LIST_USERS,
    REQUEST_REJECTED_LIST_USERS
} from '../actions/users/action';

const INITIAL_STATE = {
    usersInfos: [],
    userInfo: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_LIST_USERS:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_LIST_USERS:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_LIST_USERS:
            return {
                ...state,
                usersInfos: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
