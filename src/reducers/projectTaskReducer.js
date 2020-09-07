import { GET_PROJECT_TASK } from "../actions/types";

const initialState = {
    project_tasks: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TASK:
            return {
                ...state,
                project_tasks: action.payload,
            };

        default:
            return state;
    }
}
