import ActionTypes from "../action-types";

interface SearchRepositories {
    type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesFailed {
    type: ActionTypes.SEARCH_REPOSITORIES_FAILED;
    payload: string
}

type Action = SearchRepositories | SearchRepositoriesSuccess | SearchRepositoriesFailed

export default Action
