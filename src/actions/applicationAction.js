import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;
const token = localStorage.getItem('token');

export const getApplicationQuestions = id => (dispatch) => {
    const url = `${domain}/details/${id}`;
    axios({
        method: 'GET',
        url,
        headers: {
            Autorization: `Bearer ${token}`,
        }
    })
    .then(res => {
        dispatch({
            type: GET_APPLICATION_QUESTIONS,
            companyInfo: res.data[0],
        })
    });
}