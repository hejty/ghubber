// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import { getRepositoriesByUsername } from 'github-flow-js';
import {
    PROFILE_REPOSITORIES_REQUEST,
    PROFILE_REPOSITORIES_REQUEST_SUCCESS,
    PROFILE_REPOSITORIES_REQUEST_FAIL,
    //
    PROFILE_REPOSITORIES_MORE_REQUEST,
    PROFILE_REPOSITORIES_MORE_REQUEST_SUCCESS,
    PROFILE_REPOSITORIES_MORE_REQUEST_FAIL
} from 'constants';

export function fetchRepositories(username: string): ThunkAction {
    return dispatch => {
        dispatch({
            type: PROFILE_REPOSITORIES_REQUEST
        });

        const request = getRepositoriesByUsername(
            username,
            {
                sort: 'pushed',
                'per_page': 50
            }
        );

        request.then(
            (result) => {
                dispatch({
                    type: PROFILE_REPOSITORIES_REQUEST_SUCCESS,
                    payload: result
                });
            },
            () => {
                dispatch({
                    type: PROFILE_REPOSITORIES_REQUEST_FAIL
                });
            }
        );
    };
}

export function fetchMoreRepositories(username: string, page: number): ThunkAction {
    return dispatch => {
        dispatch({
            type: PROFILE_REPOSITORIES_MORE_REQUEST
        });

        const request = getRepositoriesByUsername(
            username,
            {
                page,
                sort: 'pushed',
                'per_page': 50
            }
        );

        request.then(
            (result) => {
                dispatch({
                    type: PROFILE_REPOSITORIES_MORE_REQUEST_SUCCESS,
                    payload: {
                        page: page,
                        repositories: result
                    }
                });
            },
            () => {
                dispatch({
                    type: PROFILE_REPOSITORIES_MORE_REQUEST_FAIL
                });
            }
        );
    };
}
