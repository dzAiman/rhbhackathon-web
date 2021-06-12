import React, { useState, useEffect } from 'react';
import axios from 'axios';

let url = 'http://localhost:2001/';
const Api = () => {

    const [contracts, SetContracts] = useState([]);


    const fetchContract = () =>{
        axios.get('http://localhost:2001/contracts')
        .then(res =>{
            SetContracts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
        return(
            {contracts}
        )
    };

    useEffect(() => {
        fetchContract();
    }, []);
}

export default Api;