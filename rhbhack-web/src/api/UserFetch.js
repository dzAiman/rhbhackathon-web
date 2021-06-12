import axios from 'axios';

export function getUser() {
    return axios.get('http://localhost:2001/users')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}