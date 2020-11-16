import React, { Component } from 'react';
import axios from 'axios';

class Trial extends Component {

    startProcess = e => {
        // console.log("hua toh hai kuch");
        axios.post('http://localhost:8080/engine-rest/process-definition/key/age-checker/start', {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
            }).catch(error => { console.log(error) });
    }


    render() {
        return (
            <div>
                <button onClick={this.startProcess}>click me</button>
            </div>

        );
    }
}

export default Trial;