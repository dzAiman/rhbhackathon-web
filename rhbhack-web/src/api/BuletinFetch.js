import axios from 'axios';

export function getBuletin() {
    return axios.get('http://localhost:2001/buletin')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}