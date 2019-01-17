import { GET_ID_USER, SIGNUP_USER, PUT_NEW_PASSWORD, GET_TOKEN_NEW_PASSWORD } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const getIdUser = (email, password, userType) => dispatch => {
  const url = `${domain}api/auth/signin/${userType}`;
  const body = {
    email: email,
    password: password
  };
  axios
    .post(url, body)
    .then(res => {
      localStorage.setItem("token", res.headers["x-access-token"]);
      localStorage.setItem("userType", userType);
      localStorage.setItem("idUser", res.data.id);

      dispatch({
        type: GET_ID_USER,
        idUser: res.data.id
      });
    })
    .catch(err => alert("Mot de passe ou email incorrect"));
};

export const signUpUser = (data, userType) => dispatch => {
  const url = `${domain}api/auth/signup/${userType}`;
  const { email, password, description, name, siret, link, phone, logo } = data;
  const body = {
    email,
    password,
    description,
    name,
    siret,
    link,
    phone,
    logo
  };

  const f = new FormData();
  f.append("email", body.email);
  f.append("password", body.password);
  f.append("description", body.description);
  f.append("name", body.name);
  f.append("siret", body.siret);
  f.append("link", body.link);
  f.append("phone", body.phone);
  f.append("logo", body.logo);

  axios
    .post(url, f)

    .then(res => {
      dispatch({
        type: SIGNUP_USER,

      });
    })
    .catch(err => console.log("signUpUser", err));
};

export const putNewPassword = (password, token) => dispatch => {
  const url = `${domain}api/auth/newpassword`
  axios.put(url, { password }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch({
        type: PUT_NEW_PASSWORD,
      })
    })
}

export const getTokenForNewPassword = (userType, email) => dispatch => {
  const url = `${domain}api/auth/newpassword`
  const body = {
    userType, 
    email
  } 
  axios.post(url, body)
    .then(res => {
      dispatch({
        type: GET_TOKEN_NEW_PASSWORD,
      })
    })
}
