import axios from 'axios';

export function getContracts() {
    return axios.get('http://localhost:2001/contract')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}