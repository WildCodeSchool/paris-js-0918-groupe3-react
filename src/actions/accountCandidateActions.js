import { GET_CANDIDATE_INFO } from "./types";
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
