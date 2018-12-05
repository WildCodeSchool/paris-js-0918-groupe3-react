import { GET_OFFERS } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const searchOffers = (data) => dispatch => {
  const {title, place, contract_type} = data;
  const url = `${domain}api/offers?search=${title}&place=${place}&type=${contract_type}`;
  axios.get(url).then(res => {
  
      dispatch({
          type: GET_OFFERS,
          offersList:res.data
      })
  });
};
