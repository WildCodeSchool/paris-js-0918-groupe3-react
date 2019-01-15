import { GET_CANDIDATE_INFO, GET_INFO_OFFERS_APPLICATION, GET_ANSWER_CANDIDATE } from "../actions/types";

const initialState = {
  candidateInfo: [],
  listOfCandidatesApplications: [],
  answersCandidate: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_INFO:
      return {
        ...state,
        candidateInfo: action.candidateInfo
      };

      case GET_INFO_OFFERS_APPLICATION:
      return {
        ...state,
        listOfCandidatesApplications: action.getInfoOffers
      };

      case GET_ANSWER_CANDIDATE:
      return {
        ...state,
        answersCandidate: action.getAnswerCandidate
      };

    default:
      return state;
  }
}
