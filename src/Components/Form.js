import React,{Component} from 'react'

class Form extends Component {
 

    constructor(props){
        super(props)
        this.state= {
            username: '',
            comments: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} had the following comments: ${this.state.comments}`)
    }

    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <lable> UserName</lable>
                    <input type='int' value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>comment</label>
                    <textarea value={this.state.comments} onChange= {this.handleCommentsChange} />
                    
                </div>
                <div>
                    <button type="submit"></button>
                </div>
            </form>
        )
    }
}

export default Form;