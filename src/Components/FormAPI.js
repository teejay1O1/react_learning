import React, { Component, useEffect } from 'react';
import axios from 'axios';

/*
POST
localhost:8080/engine-rest/process-definition/key/checkProcess/start  to start the process

GET
localhost:8080/engine-rest/task?processDefinitionKey=checkProcess to get task id

Post
localhost:8080/engine-rest/task/{task-id}/complete    to complete task:
body = 
{"variables":
    {"age": {"value": 3}
    }

    
*/
class FormAPI extends Component{

    constructor (props){
        super(props);

        this.state= {
            username:"",
            age:0,
        }
    }

    url= "localhost:8080/engine-rest";
    processId="checkProcess"
    header={'Content-Type':'application/json'}

    startProcessHandler= e =>{
        e.preventDefault();
        let uri=this.url+"/process-definition/key/"+ this.processId+"/start";
        alert(uri);
        axios.post(uri,{},{headers:this.header}).then(response=>{console.log(response)}).catch(error=> {console.log(error)});
    }

    handleSubmit = e =>{
        alert(`${this.state.username} had the following age: ${this.state.age}`);
        // axios.get('localhost:8080/engine-rest/task?processDefinitionKey=checkProcess',{headers:this.header}).then(response=>{this.setState({task_id : response.task_id})});
        axios.post('localhost:8080/engine-rest/task/checkProcess/complete');
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }


    render(){
        return (
        <div>
            <h1>Application</h1>
            <button onClick= {this.startProcessHandler}>start process</button>
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <label> UserName </label>
                    <input type='text'value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>age</label>
                    <input type='int' value={this.state.age} onChange= {this.handleAgeChange} />
                    
                </div>
                <div>
                    <button type="submit">submit age</button>
                </div>
            </form>
        </div>
    );
    }
}

export default FormAPI;