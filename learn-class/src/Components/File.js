import { Component } from "react";

class File extends Component {

    constructor() {
        super();

        this.state = {answer: "No"};
    }

    getSchool(){
        return (
            <span>25 ans</span>
        );
    }

    render() {
        return (
            <div>
                <h1>Hello Mr.{this.props.name} {this.getSchool()}</h1>
                <p>Do You Love Me ?</p><span>{this.state.answer}</span>
            </div>
        );
    } 
}

export default File;