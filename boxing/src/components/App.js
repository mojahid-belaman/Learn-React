import { Component } from "react";
import Box from "./Box";
import Header from "./Header"
import MemberInfo from "./MemberInfo";

class App extends Component {
    constructor() {
        super();

        this.state = { 
            memberinfo: MemberInfo,
            index: 0,
            myVar: [],
            newArr: []
        };

        this.clickHundler = this.clickHundler.bind(this);
    }

    mapping(arr) {
        const members = arr.map(el => {
                         return (<Box
                                     key = {el.id}
                                     img = {el.img}
                                     name = {el.name}
                                     specialist = {el.specialist}
                                     phone = {el.phone}
                                     email = {el.email}
                                     website = {el.website}
                                 />);
         });
        
         return members;
    }

    clickHundler() {
        this.setState((prevState) => {
            if (this.state.newArr.length === 0)
                this.state.newArr = this.mapping(this.state.memberinfo);
            if (this.state.index < this.state.memberinfo.length)
                this.state.myVar.push(this.state.newArr[this.state.index]);
            return this.state.index < this.state.memberinfo.length ? {index: prevState.index + 1} : {index: this.state.index};
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <button onClick={this.clickHundler}>Click Me</button>
                <div className="all-box">
                    {this.state.myVar}
                </div>
            </div>
        );
    }
}

export default App;