import { GET_ID_USER } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getIdUser = (email, password, userType) => async dispatch => {
  
  const url = `${domain}api/auth/signin/${userType}`;
  const body = { 
    email: email, 
    password: password
  };
  await axios
    .post(url, body)
      .then(res => {
       
       
        
        localStorage.setItem("token", res.headers["x-access-token"]);
        dispatch({
          type: GET_ID_USER,
          idUser: res.data.id
        });
        
      })
      .catch(err => console.log("getIdUser", err));
};

