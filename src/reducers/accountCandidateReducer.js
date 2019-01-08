import { GET_CANDIDATE_INFO } from "../actions/types";

const initialState = {
  candidateInfo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_INFO:
      return {
        ...state,
        candidateInfo: action.candidateInfo
      };

    default:
      return state;
  }
}
