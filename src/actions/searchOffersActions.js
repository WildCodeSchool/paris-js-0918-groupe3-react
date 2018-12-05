import { GET_OFFERS } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const searchOffers = (title, place, contract_type) => dispatch => {
  const Search = title;
  const location = place;
  const type = contract_type;
  const url = `${domain}api/offers/?=${Search},?=${location},?=${type}`;
  axios.get(url).then(res => {
      dispatch({
          type: GET_OFFERS,
          offersList:res.data
      })
  });
};
