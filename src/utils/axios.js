import axios from 'axios';

export default function() {
    const token = localStorage.getItem('userToken');

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}