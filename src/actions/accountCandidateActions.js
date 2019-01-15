import { GET_CANDIDATE_INFO, GET_INFO_OFFERS_APPLICATION, GET_ANSWER_CANDIDATE} from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem("token");

export const getCandidateInfo = () => dispatch => {
  const url = `${domain}api/candidates`;

  axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_CANDIDATE_INFO,
      candidateInfo: res.data[0]
    });
  });
};

export const getInfoOffersApplication = () => dispatch => {
  const url = `${domain}api/candidates/applications`;

  axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_INFO_OFFERS_APPLICATION,
      getInfoOffers: res.data
    });
  });
};

export const getAnswerCandidate = (idOffer) => dispatch => {
  const url = `${domain}api/candidates/offer${idOffer}/answers`;

  axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_ANSWER_CANDIDATE,
      getAnswerCandidate: res.data
    });
  });
};
