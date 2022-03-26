import React, { Component, useState } from "react";

export class AppC extends Component {
    constructor() {
        super();

        this.state = { number: 0};

        this.clickHundler = this.clickHundler.bind(this);
    }

    clickHundler() {
        this.setState(() => {
            return {number: this.state.number + 1}
        })
    } 

    render(){
        return (
            <div className="container">
                <h1>{this.state.number}</h1>
                <button onClick={this.clickHundler}>Click Me</button>
            </div>
        );
    }
}

export function AppF() {

    const [counter, setCounter] = useState(0);
    function clickHundler() {
        setCounter(counter + 1);
    } 

    return (
        <div className="container">
            <h1>{counter}</h1>
            <button onClick={clickHundler}>Click Me</button>
        </div>  
    );
}