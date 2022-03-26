
// function Header(props) {
//     return (
//         <div className={props.class}>
//             <h3>Our Team</h3>
//         </div>
//     );
// }

import { Component } from "react";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="header">
                <h3>Our Team</h3>
            </div>
        );
    }
}

export default Header;