import React from 'react';

class First extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            color: "yellow",
            inputValue: ""
        };
    }

    changeColor() {
        this.setState({ color: this.state.inputValue})
    }

    render(){
        
        return(
            <div className="card" style={{ backgroundColor: this.state.color}}>
                <p>Name: {this.props.name}</p>
                <p>{this.props.position ? this.props.position : "React Dev"}</p>
                <p> Age: {this.state.age}</p>
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={(e) => this.setState({ inputValue: e.target.value})
                } 
                    />
                <button onClick={() => {this.changeColor()}} >change</button>
            </div>
        )
    }
}

export default First