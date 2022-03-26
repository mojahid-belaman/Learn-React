import { Component } from "react";

// function Box(props) {
//     return (
//         <div className={props.class}>
//             <img src={props.img} />
//             <InfoBox class="info" info={props}/>
//         </div>
//     );
// }

class Box extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="box">
                <div className="image">
                    <img src={this.props.img} />
                </div>
                <div className="info" style={{backgroundColor: !this.props.website ? "#e65100" : "#212121"}}>
                    <h3>{this.props.name}</h3>
                    <span>{this.props.specialist}</span>
                    <div>
                        Phone: <span>{this.props.phone}</span><br />
                        Email: <span>{this.props.email}</span><br />
                        Website: <span>{this.props.website}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;