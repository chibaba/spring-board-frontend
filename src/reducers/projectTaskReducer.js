import { GET_PROJECT_TASKS, DELETE_PROJECT_TASKS } from "../actions/types";

const initialState = {
    project_tasks: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload,
            };

        case DELETE_PROJECT_TASKS:
            return {
                ...state,
            };

        default:
            return state;
    }
}
