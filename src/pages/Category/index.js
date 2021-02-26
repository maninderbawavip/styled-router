import { Component } from "react"

export class Profile extends Component{


    componentDidMount() {
        //fetch api call using this.props.match.params.id
        // give me data for sanjeev
        this.setState()
    }


    render(){
        return(<h1>This is my Category Page for { this.props.match.params.id }
        <div>
        {this.person.name}
        </div>
      
        
        </h1>)
    }
}





export const Category = (props) => {
    console.log(props)
    return(<h1>This is my Category Page for { props.match.params.id }</h1>)
}