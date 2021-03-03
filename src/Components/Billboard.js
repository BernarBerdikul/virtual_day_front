import React, { Component } from 'react';
import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImJlcmRpa3VsIiwiZXhwIjoxNjE0ODA5MTQ4LCJlbWFpbCI6ImJlcm5hci5iZXJkaWt1bEBtYWlsLnJ1IiwibG9naW4iOiJiZXJkaWt1bCJ9.Bx6plUdBFEwDfGm6bcb83qS6aRn-zIu1StstvaTQzQE'

export default class Billboard extends Component {

    state = {
        billboards: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/core/billboards/`, {headers: {
            'Authorization': `JWT ${token}`
        }})
          .then(res => {
            const billboards = res.data;
            this.setState({ billboards });
          });
    }

    render() {
        return (
            <div>
                {this.state.billboards.map(item => 
                    <div key={item.id}>
                        <h1>{item.id} {item.title}</h1>
                        <p>{item.created_at}</p>
                        <p>{item.period_start}</p>
                        <p>{item.period_end}</p>
                    </div>
                )}
            </div>
        );
    }
}