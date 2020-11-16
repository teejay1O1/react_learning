import React from 'react';

class DyanamicComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.surname}</h1>
            </div>
        )
    }
}

export default DyanamicComponent;